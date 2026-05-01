"use client";

// Sticky top navigation — brutalist + AI futuristic.
// Single electric-lime accent for active state. Bold mono everywhere.
// Brand mark on the left pairs a brutalist-framed avatar with a terminal-
// style handle. Active section is computed via IntersectionObserver.

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { profile, navLinks } from "@/lib/content";

export default function Navbar() {
  // Tracks the id of the section currently in view, for the active pill.
  const [activeId, setActiveId] = useState("hero");
  // Mobile menu open/closed.
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Watch every section we care about and pick whichever is most visible.
    const ids = [...navLinks.map((l) => l.id), "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-bg/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand — avatar + terminal-style handle.
            Drop your photo at public/profile.jpg to populate the avatar. */}
        <a
          href="#hero"
          className="group flex items-center gap-3 text-lg font-bold tracking-tight text-ink transition hover:text-ink/70"
        >
          {/* Brutalist-framed avatar — square, thick black border, lime shadow */}
          <span className="relative block h-11 w-11 shrink-0 border-2 border-ink bg-surface shadow-brutal-sm transition group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
            <Image
              src={profile.profileImage}
              alt={`${profile.name} portrait`}
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="hidden sm:inline">
            <span className="text-accent">$</span>{" "}
            {profile.name.toLowerCase().replace(" ", "_")}
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block px-4 py-2 text-base font-bold transition ${
                    isActive
                      ? "border-2 border-ink bg-accent text-ink shadow-brutal-sm"
                      : "text-ink hover:text-ink/60"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          {/* Get in Touch — solid black CTA */}
          <li>
            <a
              href="#contact"
              className="ml-2 block border-2 border-ink bg-ink px-4 py-2 text-base font-bold text-bg transition hover:bg-ink/90 hover:text-accent shadow-brutal-sm"
            >
              Get in Touch
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="border-2 border-ink p-2 text-ink md:hidden hover:bg-accent"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open ? (
        <div className="border-t-2 border-ink bg-bg md:hidden">
          <ul className="flex flex-col gap-3 px-6 py-6">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-2 text-base font-bold ${
                      isActive
                        ? "border-2 border-ink bg-accent text-ink"
                        : "text-ink"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block border-2 border-ink bg-ink px-4 py-2 text-base font-bold text-bg"
              >
                Get in Touch
              </a>
            </li>
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block border-2 border-ink px-4 py-2 text-base font-bold text-ink"
              >
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
