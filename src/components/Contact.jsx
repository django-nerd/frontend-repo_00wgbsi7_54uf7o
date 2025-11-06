import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0A0A0B] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Свяжитесь с нами</h2>
            <p className="mt-3 max-w-xl text-white/60">
              Расскажите о задаче — предложим концепт, таймлайн и смету. Работаем по всей России и миру.
            </p>
            <ul className="mt-6 space-y-2 text-white/70">
              <li>Email: hello@flames.studio</li>
              <li>Telegram: @flames_studio</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-white/70">Имя</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 focus:border-fuchsia-500/60"
                  placeholder="Алексей"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white/70">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-white/10 bg:black/40 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 focus:border-fuchsia-500/60"
                  placeholder="you@brand.com"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/70">Сообщение</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 focus:border-fuchsia-500/60"
                placeholder="Кратко опишите проект, сроки и референсы"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-fuchsia-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-fuchsia-500"
            >
              <Send size={18} /> Отправить запрос
            </button>
            {sent && (
              <p className="mt-3 text-sm text-emerald-400">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
