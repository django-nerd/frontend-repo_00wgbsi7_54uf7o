import React from 'react';

const works = [
  {
    title: 'CYBERSPHERE — Commercial',
    tag: 'Реклама',
    thumb: 'https://images.unsplash.com/photo-1520975602301-9062fd6b8669?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'ASTROCALL — Music Video',
    tag: 'Клип',
    thumb: 'https://images.unsplash.com/photo-1530469912745-a215c6b2561e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'NEON EDGE — Brand Film',
    tag: 'Реклама',
    thumb: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative w-full bg-[#0A0A0B] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Избранные проекты</h2>
            <p className="mt-2 max-w-2xl text-white/60">Короткая подборка последних работ. Полное портфолио по запросу.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/10 sm:inline-flex">Запросить рейл</a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <article key={w.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={w.thumb}
                  alt={w.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full bg-fuchsia-600/80 px-3 py-1 text-xs text-white">
                  {w.tag}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white">{w.title}</h3>
                <p className="mt-1 text-sm text-white/60">Роль: продакшн, режиссура, пост.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
