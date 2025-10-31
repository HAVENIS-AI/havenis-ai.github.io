import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dilemma from './components/Dilemma';
import Solution from './components/Solution';
import Technology from './components/Technology';
import Validation from './components/Validation';
import Team from './components/Team';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import FounderSeats from './components/FounderSeats';
import ProofOfConcept from './components/ProofOfConcept';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-[#0f1113] text-gray-200 antialiased overflow-x-hidden">
        <Header />
        <main>
          {/* 1. Market Problem & Gap */}
          <Hero />
          <Dilemma />
          {/* 2. Our Solution */}
          <Solution />
          {/* 3. Technology (How it Works) */}
          <Technology />
          <ProofOfConcept />
          {/* 4. Validation (Proof & Traction) */}
          <Validation />
          <Testimonials />
          {/* 5. Business Model */}
          <Process />
          {/* 6. The Team */}
          <Team />
          {/* 7. Investment Opportunity */}
          <FounderSeats />
          {/* 8. Call to Action */}
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;