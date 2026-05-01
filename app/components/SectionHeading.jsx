// Reusable heading for major sections — brutalist + AI futuristic.
// All sections share the same single accent (electric lime) for consistency.
// `color` prop is accepted but ignored, kept for backwards compatibility
// with existing call sites.

export default function SectionHeading({ index, title, subtitle }) {
  // `index`    — section number (e.g. "01") rendered as a lime chip.
  // `title`    — section name (uppercase, big, bold).
  // `subtitle` — optional one-liner under the title (rendered as a comment).
  return (
    <div className="mb-12 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="border-2 border-ink bg-accent px-2.5 py-0.5 text-sm font-bold text-ink shadow-brutal-sm">
          {index}
        </span>
        <h2 className="text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        <div className="ml-2 hidden h-[3px] flex-1 bg-ink sm:block" />
      </div>
      {subtitle ? (
        <p className="max-w-2xl text-base font-bold text-muted">
          <span className="text-accent">{">"} </span>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
