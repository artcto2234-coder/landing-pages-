import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Modalidades', href: '#modalidades' },
    { name: 'Sobre o Studio', href: '#sobre' },
    { name: 'Planos', href: '#planos' },
    { name: 'Localização & Contato', href: '#contato' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/60 py-3.5'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E31837] to-[#A30B22] flex items-center justify-center text-white shadow-glow-subtle group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 18c2-4 6-4 8-1s6 3 8-1" />
                <path d="M4 12c2-4 6-4 8-1s6 3 8-1" opacity="0.6" />
                <circle cx="12" cy="5" r="2" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-slate-900 leading-none">
                MOVER
              </span>
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#E31837] mt-0.5">
                Pilates & Fisioterapia
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#E31837] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#E31837] after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Info & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100/80 px-3 py-1.5 rounded-full border border-slate-200/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-medium text-slate-700">Aberto hoje</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600">Ariquemes - RO</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E31837] hover:bg-[#C4102C] text-white text-xs font-semibold tracking-wide uppercase shadow-glow-subtle hover:shadow-glow transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Entrar em contato
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="inline-flex sm:hidden items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E31837] text-white text-xs font-semibold"
            >
              Contato
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl px-5 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-[#E31837] py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-4 mt-2 border-t border-slate-100 space-y-3">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-[#E31837] shrink-0" />
              <span>R. Maceió, 2253 - Sl E - Jardim Europa, Ariquemes - RO</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Phone className="w-4 h-4 text-[#E31837] shrink-0" />
              <span>+55 69 99231-9020</span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full mt-2 py-3 px-5 rounded-xl bg-[#E31837] text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-glow"
            >
              <Sparkles className="w-4 h-4" />
              Entrar em contato
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
