import React from 'react';
import { useFadeIn } from './hooks/useFadeIn';
import { useLanguage } from '../contexts/LanguageContext';
import { ShieldCheck, Zap, MessageSquare } from 'lucide-react';
import Button from './ui/Button';

const FounderSeats: React.FC = () => {
  const { ref, animationClasses } = useFadeIn<HTMLElement>();
  const { t } = useLanguage();
  const seatsTaken = 74;
  const totalSeats = 100;
  const progressPercentage = (seatsTaken / totalSeats) * 100;

  const benefits = [
    { text: t('founderSeats.benefit1') },
    { text: t('founderSeats.benefit2') },
    { text: t('founderSeats.benefit3') },
  ];

  return (
    <section id="founder-seats" ref={ref} className={`py-24 md:py-32 bg-[#1a1c1f] border-t border-b border-[#08D9D6]/10 fade-in-section ${animationClasses}`}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                {t('founderSeats.title')}
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                {t('founderSeats.subtitle')}
            </p>
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#0f1113] to-[#151719] p-8 md:p-12 rounded-3xl border-2 border-[#08D9D6]/40 shadow-2xl shadow-[#08D9D6]/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Description & Benefits */}
                <div className="text-left">
                    <h3 className="text-2xl font-bold mb-6 cyan-gradient-text">{t('founderSeats.perksTitle')}</h3>
                    <ul className="space-y-4">
                        {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                            <ShieldCheck size={20} className="text-[#08D9D6] mr-3 mt-1 flex-shrink-0" />
                            <span className="text-slate-300">{benefit.text}</span>
                        </li>
                        ))}
                    </ul>
                     <p className="mt-8 text-sm italic text-slate-500">{t('founderSeats.tagline')}</p>
                </div>

                {/* Right Column: Progress & CTA */}
                <div className="flex flex-col h-full">
                    <div>
                        <h4 className="font-semibold text-white mb-2">{t('founderSeats.progressLabel')}</h4>
                        <div className="w-full bg-[#0f1113] rounded-full h-4 border border-white/10">
                            <div
                                className="bg-gradient-to-r from-[#08D9D6] to-[#22D3EE] h-4 rounded-full"
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                        <p className="text-right text-sm font-mono text-[#22D3EE] mt-2">
                            {seatsTaken} / {totalSeats} {t('founderSeats.seatsTaken')}
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 mt-8">
                        <Button as="a" href="#contact">
                            <Zap size={20} />
                            <span>{t('founderSeats.cta1')}</span>
                        </Button>
                         <Button as="a" href="#contact" variant="secondary">
                            <span>{t('founderSeats.cta2')}</span>
                        </Button>
                         <Button as="a" href="#contact" variant="secondary">
                             <MessageSquare size={20} />
                            <span>{t('founderSeats.cta3')}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSeats;
