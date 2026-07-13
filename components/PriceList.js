export default function PriceList({ groups }) {
  if (!groups) {
    return (
      <p className="text-sm text-ink/60">
        No se han podido cargar las tarifas en este momento. Llámanos o
        escríbenos y te las confirmamos al momento.
      </p>
    );
  }

  return (
    <div className="grid gap-12">
      {groups.map((group) => (
        <div key={group.category}>
          <h3 className="font-display text-lg font-600 text-primary-dark">
            {group.category}
          </h3>

          <div className="mt-4 divide-y divide-line border-t border-line">
            {group.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-6 py-4"
              >
                <div>
                  <p className="font-medium text-ink">{item.name}</p>
                  {item.description && (
                    <p className="mt-1 text-sm text-ink/60">
                      {item.description}
                    </p>
                  )}
                </div>
                <p className="whitespace-nowrap font-display text-lg font-600 text-ink">
                  {item.price} €
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
