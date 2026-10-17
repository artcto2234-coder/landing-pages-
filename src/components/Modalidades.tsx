import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Activity, ShieldAlert, Heart, Dumbbell, Compass } from 'lucide-react';
import { MODALITIES, Modality } from '../data/studioData';

interface ModalidadesProps {
  onSelectModality: (modalityId: string) => void;
}

export const Modalidades: React.FC<ModalidadesProps> = ({ onSelectModality }) => {
  const [activeTab, setActiveTab] = useState<string>('todos');

  const filteredModalities = activeTab === 'todos' 
    ? MODALITIES 
    : MODALITIES.filter(m => m.id === activeTab);

  return (
    <section id="modalidades" className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#E31837] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Modalidades Especializadas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            Treinos desenhados para a <span className="text-[#E31837]">necessidade real</span> do seu corpo.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Seja para curar uma dor crônica na coluna, preparar o corpo para o parto ou alcançar força e definição sem machucar articulações, temos a modalidade certa.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('todos')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'todos'
                  ? 'bg-[#E31837] text-white shadow-glow-subtle'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Todas as Modalidades
            </button>
            {MODALITIES.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveTab(mod.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === mod.id
                    ? 'bg-[#E31837] text-white shadow-glow-subtle'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {mod.name}
              </button>
            ))}
          </div>
        </div>

        {/* Modality Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModalities.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-3xl bg-white border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                item.highlight
                  ? 'border-rose-300 ring-2 ring-[#E31837]/20 shadow-premium'
                  : 'border-slate-200/80 shadow-sm'
              }`}
            >
              {/* Card Image Banner */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                {/* Badge Top Left */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E31837] text-white shadow-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Title Bottom Left */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold font-display text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-rose-100/90 line-clamp-1 mt-0.5">
                    {item.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                      Principais Benefícios
                    </h4>
                    <ul className="space-y-2">
                      {item.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Target Audience */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-1">
                      Para quem é indicado:
                    </span>
                    <p className="text-xs text-slate-700">
                      {item.targetAudience}
                    </p>
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectModality(item.id)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-[#E31837] text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 group-hover:bg-[#E31837] cursor-pointer shadow-sm"
                >
                  <span>Agendar esta modalidade</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Bottom Banner in Modalities */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E31837]">
              Dúvida sobre a melhor opção?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Realizamos uma avaliação postural e funcional no seu primeiro contato.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Nossa equipe de fisioterapeutas indica o treino perfeito para seu histórico físico.
            </p>
          </div>
          <button
            onClick={() => onSelectModality('aparelhos')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#E31837] hover:bg-[#C4102C] text-white text-xs font-bold uppercase tracking-wider shadow-glow cursor-pointer transition-all active:scale-95 flex items-center gap-2"
          >
            <span>Falar com Fisioterapeuta</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
