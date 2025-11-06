import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0B] font-inter text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/40 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} FLAMES.STUDIO — Российская студия видеопродакшна. Все права защищены.
      </footer>
    </div>
  );
}
