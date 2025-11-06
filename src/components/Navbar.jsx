import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm text-white">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-500" />
          <span className="font-semibold tracking-wide">FLAMES.STUDIO</span>
        </a>
        <div className="hidden items-center gap-6 sm:flex">
          <a href="#services" className="text-white/80 hover:text-white">Услуги</a>
          <a href="#work" className="text-white/80 hover:text-white">Работы</a>
          <a href="#contact" className="text-white/80 hover:text-white">Контакты</a>
        </div>
        <a
          href="#contact"
          className="rounded-full bg-fuchsia-600 px-4 py-2 font-medium text-white hover:bg-fuchsia-500"
        >
          Запросить смету
        </a>
      </nav>
    </header>
  );
}
