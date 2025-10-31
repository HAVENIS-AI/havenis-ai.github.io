import React, { useState } from 'react';
import { useFadeIn } from './hooks/useFadeIn';
import { useLanguage } from '../contexts/LanguageContext';
import { PlayCircle, Quote } from 'lucide-react';
import VideoModal from './VideoModal';
// FIX: Import TranslationKey for type safety with the t function.
import { TranslationKey } from '../locales/translations';

interface Testimonial {
  // FIX: Use TranslationKey type for keys that will be passed to the t function.
  nameKey: TranslationKey;
  titleKey: TranslationKey;
  quoteKey: TranslationKey;
  videoId: string;
  thumbnailUrl: string;
}

const testimonialsData: Testimonial[] = [
  {
    nameKey: 'testimonials.client1Name',
    titleKey: 'testimonials.client1Title',
    quoteKey: 'testimonials.client1Quote',
    videoId: 'dQw4w9WgXcQ', // Placeholder video ID
    thumbnailUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
  },
  {
    nameKey: 'testimonials.client2Name',
    titleKey: 'testimonials.client2Title',
    quoteKey: 'testimonials.client2Quote',
    videoId: 'dQw4w9WgXcQ', // Placeholder video ID
    thumbnailUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop',
  },
];


const Testimonials: React.FC = () => {
  const { ref, animationClasses } = useFadeIn<HTMLElement>();
  const { t } = useLanguage();
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const openModal = (videoId: string) => {
    setSelectedVideoId(videoId);
  };

  const closeModal = () => {
    setSelectedVideoId(null);
  };

  return (
    <>
      <section id="testimonials" ref={ref} className={`py-24 md:py-32 bg-[#1a1c1f] border-t border-b border-[#08D9D6]/10 fade-in-section ${animationClasses}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.nameKey} className="bg-[#0f1113] rounded-2xl overflow-hidden border border-white/10 shadow-lg flex flex-col">
                <div 
                  className="relative group aspect-video cursor-pointer"
                  onClick={() => openModal(testimonial.videoId)}
                  role="button"
                  aria-label={`Play testimonial from ${t(testimonial.nameKey)}`}
                >
                  <img src={testimonial.thumbnailUrl} alt={`Portrait of ${t(testimonial.nameKey)}`} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <PlayCircle size={80} className="text-white/80 transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <Quote size={32} className="text-[#08D9D6]/50 mb-4" />
                  <blockquote className="text-slate-300 italic leading-relaxed flex-grow">
                    {t(testimonial.quoteKey)}
                  </blockquote>
                  <footer className="mt-6 border-t border-white/10 pt-6">
                    <p className="font-bold text-white text-lg">{t(testimonial.nameKey)}</p>
                    <p className="text-[#08D9D6] text-sm">{t(testimonial.titleKey)}</p>
                  </footer>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedVideoId && (
        <VideoModal videoId={selectedVideoId} onClose={closeModal} />
      )}
    </>
  );
};

export default Testimonials;