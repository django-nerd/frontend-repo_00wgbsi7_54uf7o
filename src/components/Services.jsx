import React from 'react';
import { Film, Sparkles, Megaphone, MonitorPlay } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Музыкальные клипы',
    desc: 'Режиссура, продюсирование, съёмка и постпродакшн клипов любого масштаба.'
  },
  {
    icon: Megaphone,
    title: 'Рекламные ролики',
    desc: 'Креативные концепции и видеоролики для брендов, продуктов и кампаний.'
  },
  {
    icon: MonitorPlay,
    title: 'Видеоконтент для веба',
    desc: 'Промо, product-видео, UI-анимации и контент для соцсетей.'
  },
  {
    icon: Sparkles,
    title: 'Постпродакшн и VFX',
    desc: 'CGI, композитинг, цветокоррекция, моушн-дизайн и саунд.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-[#0A0A0B] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
          Что мы делаем
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/60">
          Полный цикл видеопроизводства: от идеи до финального рендера.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition hover:border-fuchsia-500/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-600/20 text-fuchsia-300">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/60">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-2xl transition group-hover:bg-fuchsia-500/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
