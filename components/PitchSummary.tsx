import React from 'react';
import { useFadeIn } from './hooks/useFadeIn';
import { useLanguage } from '../contexts/LanguageContext';

const PitchSummary: React.FC = () => {
  const { ref, animationClasses } = useFadeIn<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section 
      id="pitch-summary" 
      ref={ref} 
      className={`pt-32 pb-20 md:pt-40 md:pb-24 bg-[#1a1c1f] border-b border-[#D4AF37]/10 text-center fade-in-section ${animationClasses}`}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white uppercase">
          {t('pitchSummary.title')}
        </h1>
        <div className="w-24 h-px bg-[#D4AF37]/50 mx-auto my-8"></div>
        <p className="text-md md:text-lg text-slate-300 font-light leading-relaxed">
          {t('pitchSummary.summaryText')}
        </p>
      </div>
    </section>
  );
};

export default PitchSummary;