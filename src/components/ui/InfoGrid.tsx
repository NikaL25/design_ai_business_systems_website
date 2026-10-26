export function InfoGrid({ items }: { items: string[][] }) {
  return (
    <div className="info-grid">
      {items.map(([title, copy], index) => (
        <article className="info-card" key={title}>
          <span className="card-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>
      ))}
    </div>
  )
}
