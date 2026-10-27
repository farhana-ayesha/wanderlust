"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, UserRound, X } from "lucide-react";
import { cn } from "cn";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "Admin", href: "/admin" },
];

const authLinks = [
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/signup" },
];

export function Navbar({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={cn("relative z-50 bg-[#15181a] text-white", className)}>
      <div className="mx-auto grid h-16 w-full max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:h-20 lg:px-8">
        <nav aria-label="Main" className="hidden items-center gap-7 min-[900px]:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] transition-colors",
                index === 0
                  ? "text-brand"
                  : "text-white/85 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex size-9 items-center justify-center justify-self-start rounded-md text-white/90 transition-colors hover:bg-white/10 hover:text-white min-[900px]:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <Link
          href="/"
          className="justify-self-center font-sans text-xl font-semibold tracking-wide text-brand sm:text-2xl"
        >
          Wanderlast
        </Link>

        <div className="flex items-center justify-end gap-5">
          <Link
            href="/profile"
            className="hidden items-center gap-1.5 text-[13px] text-white/85 transition-colors hover:text-white sm:flex"
          >
            <UserRound className="size-4" />
            Profile
          </Link>
          <span aria-hidden className="hidden h-4 w-px bg-white/15 sm:block" />
          {authLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hidden text-[13px] transition-colors sm:block",
                link.label === "Sign Up"
                  ? "text-brand hover:text-brand/80"
                  : "text-white/85 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-[13px] text-white/85 transition-colors hover:text-white sm:hidden"
          >
            Login
          </Link>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#15181a] px-4 pb-6 pt-2 min-[900px]:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-white/85 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <span aria-hidden className="my-2 h-px bg-white/10" />
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-3 text-sm text-white/85 transition-colors hover:text-white"
            >
              <UserRound className="size-4" />
              Profile
            </Link>
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="py-3 text-sm text-white/85 transition-colors hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="py-3 text-sm text-brand transition-colors hover:text-brand/80"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
