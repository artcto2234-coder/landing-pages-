import React from 'react';
import { Sparkles, ArrowRight, Star, ShieldCheck, HeartPulse, Users, CheckCircle, ChevronDown } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9]">
      {/* Decorative ambient background accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#E31837]/10 to-rose-200/20 blur-3xl pointer-events-none rounded-full -z-10" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#E31837]/5 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/70 text-[#E31837] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#E31837] animate-ping" />
              <span>Studio de Pilates & Fisioterapia em Ariquemes - RO</span>
            </div>

            {/* Main Headline (clamp 48-96px aesthetic) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-slate-900 leading-[1.08]">
              O alinhamento perfeito entre a <span className="text-blue-600 underline decoration-blue-500/30 decoration-wavy decoration-2">precisão clínica</span> e o movimento sem dor.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              Equipamentos clássicos de padrão ouro, turmas exclusivas com até <strong>4 alunos</strong> e orientação direta por fisioterapeutas no Jardim Europa. Viva com mais força, flexibilidade e liberdade.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#E31837] hover:bg-[#C4102C] text-white text-base font-bold shadow-glow hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer group"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#modalidades"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 text-base font-semibold border border-slate-200/80 shadow-sm transition-all"
              >
                <span>Conhecer Modalidades</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Trust and Social Proof bar */}
            <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                    alt="Aluna Mover Pilates"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Aluno Mover Pilates"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                    alt="Aluna Mover Pilates"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                    alt="Aluno Mover Pilates"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="font-bold text-slate-800 text-xs ml-1">5.0</span>
                  </div>
                  <span className="text-xs text-slate-500">Avaliações 5 estrelas no Google</span>
                </div>
              </div>

              <div className="h-6 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>+480 pessoas transformadas em Rondônia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with layered imagery (5 cols on desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backglow circle */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#E31837]/20 via-rose-100 to-transparent rounded-3xl blur-2xl transform -rotate-3 -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85"
                  alt="Aula de Pilates em Aparelho Reformer na Mover Pilates em Ariquemes"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                {/* Bottom caption card inside image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg text-slate-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#E31837]">
                        Aparelhos Clássicos
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        Cadillac, Reformer & Chair
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-100 text-[#E31837]">
                        Máx. 4 alunos
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge Top Right: Fisioterapia Clínica */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:4s]">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#E31837] flex items-center justify-center shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">Fisioterapia Integrada</div>
                  <div className="text-[11px] text-slate-500">Cuidado anatômico individual</div>
                </div>
              </div>

              {/* Floating Badge Bottom Left: Zero Impacto */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-slate-900 text-white rounded-2xl p-3.5 shadow-2xl border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E31837] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">Zero Impacto Articular</div>
                  <div className="text-[11px] text-slate-300">Seguro para hérnia e coluna</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-rose-100 hover:shadow-md transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-[#E31837]">
              98%
            </div>
            <div className="text-sm font-bold text-slate-800 mt-1">Alívio de dores</div>
            <div className="text-xs text-slate-500 mt-0.5">Relatado pelos alunos nos primeiros 30 dias</div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-rose-100 hover:shadow-md transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900">
              4
            </div>
            <div className="text-sm font-bold text-slate-800 mt-1">Alunos por horário</div>
            <div className="text-xs text-slate-500 mt-0.5">Atenção personalizada sem superlotação</div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-rose-100 hover:shadow-md transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900">
              100%
            </div>
            <div className="text-sm font-bold text-slate-800 mt-1">Fisioterapeutas</div>
            <div className="text-xs text-slate-500 mt-0.5">Equipe graduada e especializada no método</div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-rose-100 hover:shadow-md transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-[#E31837] flex items-center gap-1">
              <span>5.0</span>
              <Star className="w-6 h-6 fill-[#E31837] text-[#E31837]" />
            </div>
            <div className="text-sm font-bold text-slate-800 mt-1">Google Maps</div>
            <div className="text-xs text-slate-500 mt-0.5">Nota máxima dos alunos em Ariquemes</div>
          </div>
        </div>

      </div>
    </section>
  );
};
