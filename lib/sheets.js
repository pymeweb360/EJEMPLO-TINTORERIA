// Descarga la hoja de tarifas publicada como CSV desde Google Sheets
// y la convierte en un array de objetos agrupados por categoría.
//
// Columnas esperadas en la hoja: Categoria, Servicio, Descripcion, Precio

function parseCsvLine(line) {
  // Parser simple de CSV que respeta comas dentro de comillas
  const values = [];
  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      values.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  values.push(current.trim());
  return values;
}

export async function getPricingData(csvUrl) {
  try {
    const res = await fetch(csvUrl, {
      // Cachea la respuesta 5 minutos: los precios no necesitan
      // reflejarse al instante, así la web sigue siendo muy rápida.
      next: { revalidate: 300 },
    });

    if (!res.ok) throw new Error("No se pudo leer la hoja de tarifas");

    const text = await res.text();
    const lines = text.trim().split("\n").filter(Boolean);
    if (lines.length < 2) return [];

    const headers = parseCsvLine(lines[0]).map((h) => h.toLowerCase());
    const rows = lines.slice(1).map((line) => {
      const values = parseCsvLine(line);
      const row = {};
      headers.forEach((header, i) => {
        row[header] = values[i] || "";
      });
      return row;
    });

    // Agrupar por categoría
    const grouped = {};
    for (const row of rows) {
      const category = row.categoria || "Servicios";
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push({
        name: row.servicio,
        description: row.descripcion,
        price: row.precio,
      });
    }

    return Object.entries(grouped).map(([category, items]) => ({
      category,
      items,
    }));
  } catch (error) {
    console.error("Error al leer las tarifas:", error);
    return null; // el componente muestra un mensaje de fallback
  }
}

// Descarga la hoja de "servicios" publicada como CSV desde Google Sheets.
// Columnas esperadas en la hoja: Titulo, Descripcion
export async function getServicesData(csvUrl) {
  if (!csvUrl) return null;

  try {
    const res = await fetch(csvUrl, {
      next: { revalidate: 300 },
    });

    if (!res.ok) throw new Error("No se pudo leer la hoja de servicios");

    const text = await res.text();
    const lines = text.trim().split("\n").filter(Boolean);
    if (lines.length < 2) return null;

    const headers = parseCsvLine(lines[0]).map((h) => h.toLowerCase());
    const rows = lines.slice(1).map((line) => {
      const values = parseCsvLine(line);
      const row = {};
      headers.forEach((header, i) => {
        row[header] = values[i] || "";
      });
      return row;
    });

    return rows
      .filter((row) => row.titulo)
      .map((row) => ({
        title: row.titulo,
        description: row.descripcion,
      }));
  } catch (error) {
    console.error("Error al leer los servicios:", error);
    return null; // se usará la lista de config/site.config.js como respaldo
  }
}
