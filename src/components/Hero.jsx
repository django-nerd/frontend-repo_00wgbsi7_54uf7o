import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0A0A0B]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and vignette overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_0%,rgba(88,28,135,0.35),rgba(0,0,0,0))]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-28 lg:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-fuchsia-500" />
          Премиальная видеопродакшн студия
        </div>
        <h1 className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
          Создаём клипы и рекламу, которые двигают бренды вперёд
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          От креатива до финального кадра. Сочетание эстетики, технологий и
          бескомпромиссного качества — для музыкантов и компаний, которые хотят
          выделиться.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#work"
            className="group inline-flex items-center justify-center rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/30 transition hover:bg-fuchsia-500"
          >
            Смотреть работы
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Обсудить проект
          </a>
        </div>
      </div>
    </section>
  );
}
