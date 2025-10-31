import React from 'react';
import { useFadeIn } from './hooks/useFadeIn';
import { useLanguage } from '../contexts/LanguageContext';
import { Wifi, Waves, BrainCircuit, ChevronRight } from 'lucide-react';

const HowItWorksDiagram: React.FC = () => {
    const { t } = useLanguage();

    const steps = [
        {
            icon: <Wifi size={32} className="text-[#22D3EE]" />,
            title: t('tech.step1Title'),
            text: t('tech.step1Text'),
        },
        {
            icon: <Waves size={32} className="text-[#22D3EE]" />,
            title: t('tech.step2Title'),
            text: t('tech.step2Text'),
        },
        {
            icon: <BrainCircuit size={32} className="text-[#22D3EE]" />,
            title: t('tech.step3Title'),
            text: t('tech.step3Text'),
        }
    ];

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <div className="flex flex-col items-center text-center max-w-xs">
                        <div className="w-20 h-20 mb-4 bg-cyan-500/10 rounded-full flex items-center justify-center border-2 border-[#22D3EE]/20">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-slate-400 text-sm">{step.text}</p>
                    </div>
                    {index < steps.length - 1 && (
                        <ChevronRight size={32} className="text-[#08D9D6]/50 hidden md:block mx-4" />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};


const Technology: React.FC = () => {
  const { ref, animationClasses } = useFadeIn<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section id="how-it-works" ref={ref} className={`py-24 md:py-32 bg-[#1a1c1f] border-t border-b border-[#08D9D6]/10 fade-in-section ${animationClasses}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          {t('tech.title')}
        </h2>
        <p className="text-xl text-slate-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
           {t('tech.subtitle')}
        </p>

        <div className="max-w-6xl mx-auto mb-12 px-4">
            <HowItWorksDiagram />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-20 text-left">
            <div className="bg-[#0f1113] p-6 rounded-xl border border-white/10">
                <h4 className="font-bold text-lg text-[#22D3EE] mb-2">{t('tech.trl.title')}</h4>
                <p className="text-slate-400 text-sm">{t('tech.trl.text')}</p>
            </div>
            <div className="bg-[#0f1113] p-6 rounded-xl border border-white/10">
                <h4 className="font-bold text-lg text-[#22D3EE] mb-2">{t('tech.patent.title')}</h4>
                <p className="text-slate-400 text-sm">{t('tech.patent.text')}</p>
            </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center p-8 bg-gradient-to-br from-[#151719] to-[#1a1c1f] rounded-2xl border border-[#08D9D6]/30 shadow-2xl">
          <h3 className="text-3xl font-bold cyan-gradient-text mb-4">
            {t('tech.privacy.title')}
          </h3>
          <p className="text-lg text-slate-300">
            {t('tech.privacy.text')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technology;
