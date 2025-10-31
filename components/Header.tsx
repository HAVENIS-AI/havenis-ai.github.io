import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

const LanguageSwitcher: React.FC = () => {
    const { locale, setLocale } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'de', name: 'DE' },
        { code: 'en', name: 'EN' },
        { code: 'fr', name: 'FR' },
    ] as const;

    const selectLanguage = (langCode: 'de' | 'en' | 'fr') => {
        setLocale(langCode);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium text-gray-300 hover:bg-[#1a1c1f] transition"
                aria-label="Sprache wechseln"
            >
                <Globe size={20} />
            </button>
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-24 bg-[#1a1c1f] border border-white/10 rounded-lg shadow-lg z-10">
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => selectLanguage(lang.code)}
                            className={`w-full text-left px-4 py-2 text-sm ${
                                locale === lang.code
                                    ? 'text-[#08D9D6] font-bold'
                                    : 'text-gray-300 hover:bg-[#2a2c2f]'
                            }`}
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t('header.navProblem'), href: "#use-cases" },
    { name: t('header.navSolution'), href: "#advantages" },
    { name: t('header.navTechnology'), href: "#how-it-works" },
    { name: t('header.navValidation'), href: "#validation" },
    { name: t('header.navModel'), href: "#model" },
    { name: t('header.navTeam'), href: "#team" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    setIsOpen(false);
    // The browser's native behavior will handle the smooth scroll
    // because of `scroll-behavior: smooth` and the href="#...".
    // The offset is handled by `scroll-padding-top` in index.html.
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f1113]/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 lg:px-8">
          <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} aria-label="Zur Startseite">
            <Logo />
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-sm text-gray-300 hover:text-[#08D9D6] transition duration-200">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
             <LanguageSwitcher />
            <Button as="a" href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="px-5 py-2 text-sm">
             {t('header.cta')}
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 rounded-full hover:bg-[#1a1c1f] transition">
                <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-[#0f1113] md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex justify-end p-6">
           <button onClick={() => setIsOpen(false)} className="text-white p-2 rounded-full hover:bg-[#1a1c1f] transition">
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-20">
          {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-2xl text-gray-300 hover:text-[#08D9D6] transition duration-200 py-4">
                {link.name}
              </a>
            ))}
          <Button as="a" href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="mt-8 text-lg">
             {t('header.cta')}
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Header;