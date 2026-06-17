"use client";
import { useState } from "react";

function QAItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-2 border-ink bg-bg">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <div className="flex items-start gap-3">
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-accent pt-0.5">
            Q{index + 1}
          </span>
          <span className="text-sm font-bold">{item.q}</span>
        </div>
        <span className="shrink-0 text-lg font-bold text-accent leading-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="border-t-2 border-ink px-5 pb-5 pt-4 text-sm leading-relaxed text-ink/80">
          {item.a}
        </div>
      )}
    </div>
  );
}

export default function QABlock({ items, title = "Q&A" }) {
  return (
    <div className="mt-8 border-t-2 border-ink pt-8">
      <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-muted">{title}</p>
      <div className="space-y-2">
        {items.map((item, i) => (
          <QAItem key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
