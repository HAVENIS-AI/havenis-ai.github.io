import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handlePlaceholderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <footer className="border-t border-white/5 bg-[#0a0c0e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-slate-400 text-sm py-10">
        <div className="flex justify-center space-x-6 mb-4 flex-wrap">
          <a href="#" onClick={handlePlaceholderClick} className="hover:text-[#22D3EE] transition opacity-60 cursor-default" title="In Kürze verfügbar">{t('footer.link1')}</a>
          <a href="#" onClick={handlePlaceholderClick} className="hover:text-[#22D3EE] transition opacity-60 cursor-default" title="In Kürze verfügbar">{t('footer.link2')}</a>
          <a href="#" onClick={handlePlaceholderClick} className="hover:text-[#22D3EE] transition opacity-60 cursor-default" title="In Kürze verfügbar">{t('footer.link3')}</a>
          <a href="#" onClick={handlePlaceholderClick} className="hover:text-[#22D3EE] transition opacity-60 cursor-default" title="In Kürze verfügbar">{t('footer.link4')}</a>
        </div>
        <p>
          {t('footer.copyright')}
        </p>
         <p className="mt-2 font-semibold text-slate-500">
          <span className="text-xs">{t('footer.tagline')}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;