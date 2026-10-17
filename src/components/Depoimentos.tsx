import React from 'react';
import { Star, Quote, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { TESTIMONIALS, STUDIO_INFO } from '../data/studioData';

export const Depoimentos: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#E31837] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Voz de Quem Treina Conosco
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            Mais de 480 histórias de alívio e <span className="text-[#E31837]">superação de dores</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Veja como o trabalho conjunto de Fisioterapia e Pilates tem transformado a rotina dos nossos alunos em Ariquemes e região.
          </p>

          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-slate-50 border border-slate-200">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-800">5.0 de 5.0 estrelas</span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-slate-600">Google Avaliações Ariquemes</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 hover:border-rose-200 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#E31837]/30" />
                </div>

                {/* Condition tag */}
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-rose-100 text-[#E31837] mb-3">
                  {t.condition}
                </span>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#E31837]/30"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {t.role}
                  </p>
                  <p className="text-[10px] text-slate-400 flex items-center gap-0.5 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#E31837]" />
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
