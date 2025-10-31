import React from 'react';
import { useFadeIn } from './hooks/useFadeIn';
import { useLanguage } from '../contexts/LanguageContext';
import { ShieldOff, Cpu, HeartPulse } from 'lucide-react';

const Solution: React.FC = () => {
  const { ref, animationClasses } = useFadeIn<HTMLElement>();
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <ShieldOff size={40} />,
      title: t('solution.feature1Title'),
      text: t('solution.feature1Text'),
    },
    {
      icon: <Cpu size={40} />,
      title: t('solution.feature2Title'),
      text: t('solution.feature2Text'),
    },
    {
      icon: <HeartPulse size={40} />,
      title: t('solution.feature3Title'),
      text: t('solution.feature3Text'),
    }
  ];

  return (
    <section id="advantages" ref={ref} className={`py-24 md:py-32 bg-[#0f1113] fade-in-section ${animationClasses}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6">
          {t('solution.title')}
        </h2>
         <p className="text-xl text-slate-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
           {t('solution.subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1a1c1f] p-8 rounded-2xl shadow-2xl border border-transparent hover:border-[#08D9D6]/50 transition-colors duration-300">
              <div className="w-16 h-16 mb-6 text-[#22D3EE] mx-auto flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#22D3EE]">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
