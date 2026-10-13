"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { nav, site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(nav[0].href);
  const [scrolled, setScrolled] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });
  const listRef = useRef<HTMLUListElement>(null);
  // While a nav click is smooth-scrolling, ignore scroll spy so the pill
  // glides straight to the target instead of stepping through every section.
  const lockUntil = useRef(0);

  // Scroll spy: the active section is the last one whose top has passed 40% of the viewport.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 40);
      if (Date.now() < lockUntil.current) return;
      const line = window.innerHeight * 0.4;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = nav[0].href;
      for (const item of nav) {
        const el = document.querySelector<HTMLElement>(item.href);
        if (el && el.getBoundingClientRect().top <= line) current = item.href;
      }
      setActive(atBottom ? nav[nav.length - 1].href : current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onScrollEnd = () => {
      lockUntil.current = 0;
      update();
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", onScrollEnd);
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Slide the highlight pill under the active link.
  const measure = useCallback(() => {
    const link = listRef.current?.querySelector<HTMLAnchorElement>(`a[href="${active}"]`);
    if (link) setIndicator({ left: link.offsetLeft, width: link.offsetWidth, ready: true });
  }, [active]);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const go = (href: string) => {
    setActive(href);
    lockUntil.current = Date.now() + 1200;
    setOpen(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#top" onClick={() => go("#top")} className="logo" aria-label={`${site.name}, back to top`}>
          <span className="logo-mark" aria-hidden>
            S
          </span>
          {site.name}
        </a>

        <nav className="nav-pill" aria-label="Primary">
          <ul ref={listRef}>
            <li
              className="nav-indicator"
              aria-hidden
              style={{
                transform: `translateX(${indicator.left}px)`,
                width: indicator.width,
                opacity: indicator.ready ? 1 : 0,
              }}
            />
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => go(item.href)}
                  className={active === item.href ? "is-active" : undefined}
                  aria-current={active === item.href ? "location" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" onClick={() => go("#contact")} className="btn btn-primary header-cta">
          Get in touch <ArrowUpRight />
        </a>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`burger${open ? " is-open" : ""}`} aria-hidden>
            <span />
            <span />
          </span>
        </button>
      </div>

      <nav id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} aria-label="Mobile" hidden={!open}>
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => go(item.href)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-primary" onClick={() => go("#contact")}>
          Get in touch <ArrowUpRight />
        </a>
      </nav>
    </header>
  );
}

export function ArrowUpRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
