'use client';

import { useEffect } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { services } from '@/lib/data/services';
import { ArrowRight, Building2, Palette, Leaf, Briefcase } from 'lucide-react';
import * as Icons from 'lucide-react';

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Services() {
  useScrollReveal();

  const iconMap: { [key: string]: any } = {
    'building-2': Icons.Building2,
    'palette': Icons.Palette,
    'leaf': Icons.Leaf,
    'briefcase': Icons.Briefcase,
  };

  return (
    <>
      <style>{`
        .reveal {
          opacity: 0; transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .reveal-left {
          opacity: 0; transform: translateX(-60px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-left.revealed { opacity: 1; transform: translateX(0); }
        .reveal-right {
          opacity: 0; transform: translateX(60px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-right.revealed { opacity: 1; transform: translateX(0); }
        .reveal-scale {
          opacity: 0; transform: scale(0.9);
          transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-scale.revealed { opacity: 1; transform: scale(1); }
        .d1 { transition-delay: 0.1s; }
        .d2 { transition-delay: 0.2s; }
        .d3 { transition-delay: 0.3s; }
        .d4 { transition-delay: 0.4s; }
        .service-card { position: relative; overflow: hidden; }
        .service-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(212,175,55,0.05) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.4s;
        }
        .service-card:hover::before { opacity: 1; }
        .service-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 96px; font-weight: 300;
          color: rgba(212,175,55,0.08);
          line-height: 1; position: absolute;
          top: -10px; right: 16px;
          transition: color 0.4s;
        }
        .service-card:hover .service-num { color: rgba(212,175,55,0.15); }
        .marquee-track {
          display: flex; gap: 60px; animation: marquee 20s linear infinite;
          white-space: nowrap;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .process-line::after {
          content: '';
          position: absolute; top: 24px; left: 100%;
          width: 100%; height: 1px;
          background: linear-gradient(to right, rgba(212,175,55,0.4), transparent);
        }
        .process-line:last-child::after { display: none; }
      `}</style>

      <Navigation />

      {/* ── HERO ── */}
      <section className="relative min-h-[65vh] flex items-end pb-20 bg-black overflow-hidden">
  <div className="absolute inset-0 bg-[url('/images/projects/it-complex.jpg')] bg-cover bg-center opacity-60" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {/* Left sidebar */}
        <div className="absolute left-0 top-0 h-full w-11 border-r border-primary/20 flex items-center justify-center z-20">
          <span className="text-[9px] tracking-[0.3em] text-white/30 uppercase select-none"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            Shrisha — Services & Expertise
          </span>
        </div>

        <div className="container-custom relative z-10 pl-16">
          <p className="reveal text-[10px] tracking-[0.4em] text-primary uppercase mb-4">What We Offer</p>
          <h1 className="reveal d1 font-display font-bold text-[52px] md:text-[72px] uppercase tracking-wider leading-none">
            Services &<br /><span className="text-primary">EXPERTISE</span>
          </h1>
          <p className="reveal d2 text-white/60 text-sm mt-6 max-w-xl tracking-[0.08em]"></p><p className="reveal d2 text-white/40 text-base mt-6 max-w-xl tracking-wide">
            Comprehensive architectural and design solutions tailored to your unique vision.
          </p>
        </div>
      </section>

      {/* ── MARQUEE DIVIDER ── */}
      <div className="py-5 bg-primary/5 border-y border-primary/10 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, r) =>
            ['Architecture', 'Interior Design', 'Sustainable', 'Residential', 'Commercial', 'Institutional', 'Innovation', 'Excellence'].map((t, i) => (
              <span key={`${r}-${i}`} className="text-[11px] tracking-[0.3em] uppercase text-white/20">
                {t} <span className="text-primary mx-4">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── SERVICES GRID ── */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/10">
            {services.map((service, idx) => {
              const IconComponent = iconMap[service.icon];
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={service.id}
                  className={`service-card group bg-[#111] p-10 border border-primary/10 hover:border-primary/35 transition-all duration-400 ${isLeft ? 'reveal-left' : 'reveal-right'} d${(idx % 4) + 1}`}
                >
                  <span className="service-num">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="relative z-10">
                    {IconComponent && (
                      <IconComponent className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                    )}
                    <h3 className="text-[13px] tracking-[0.2em] uppercase font-bold text-white mb-4">{service.title}</h3>
                   <p className="text-white/70 text-[13px] leading-relaxed mb-6">{service.description}</p>
                    <div className="space-y-2 border-t border-primary/10 pt-5">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                         <span className="text-white/60 text-[12px] tracking-wide">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-[#111]">
        <div className="container-custom">
          <p className="reveal text-[10px] tracking-[0.4em] text-primary uppercase mb-3">How We Work</p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl uppercase tracking-wider mb-16">
            Our <span className="text-primary">Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-primary/10">
            {[
            { number: '01', title: 'Discovery', description: 'Understanding your vision, site conditions, budget and project requirements in detail.' },
{ number: '02', title: 'Concept', description: 'Creating conceptual designs, space planning and initial architectural direction.' },
{ number: '03', title: 'Design & Approvals', description: 'Detailed drawings, regulatory submissions and authority approvals managed end to end.' },
{ number: '04', title: 'Delivery', description: 'Site coordination, quality oversight and project delivery to your satisfaction.' },
            ].map(({ number, title, description }, i) => (
              <div key={number} className={`reveal d${i + 1} group bg-[#161616] p-8 border border-primary/10 hover:border-primary/35 hover:bg-[#1a1a1a] transition-all duration-300`}>
                <div className="text-[56px] font-light text-primary/15 leading-none mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  {number}
                </div>
                <h4 className="text-[12px] tracking-[0.2em] uppercase font-bold text-white mb-3">{title}</h4>
                <p className="text-white/40 text-[12px] leading-relaxed">{description}</p>
                <div className="mt-6 w-6 h-px bg-primary/40 group-hover:w-12 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE AREAS — alternating left/right ── */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <p className="reveal text-[10px] tracking-[0.4em] text-primary uppercase mb-3">Specializations</p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl uppercase tracking-wider mb-16">
            Areas of <span className="text-primary">EXPERTISE</span>
          </h2>

          <div className="space-y-px">
            {[
              { category: 'Residential', items: ['Independent Houses', 'Apartment Complexes', 'Private Villas', 'Row Houses'] },
{ category: 'Commercial', items: ['Office Buildings', 'Retail Spaces', 'Showrooms', 'Mixed-Use Complexes'] },
{ category: 'Institutional', items: ['Educational Facilities', 'Healthcare Centers', 'Community Spaces', 'Administrative Buildings'] },
{ category: 'Architectural Liasoning', items: ['Building Permissions', 'Completion Certificates', 'Authority Approvals', 'Documentation Support'] },
            ].map(({ category, items }, i) => (
              <div
                key={category}
                className={`group flex flex-col md:flex-row items-start md:items-center gap-8 p-8 bg-[#111] border border-primary/10 hover:border-primary/30 hover:bg-[#161616] transition-all duration-300 ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
              >
                <div className="md:w-48 flex-shrink-0">
                  <div className="text-[11px] tracking-[0.3em] uppercase text-primary font-bold">{category}</div>
                  <div className="text-[36px] font-light text-primary/15 leading-none mt-1"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="w-px h-12 bg-primary/20 hidden md:block flex-shrink-0" />
                <div className="flex flex-wrap gap-3 flex-1">
                  {items.map((item) => (
                    <span key={item} className="px-4 py-2 border border-primary/15 text-white/40 text-[11px] tracking-[0.15em] uppercase group-hover:border-primary/30 group-hover:text-white/60 transition-all duration-300">
                      {item}
                    </span>
                  ))}
                </div>
                <ArrowRight size={16} className="text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 hidden md:block flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 bg-[#111] text-center">
        <div className="container-custom">
          <h2 className="reveal font-light text-[48px] md:text-[60px] text-white mb-4 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Have a Project in Mind?
          </h2>
          <p className="reveal d1 text-[11px] tracking-[0.25em] text-white/35 uppercase mb-10">
            Let's collaborate to create something extraordinary
          </p>
          <a href="/contact"
            className="reveal d2 inline-flex items-center gap-4 px-12 py-4 bg-primary text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-primary/85 transition-colors duration-300">
            Start Your Project <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}