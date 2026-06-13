export default function SectionLabel({ num, label }) {
  return (
    <div className="font-mono text-[11px] tracking-[.2em] text-rust-deep uppercase mb-[18px] flex items-center gap-[10px]">
      {num && (
        <span
          className="inline-flex items-center justify-center flex-shrink-0"
          style={{ width: 22, height: 22, border: '1px solid #a44820', borderRadius: '50%', fontSize: 10 }}
        >
          {num}
        </span>
      )}
      {label}
    </div>
  )
}
