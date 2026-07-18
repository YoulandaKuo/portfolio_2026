/**
 * DetailsStrip — Role / Year / Type strip under a case study title.
 *
 * Props:
 *   items — array of [label, value] pairs
 */
export default function DetailsStrip({ items }) {
  return (
    <div className="max-w-[1040px] mx-auto px-11">
      <div className="py-9 border-b border-rule grid gap-[30px] font-mono text-[11px] tracking-[0.14em] uppercase" style={{ gridTemplateColumns: `repeat(${items.length},1fr)` }}>
        {items.map(([k, v]) => (
          <div key={k}>
            <span className="block text-ink-soft text-[10px] tracking-[.18em] mb-[6px]">{k}</span>
            <span className="text-porter text-[13px] tracking-[.06em]">{v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
