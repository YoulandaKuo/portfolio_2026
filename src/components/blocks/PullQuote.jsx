/**
 * PullQuote — full-width large blockquote.
 *
 * Props:
 *   quote        — quote text (string or node, without quotation marks)
 *   attribution  — attribution line (e.g. "Maya Reyes · Director of Quality, Helix")
 */
export default function PullQuote({ quote, attribution }) {
  return (
    <section className="max-w-[1040px] mx-auto px-6 md:px-11 pt-[80px] md:pt-[120px]">
      <div className="max-w-[980px]">
        <blockquote
          className="m-0 font-serif italic leading-[1.18] text-porter relative pl-[46px]"
          style={{ fontSize: 'clamp(26px,4vw,44px)', textWrap: 'balance' }}
        >
          <span
            className="absolute left-0 top-[-4px] font-serif not-italic text-rust leading-[.8]"
            style={{ fontSize: 90 }}
          >
            "
          </span>
          {quote}
        </blockquote>
        {attribution && (
          <div className="mt-6 font-mono text-[11px] tracking-[.18em] uppercase text-ink-soft">
            — {attribution}
          </div>
        )}
      </div>
    </section>
  )
}
