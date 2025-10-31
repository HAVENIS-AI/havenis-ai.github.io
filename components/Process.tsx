import React from 'react';
import { useFadeIn } from './hooks/useFadeIn';
import { useLanguage } from '../contexts/LanguageContext';
import { Repeat, Target, TrendingUp } from 'lucide-react';

const FinancialCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
  <div className="bg-[#1a1c1f] p-6 rounded-2xl border border-white/10 flex-1 flex flex-col">
    <div className="flex items-center gap-4 mb-3">
      <div className="text-[#22D3EE]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="text-slate-400 text-sm leading-relaxed flex-grow">
      {children}
    </div>
  </div>
);

const Process: React.FC = () => {
  const { ref, animationClasses } = useFadeIn<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section id="model" ref={ref} className={`relative overflow-hidden py-24 md:py-32 bg-[#1a1c1f] border-t border-b border-[#08D9D6]/10 fade-in-section ${animationClasses}`}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          {t('process.title')}
        </h2>
        
        <p className="text-xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed">
          {t('process.subtitle')}
        </p>

        <div className="flex flex-col md:flex-row gap-8 text-left max-w-6xl mx-auto">
          <FinancialCard 
            icon={<Repeat size={24} />} 
            title={t('process.card1Title')}
          >
            <ul className="list-disc list-inside space-y-1">
              <li>{t('process.card1_item1')}</li>
              <li>{t('process.card1_item2')}</li>
            </ul>
          </FinancialCard>
          <FinancialCard 
            icon={<Target size={24} />} 
            title={t('process.card2Title')}
          >
            <ul className="list-disc list-inside space-y-1">
              <li>{t('process.card2_item1')}</li>
              <li>{t('process.card2_item2')}</li>
            </ul>
          </FinancialCard>
          <FinancialCard 
            icon={<TrendingUp size={24} />} 
            title={t('process.card3Title')}
          >
            <ul className="list-disc list-inside space-y-1">
              <li>{t('process.card3_item1')}</li>
              <li>{t('process.card3_item2')}</li>
            </ul>
          </FinancialCard>
        </div>
      </div>
    </section>
  );
};

export default Process;