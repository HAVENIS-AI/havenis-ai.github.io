import React from 'react';
import { useFadeIn } from './hooks/useFadeIn';
import { useLanguage } from '../contexts/LanguageContext';

const ProofOfConcept: React.FC = () => {
  const { ref, animationClasses } = useFadeIn<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section id="proof-of-concept" ref={ref} className={`py-24 md:py-32 bg-[#0f1113] fade-in-section ${animationClasses}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          {t('proofOfConcept.title')}
        </h2>
        <p className="text-xl text-slate-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          {t('proofOfConcept.subtitle')}
        </p>

        <div className="max-w-4xl mx-auto aspect-video bg-gradient-to-br from-[#1a1c1f] to-[#151719] p-4 rounded-2xl border border-[#08D9D6]/30 shadow-2xl relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="pocWaveGradient" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.3" />
                <stop offset="70%" stopColor="#08D9D6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#0f1113" stopOpacity="0" />
              </radialGradient>
            </defs>
            
            <g transform="matrix(1, -0.4, 1, 0.4, -200, 150)">
              <g stroke="#fff" strokeOpacity="0.1" strokeWidth="1">
                {Array.from({ length: 21 }).map((_, i) => (
                  <line key={`v-${i}`} x1={i*40} y1="0" x2={i*40} y2="400" />
                ))}
                {Array.from({ length: 11 }).map((_, i) => (
                  <line key={`h-${i}`} x1="0" y1={i*40} x2="800" y2={i*40} />
                ))}
              </g>
            </g>
            
            <g transform="translate(400, 260)">
              <circle r="10" fill="none" stroke="url(#pocWaveGradient)" strokeWidth="1.5">
                  <animate attributeName="r" from="0" to="350" dur="4s" repeatCount="indefinite" begin="0s" />
                  <animate attributeName="opacity" from="1" to="0" dur="4s" repeatCount="indefinite" begin="0s" />
              </circle>
              <circle r="10" fill="none" stroke="url(#pocWaveGradient)" strokeWidth="1.5">
                  <animate attributeName="r" from="0" to="350" dur="4s" repeatCount="indefinite" begin="1.5s" />
                  <animate attributeName="opacity" from="1" to="0" dur="4s" repeatCount="indefinite" begin="1.5s" />
              </circle>
            </g>
            
            <g id="person" transform="translate(400, 250) scale(1.4)" stroke="#22D3EE" strokeWidth="2" fill="none" filter="url(#glow)">
                <animateTransform 
                  attributeName="transform"
                  type="translate"
                  values="0 0; 0 -4; 0 0"
                  keyTimes="0; 0.5; 1"
                  dur="1.6s"
                  repeatCount="indefinite"
                  additive="sum"
                  calcMode="spline"
                  keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                />

                <line x1="0" y1="-30" x2="0" y2="20" />
                <circle cx="0" cy="-45" r="10" strokeWidth="2" fill="#0f1113"/>
                
                <g id="leg-right">
                    <animateTransform 
                      attributeName="transform" 
                      type="rotate" 
                      values="20 0 20; -20 0 20; 20 0 20" 
                      keyTimes="0; 0.5; 1"
                      dur="1.6s" 
                      repeatCount="indefinite"
                      calcMode="spline"
                      keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                    />
                    <line x1="0" y1="20" x2="10" y2="60" />
                    <line x1="10" y1="60" x2="-5" y2="100" />
                    <circle cx="10" cy="60" r="3" fill="#08D9D6" />
                </g>
                <g id="leg-left">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="-20 0 20; 20 0 20; -20 0 20"
                      keyTimes="0; 0.5; 1"
                      dur="1.6s"
                      repeatCount="indefinite"
                      calcMode="spline"
                      keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                    />
                    <line x1="0" y1="20" x2="-10" y2="60" />
                    <line x1="-10" y1="60" x2="5" y2="100" />
                    <circle cx="-10" cy="60" r="3" fill="#08D9D6" />
                </g>
                <g id="arm-right">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="-20 0 -25; 20 0 -25; -20 0 -25"
                      keyTimes="0; 0.5; 1"
                      dur="1.6s"
                      repeatCount="indefinite"
                      calcMode="spline"
                      keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                    />
                    <line x1="0" y1="-25" x2="30" y2="5" />
                    <line x1="30" y1="5" x2="20" y2="45" />
                </g>
                <g id="arm-left">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="20 0 -25; -20 0 -25; 20 0 -25"
                      keyTimes="0; 0.5; 1"
                      dur="1.6s"
                      repeatCount="indefinite"
                      calcMode="spline"
                      keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                    />
                    <line x1="0" y1="-25" x2="-30" y2="5" />
                    <line x1="-30" y1="5" x2="-20" y2="45" />
                </g>
                <circle cx="0" cy="20" r="3" fill="#08D9D6" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ProofOfConcept;
