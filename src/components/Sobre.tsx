import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Target, 
  Wind, 
  Zap, 
  Layers, 
  Activity, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Maximize2,
  Smile,
  HeartHandshake
} from 'lucide-react';
import { STUDIO_DIFFERENTIALS } from '../data/studioData';

interface SobreProps {
  onOpenBooking: () => void;
}

export const Sobre: React.FC<SobreProps> = ({ onOpenBooking }) => {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  const principles = [
    {
      title: "Concentração",
      tagline: "A mente direciona o músculo",
      description: "Conexão neuromuscular profunda. Em vez de repetições mecânicas sem atenção, você aprende a acionar os músculos estabilizadores certos com plena presença mental.",
      icon: Target
    },
    {
      title: "Centralização (Powerhouse)",
      tagline: "A força nasce do centro",
      description: "O abdômen profundo, os músculos paravertebrais, diafragma e assoalho pélvico formam a cinta natural que protege sua coluna contra hérnias e desgastes.",
      icon: Zap
    },
    {
      title: "Controle Biomecânico",
      tagline: "Zero movimentos bruscos",
      description: "A integridade da sua coluna é preservada em cada centímetro de movimento. Sob o olhar de fisioterapeutas, cada alinhamento é monitorado em tempo real.",
      icon: ShieldCheck
    },
    {
      title: "Precisão Anatômica",
      tagline: "Qualidade supera quantidade",
      description: "Poucas repetições com alinhamento perfeito trazem resultados mais rápidos e seguros do que dezenas de repetições erradas em academias convencionais.",
      icon: Maximize2
    },
    {
      title: "Fluidez de Movimento",
      tagline: "Graciosidade e leveza",
      description: "Os exercícios são contínuos e harmônicos, permitindo que a fáscia muscular se solte, lubrificando tendões e articulações para o cotidiano.",
      icon: Activity
    },
    {
      title: "Respiração Consciente",
      tagline: "Oxigenação celular plena",
      description: "Expansão tridimensional da caixa torácica. Aumenta a capacidade pulmonar, relaxa a musculatura do pescoço e acalma o sistema nervoso contra a ansiedade.",
      icon: Wind
    }
  ];

  const beforeAfterComparisons = [
    {
      before: "Dores constantes na lombar e pescoço após horas de trabalho",
      after: "Coluna descompressa e alívio contínuo sem depender de analgésicos"
    },
    {
      before: "Ombros caídos, postura curvada e sensação de rigidez",
      after: "Porte ereto e elegante, ombros destravados e peito aberto"
    },
    {
      before: "Cansaço constante e falta de fôlego para brincar ou subir escadas",
      after: "Disposição renovada, equilíbrio firme e vitalidade diária"
    },
    {
      before: "Medo constante de travar a coluna em movimentos simples",
      after: "Confiança total no próprio corpo com musculatura profunda fortalecida"
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background soft grid */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#E31837] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Nossa Metodologia & Propósito
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            Não é só exercício. É a sua <span className="text-[#E31837]">liberdade de movimento</span> de volta.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A <strong>Mover Pilates e Fisioterapia</strong> nasceu em Ariquemes com uma missão clara: criar um refúgio acolhedor onde a ciência do movimento cura dores e reconstrói a sua autoestima física.
          </p>
        </div>

        {/* Narrative & Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Images collage (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/5] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
                alt="Ambiente e atendimento fisioterapêutico no Studio Mover Pilates em Ariquemes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E31837]">
                  Jardim Europa · Ariquemes
                </span>
                <h4 className="text-lg font-bold font-display mt-0.5">
                  Ambiente planejado para o seu acolhimento
                </h4>
                <p className="text-xs text-slate-200 mt-1">
                  Espaço silencioso, climatizado e com aparelhos higienizados a cada sessão.
                </p>
              </div>
            </div>

            {/* Little floating card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#E31837] flex items-center justify-center shrink-0">
                <Smile className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">Atendimento Humanizado</div>
                <div className="text-slate-500">Você é ouvido com respeito desde o primeiro minuto.</div>
              </div>
            </div>
          </div>

          {/* Narrative text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 leading-snug">
                Por que a combinação de Pilates com Fisioterapia é incomparável?
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Muitas pessoas chegam até nós desiludidas após tentarem academias barulhentas ou remédios que apenas mascaram os sintomas. Na <strong>Mover</strong>, nossa equipe é formada por fisioterapeutas que analisam suas cadeias musculares e compensações posturais.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Cada mola do Reformer ou do Cadillac é ajustada exatamente na tensão que seu corpo precisa para vencer a gravidade sem machucar discos intervertebrais ou tendões.
              </p>
            </div>

            {/* The 4 pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {STUDIO_DIFFERENTIALS.map((diff, index) => (
                <div key={index} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-rose-200 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E31837] shrink-0" />
                    <h5 className="font-bold text-slate-900 text-sm">{diff.title}</h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {diff.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E31837] hover:bg-[#C4102C] text-white text-xs font-bold uppercase tracking-wider shadow-glow-subtle transition-all cursor-pointer"
              >
                <span>Agendar Avaliação Inicial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* The 6 Classical Principles */}
        <div className="mt-16 pt-16 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E31837]">
              Fundamento Clássico
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
              Os 6 Princípios Essenciais do Método
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Criados por Joseph Pilates e lapidados pela neurociência e fisioterapia moderna.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((pr, index) => {
              const IconComp = pr.icon;
              const isSelected = activePrinciple === index;
              return (
                <div
                  key={index}
                  onClick={() => setActivePrinciple(index)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-rose-50/50 border-[#E31837] shadow-md ring-2 ring-[#E31837]/10'
                      : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-[#E31837] text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Princípio 0{index + 1}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 font-display">
                        {pr.title}
                      </h4>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-[#E31837] mb-1">
                    {pr.tagline}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pr.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Before vs After interactive comparison card */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E31837]/15 blur-3xl pointer-events-none rounded-full" />

          <div className="relative max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E31837]">
              Transformação Tangível
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mt-1">
              Como a sua rotina muda com a Mover
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Resultados sentidos no corpo desde as primeiras semanas de prática consistente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {beforeAfterComparisons.map((item, i) => (
              <div key={i} className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-rose-400 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span>Antes da Mover:</span>
                  </div>
                  <p className="text-xs text-slate-300 line-through decoration-rose-400/50">
                    {item.before}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Com a Mover Pilates:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium">
                    {item.after}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#E31837] hover:bg-[#C4102C] text-white text-xs font-bold uppercase tracking-wider shadow-glow cursor-pointer transition-all active:scale-95"
            >
              <span>Quero viver essa transformação</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
