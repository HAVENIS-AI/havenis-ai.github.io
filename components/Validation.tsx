import React from 'react';
import { useFadeIn } from './hooks/useFadeIn';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle, Clock, Target } from 'lucide-react';

const ValidationCard: React.FC<{ kpi: string; label: string; subLabel: string; }> = ({ kpi, label, subLabel }) => (
  <div className="bg-[#1a1c1f] p-8 rounded-2xl text-center border-t-4 border-[#08D9D6]/70 shadow-2xl flex flex-col">
    <div className="flex-grow flex flex-col justify-center">
        <p className="text-6xl font-extrabold text-[#22D3EE] mb-2">{kpi}</p>
        <p className="text-xl font-bold text-white">{label}</p>
        <p className="text-sm text-slate-500">{subLabel}</p>
    </div>
  </div>
);

const Validation: React.FC = () => {
  const { ref, animationClasses } = useFadeIn<HTMLElement>();
  const { t } = useLanguage();

  const validations = [
    { kpi: ">98%", label: t('validation.card1Label'), subLabel: t('validation.card1SubLabel') },
    { kpi: "TRL 6", label: t('validation.card2Label'), subLabel: t('validation.card2SubLabel') },
    { kpi: "100%", label: t('validation.card3Label'), subLabel: t('validation.card3SubLabel') }
  ];

  return (
    <section id="validation" ref={ref} className={`py-24 md:py-32 bg-[#0f1113] fade-in-section ${animationClasses}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6">
          {t('validation.title')}
        </h2>
        <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-16">
          {t('validation.subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {validations.map((val, index) => (
            <ValidationCard key={index} {...val} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Validation;