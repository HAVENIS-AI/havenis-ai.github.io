import React from 'react';
import Button from './ui/Button';
import { useFadeIn } from './hooks/useFadeIn';
import { Briefcase, PlayCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { ref, animationClasses } = useFadeIn<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section 
      id="hero"
      ref={ref}
      className={`hero-bg min-h-screen flex items-center justify-center text-center overflow-hidden pt-32 pb-20 fade-in-section ${animationClasses}`}
    >
      <div className="relative container mx-auto px-6 py-24 max-w-4xl">
         <div className="absolute inset-0 -z-0 flex items-center justify-center opacity-[0.15]">
           <svg viewBox="0 0 800 800" className="w-full h-full">
              <defs>
                  <radialGradient id="waveGradient" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.3" />
                      <stop offset="70%" stopColor="#08D9D6" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#0f1113" stopOpacity="0" />
                  </radialGradient>
              </defs>
              <g transform="translate(400, 400)">
                  <circle r="100" fill="none" stroke="url(#waveGradient)" strokeWidth="1.5">
                      <animate attributeName="r" from="0" to="400" dur="4s" repeatCount="indefinite" begin="0s" />
                      <animate attributeName="opacity" from="1" to="0" dur="4s" repeatCount="indefinite" begin="0s" />
                  </circle>
                  <circle r="100" fill="none" stroke="url(#waveGradient)" strokeWidth="1.5">
                      <animate attributeName="r" from="0" to="400" dur="4s" repeatCount="indefinite" begin="1s" />
                      <animate attributeName="opacity" from="1" to="0" dur="4s" repeatCount="indefinite" begin="1s" />
                  </circle>
                   <circle r="100" fill="none" stroke="#22D3EE" strokeWidth="1">
                      <animate attributeName="r" from="0" to="400" dur="4s" repeatCount="indefinite" begin="2s" />
                      <animate attributeName="opacity" from="0.7" to="0" dur="4s" repeatCount="indefinite" begin="2s" />
                  </circle>
              </g>
            </svg>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-white uppercase tracking-wider">
            {t('hero.title')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-gray-300 font-light mb-12 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button as="a" href="#contact" className="px-10 py-4 text-lg">
              <Briefcase size={24} />
              <span>{t('hero.cta')}</span>
            </Button>
            <Button as="a" href="#contact" variant="secondary" className="px-10 py-4 text-lg">
              <PlayCircle size={24} />
              <span>{t('hero.cta2')}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
