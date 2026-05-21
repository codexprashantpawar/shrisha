'use client';

import { useEffect, useRef } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { founders, teamMembers } from '@/lib/data/team';
import Image from 'next/image';

/* ── Scroll-reveal hook ─────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function About() {
  useScrollReveal();

  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        .reveal-delay-5 { transition-delay: 0.5s; }
        .reveal-delay-6 { transition-delay: 0.6s; }
        .reveal-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-left.revealed {
          opacity: 1;
          transform: translateX(0);
        }
        .reveal-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-right.revealed {
          opacity: 1;
          transform: translateX(0);
        }
        .reveal-scale {
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-scale.revealed {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      <Navigation />

      {/* ── 1. TENETS — fullscreen hero with text overlay ── */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        <Image
          src="/images/projects/cultural-center.jpg"
          alt="Shrisha Studio"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

        {/* Left vertical sidebar */}
        <div className="absolute left-0 top-0 h-full w-11 border-r border-primary/20 flex items-center justify-center z-20">
          <span
            className="text-[9px] tracking-[0.3em] text-white/30 uppercase select-none"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Shrisha — Architectural Visionaries — Pune
          </span>
        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-screen pl-20 pr-16 pt-24 pb-20">
          <h1 className="reveal text-[11px] tracking-[0.45em] text-primary uppercase mb-8">
            Tenets
          </h1>
          <p className="reveal reveal-delay-1 text-white/90 text-lg md:text-xl leading-relaxed max-w-4xl mb-6">
            <span className="text-primary font-semibold">Shrisha Architects</span> is a multidisciplinary firm with verticals in architecture and interior planning, established in 2009 in Pune.
          </p>
          <p className="reveal reveal-delay-2 text-white/55 text-base md:text-lg leading-relaxed max-w-4xl mb-6">
            The co-founders with their team of young and ambitious creative designers relentlessly work with a unified goal in mind: "end product to client satisfaction". Each project represents a blend of design elements with technology, exploring the ever-changing world of ideas.
          </p>
          <p className="reveal reveal-delay-3 text-white/55 text-base md:text-lg leading-relaxed max-w-4xl mb-6">
            The firm has been engaged in conceptualising and designing various size and scale of projects ranging from residential layouts to standalone structures, from private villas to commercial buildings — all conceived from architectural and interior perspectives, each with a fresh vision.
          </p>
          <p className="reveal reveal-delay-4 text-white/55 text-base md:text-lg leading-relaxed max-w-4xl">
            Driven by a profound belief in the capacity of good design to shape how people behave, the studio's work is underpinned by a clear understanding of the critical role that built environments play in daily life.
          </p>
        </div>
      </section>

      {/* ── 2. DESIGN PHILOSOPHY ── */}
      <section className="py-24 bg-[#111]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="reveal text-[10px] tracking-[0.35em] text-primary uppercase mb-4">Our Philosophy</p>
              <h2 className="reveal reveal-delay-1 font-display font-bold text-5xl md:text-6xl leading-tight mb-6">
                Design is a<br /><span className="text-primary">Behaviour</span>
              </h2>
              <p className="reveal reveal-delay-2 text-white/50 text-base leading-relaxed mb-4">
                Not a department with us. We approach each project with thoughtful concepts, research-driven development, and authentic design strategy — making our work highly responsive to context: time, place, and program.
              </p>
              <p className="reveal reveal-delay-3 text-white/50 text-base leading-relaxed">
                Our co-founders relentlessly work with a unified goal: "end product to client satisfaction". We constantly shift visual paradigms with each completed project, the end result eliciting an emotional resonance.
              </p>
            </div>
            <div className="reveal-right relative h-[480px] overflow-hidden">
              <Image
                src="/images/projects/koregaon-villas.jpg"
                alt="Design Philosophy"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FOUNDER SECTION ── */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="container-custom">
          <h2 className="reveal text-center uppercase tracking-[0.3em] text-4xl md:text-5xl font-bold mb-20">
            Shrisha <span className="text-primary">Founder</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {founders.map((founder, i) => (
              <div key={founder.id} className={`reveal reveal-delay-${i + 1}`}>
                {/* Founder image */}
                <div className="relative h-80 overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="text-[11px] tracking-[0.3em] uppercase text-white font-bold mb-3">
                  {founder.name}
                </h3>
                <p className="text-[10px] tracking-[0.2em] text-primary uppercase mb-4">{founder.title}</p>
                <p className="text-white/50 text-[13px] leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TEAM SECTION ── */}
      <section className="py-24 bg-[#111]">
        <div className="container-custom">
          <h2 className="reveal text-center uppercase tracking-[0.3em] text-4xl md:text-5xl font-bold mb-20">
            Team <span className="text-primary">Shrisha</span>
          </h2>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {teamMembers.map((member, i) => (
              <div
                key={member.id}
                className={`reveal reveal-delay-${(i % 6) + 1} flex flex-col items-center`}
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-2 grayscale hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-[8px] tracking-[0.1em] text-white/40 uppercase text-center leading-tight">
                  {member.name.split(' ')[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. INTERIOR PHILOSOPHY ── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="reveal-left relative h-[480px] overflow-hidden order-2 md:order-1">
              <Image
                src="/images/projects/it-complex.jpg"
                alt="Interior Design"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </div>
            <div className="order-1 md:order-2">
              <p className="reveal text-[10px] tracking-[0.35em] text-primary uppercase mb-4">Interior Design</p>
              <h2 className="reveal reveal-delay-1 font-display font-bold text-5xl md:text-6xl leading-tight mb-6">
                Clean &<br /><span className="text-primary">Contextual</span>
              </h2>
              <p className="reveal reveal-delay-2 text-white/50 text-base leading-relaxed mb-4">
                The firm's concept sits on a design style that is "clean and contextual". We find balance in our designs by juxtaposing warm and cool features.
              </p>
              <p className="reveal reveal-delay-3 text-white/50 text-base leading-relaxed mb-8">
                We like the blending of refined and clean items with slightly offbeat elements. Our work is driven by research and development, weaving thoughtful concepts throughout all aspects of design.
              </p>
              <div className="reveal reveal-delay-4 grid grid-cols-2 gap-8 pt-6 border-t border-primary/20">
                <div>
                  <div className="text-4xl font-light text-primary mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>50+</div>
                  <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase">Projects Delivered</p>
                </div>
                <div>
                  <div className="text-4xl font-light text-primary mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>14</div>
                  <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CORE VALUES ── */}
      <section className="py-24 bg-[#111]">
        <div className="container-custom">
          <p className="reveal text-[10px] tracking-[0.35em] text-primary uppercase mb-4 text-center">What Drives Us</p>
          <h2 className="reveal reveal-delay-1 font-display font-bold text-4xl md:text-5xl uppercase tracking-wider mb-16 text-center">
            Core <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/10">
            {[
              { num: '01', title: 'Innovation', desc: 'Constantly pushing boundaries to deliver fresh perspectives and cutting-edge architectural solutions.' },
              { num: '02', title: 'Quality', desc: 'Unwavering commitment to excellence in design, materials, and execution on every project.' },
              { num: '03', title: 'Sustainability', desc: 'Creating spaces that respect the environment and benefit communities for generations to come.' },
            ].map(({ num, title, desc }, i) => (
              <div key={title} className={`reveal reveal-delay-${i + 1} group bg-[#161616] p-10 border border-primary/10 hover:border-primary/40 hover:bg-[#1a1a1a] transition-all duration-300`}>
                <div className="text-[48px] font-light text-primary/20 leading-none mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  {num}
                </div>
                <h3 className="text-[13px] tracking-[0.2em] uppercase font-semibold text-white mb-4">{title}</h3>
                <p className="text-[13px] leading-relaxed text-white/45">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}