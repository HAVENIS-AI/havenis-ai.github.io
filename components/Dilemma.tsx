import React from 'react';
import { useFadeIn } from './hooks/useFadeIn';
import { useLanguage } from '../contexts/LanguageContext';
import { HeartPulse, Shield, Building } from 'lucide-react';

const Dilemma: React.FC = () => {
  const { ref, animationClasses } = useFadeIn<HTMLElement>();
  const { t } = useLanguage();

  const useCases = [
    {
      icon: <HeartPulse size={32} />,
      title: t('dilemma.card1Title'),
      text: t('dilemma.card1Text'),
    },
    {
      icon: <Shield size={32} />,
      title: t('dilemma.card2Title'),
      text: t('dilemma.card2Text'),
    },
    {
      icon: <Building size={32} />,
      title: t('dilemma.card3Title'),
      text: t('dilemma.card3Text'),
    }
  ];
  
  return (
    <section id="use-cases" ref={ref} className={`bg-[#0f1113] py-24 md:py-32 border-t border-b border-white/5 fade-in-section ${animationClasses}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6">
          {t('dilemma.title')}
        </h2>
        
        <p className="text-xl text-slate-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
           {t('dilemma.subtitle')}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-[#08D9D6] to-[#22D3EE]/60 p-px rounded-2xl transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-[#1a1c1f] to-[#202326] h-full w-full rounded-[15px] py-10 px-8 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-6 text-[#22D3EE] flex items-center justify-center bg-cyan-500/10 rounded-full">
                          {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-[#22D3EE]">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.text}</p>
                  </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Dilemma;
