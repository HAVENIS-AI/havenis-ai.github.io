import React from 'react';
import Button from './ui/Button';
import { SendHorizonal } from 'lucide-react';
import { useFadeIn } from './hooks/useFadeIn';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { ref, animationClasses } = useFadeIn<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section id="contact" ref={ref} className={`py-24 md:py-32 bg-[#0f1113] fade-in-section ${animationClasses}`}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#22D3EE] text-center mb-8">
          {t('contact.title')}
        </h2>
        
        <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-12">
          {t('contact.subtitle')}
        </p>
        
        <div className="bg-[#1a1c1f] p-8 md:p-12 rounded-3xl shadow-2xl border border-[#08D9D6]/10">
          <form 
            action="https://formspree.io/f/xkgqekoa"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">{t('contact.nameLabel')}</label>
              <input type="text" id="name" name="name" placeholder={t('contact.namePlaceholder')} required
                     className="w-full p-4 rounded-xl bg-[#0f1113] border border-white/10 focus:border-[#08D9D6] focus:ring-1 focus:ring-[#08D9D6] text-white placeholder-slate-500 transition duration-200" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">{t('contact.emailLabel')}</label>
              <input type="email" id="email" name="email" placeholder={t('contact.emailPlaceholder')} required
                     className="w-full p-4 rounded-xl bg-[#0f1113] border border-white/10 focus:border-[#08D9D6] focus:ring-1 focus:ring-[#08D9D6] text-white placeholder-slate-500 transition duration-200" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">{t('contact.subjectLabel')}</label>
              <select id="subject" name="subject" required defaultValue=""
                      className="w-full p-4 rounded-xl bg-[#0f1113] border border-white/10 focus:border-[#08D9D6] focus:ring-1 focus:ring-[#08D9D6] text-white transition duration-200 appearance-none">
                <option value="" disabled>{t('contact.subjectOptionDefault')}</option>
                <option value="Investorenanfrage">{t('contact.subjectOption1')}</option>
                <option value="Demo-Anfrage">{t('contact.subjectOption2')}</option>
                <option value="Partner-Anfrage">{t('contact.subjectOption3')}</option>
                <option value="Allgemeine Anfrage">{t('contact.subjectOption4')}</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">{t('contact.messageLabel')}</label>
              <textarea id="message" name="message" rows={4} placeholder={t('contact.messagePlaceholder')}
                        className="w-full p-4 rounded-xl bg-[#0f1113] border border-white/10 focus:border-[#08D9D6] focus:ring-1 focus:ring-[#08D9D6] text-white placeholder-slate-500 transition duration-200"></textarea>
            </div>
            <Button type="submit" className="w-full p-4 text-lg">
              <SendHorizonal size={24} />
              <span>{t('contact.cta')}</span>
            </Button>
             <p className="text-center text-sm text-gray-400 pt-2">{t('contact.ctaSubtitle')}</p>
          </form>
        </div>
        <p className="text-xs text-slate-500 text-center mt-8 max-w-2xl mx-auto">
          {t('contact.footnote')}
        </p>
      </div>
    </section>
  );
};

export default Contact;