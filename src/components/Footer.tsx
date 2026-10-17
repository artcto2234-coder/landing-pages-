import React from 'react';
import { MapPin, Phone, Clock, ArrowUp, Heart, ShieldCheck } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#E31837]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E31837] to-[#A30B22] flex items-center justify-center text-white shadow-glow-subtle">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 18c2-4 6-4 8-1s6 3 8-1" />
                  <path d="M4 12c2-4 6-4 8-1s6 3 8-1" opacity="0.6" />
                  <circle cx="12" cy="5" r="2" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-tight text-white leading-none block">
                  MOVER
                </span>
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#E31837] mt-0.5 block">
                  Pilates & Fisioterapia
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Studio especializado em Pilates Clássico em Aparelhos e Fisioterapia Integrada. Restabelecendo o equilíbrio postural, força consciente e bem-estar em Ariquemes - RO.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Ambiente seguro, climatizado e turmas com até 4 alunos</span>
            </div>
          </div>

          {/* Quick Nav (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E31837]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">Modalidades</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre o Studio</a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">Planos & Horários</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Localização & Contato</a>
              </li>
            </ul>
          </div>

          {/* Contact & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E31837]">
              Unidade Ariquemes - RO
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                <span>R. Maceió, 2253 - Sl E - Jardim Europa, Ariquemes - RO, 76870-425</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E31837] shrink-0" />
                <a href={`tel:${STUDIO_INFO.phoneDigits}`} className="hover:text-white transition-colors">
                  {STUDIO_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                <div>
                  <div>Segunda a Sexta: 06:00 às 21:00</div>
                  <div>Sábados: 08:00 às 12:00</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Mover Pilates e Fisioterapia. Todos os direitos reservados. Ariquemes - Rondônia.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
