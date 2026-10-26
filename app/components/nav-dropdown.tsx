"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";

const CLOSE_DELAY_MS = 200;

type NavDropdownProps = {
  label: string;
  /** Index page for this menu; rendered as the first link inside the menu. */
  href: string;
  hrefLabel: string;
  children: ReactNode;
};

export function NavDropdown({ label, href, hrefLabel, children }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  // "Pinned" = opened/confirmed by click, tap or keyboard; hover-out will not close it.
  const [pinned, setPinned] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const skipFocusOpen = useRef(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const closeNow = useCallback(() => {
    cancelClose();
    setOpen(false);
    setPinned(false);
  }, [cancelClose]);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      closeTimer.current = null;
      setOpen(false);
      setPinned(false);
    }, CLOSE_DELAY_MS);
  }, [cancelClose]);

  useEffect(() => cancelClose, [cancelClose]);

  // Close on outside click/tap and on Escape.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        closeNow();
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const focusInside = rootRef.current?.contains(document.activeElement);
      closeNow();
      if (focusInside) {
        // Return focus to the trigger without re-opening via the focus handler.
        skipFocusOpen.current = true;
        buttonRef.current?.focus();
        skipFocusOpen.current = false;
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeNow]);

  return (
    <div
      ref={rootRef}
      className="md:relative"
      onPointerEnter={(event) => {
        // Hover only applies to real mice; touch is handled by click/tap.
        if (event.pointerType !== "mouse") return;
        cancelClose();
        setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== "mouse" || pinned) return;
        scheduleClose();
      }}
      onFocus={(event) => {
        // Keyboard focus opens the menu (not mouse/tap focus, which click handles).
        const target = event.target as HTMLElement;
        if (!skipFocusOpen.current && target.matches(":focus-visible")) {
          cancelClose();
          setOpen(true);
        }
      }}
      onBlur={(event) => {
        const next = event.relatedTarget as Node | null;
        if (!next || !event.currentTarget.contains(next)) {
          closeNow();
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={(event) => {
          cancelClose();
          if (event.detail === 0) {
            // Enter / Space: plain toggle.
            if (open) {
              closeNow();
            } else {
              setOpen(true);
              setPinned(true);
            }
            return;
          }
          // Mouse click / tap: hover-opened menu gets pinned open, a second click closes.
          if (open && pinned) {
            closeNow();
          } else {
            setOpen(true);
            setPinned(true);
          }
        }}
        className="relative text-xs uppercase tracking-[0.3em] transition hover:text-emerald-700 focus-visible:text-emerald-700"
      >
        {label}
      </button>
      {/* On mobile the panel spans the sticky header width; from md up it anchors to the trigger. pt-4 (instead of a margin) keeps the hover area continuous between trigger and panel. */}
      <div
        id={menuId}
        className={`absolute inset-x-4 top-full z-40 pt-2 transition md:inset-x-auto md:right-0 md:pt-4 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="max-h-[80vh] overflow-y-auto rounded-2xl md:w-[760px] md:max-h-none md:overflow-visible border border-slate-200 bg-white p-5 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
          <Link
            href={href}
            onClick={closeNow}
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700 transition hover:text-emerald-800"
          >
            {hrefLabel} →
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}
