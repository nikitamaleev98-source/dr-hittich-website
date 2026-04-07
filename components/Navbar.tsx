"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="https://www.drhittich.com/out/dd_apex_drhittich/img/logo.png"
              alt="Dr. Hittich Gesundheits-Mittel"
              width={160}
              height={48}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium text-neutral-800 hover:text-primary transition-colors">
              Über uns
            </a>
            <Link href="/produkte" className="text-sm font-medium text-neutral-800 hover:text-primary transition-colors">
              Produkte
            </Link>
            <a href="#guarantee" className="text-sm font-medium text-neutral-800 hover:text-primary transition-colors">
              Garantie
            </a>
            <a href="#testimonials" className="text-sm font-medium text-neutral-800 hover:text-primary transition-colors">
              Kundenstimmen
            </a>
            <a href="#contact" className="text-sm font-medium text-neutral-800 hover:text-primary transition-colors">
              Kontakt
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/konto" className="btn-outline text-sm py-2">
              <User size={16} /> Konto
            </Link>
            <Link href="/warenkorb" className="btn-primary text-sm py-2">
              <ShoppingBag size={16} /> Warenkorb
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-neutral-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü öffnen"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-4 py-4 flex flex-col gap-4">
          <a href="#about" className="text-sm font-medium py-2" onClick={() => setMenuOpen(false)}>Über uns</a>
          <a href="#products" className="text-sm font-medium py-2" onClick={() => setMenuOpen(false)}>Produkte</a>
          <a href="#guarantee" className="text-sm font-medium py-2" onClick={() => setMenuOpen(false)}>Garantie</a>
          <a href="#testimonials" className="text-sm font-medium py-2" onClick={() => setMenuOpen(false)}>Kundenstimmen</a>
          <a href="#contact" className="text-sm font-medium py-2" onClick={() => setMenuOpen(false)}>Kontakt</a>
          <div className="flex flex-col gap-2 pt-2 border-t border-neutral-100">
            <a href="https://www.drhittich.com/index.php?cl=register" className="btn-primary text-sm justify-center">
              Konto eröffnen
            </a>
            <a href="tel:080031032300" className="flex items-center gap-2 text-sm text-primary font-medium justify-center py-2">
              <Phone size={16} />
              0800 3 103 230
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
