'use client';

import { useEffect } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { founders, teamMembers } from '@/lib/data/team';
import Image from 'next/image';
import Link from 'next/link';

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('rv-in'); observer.unobserve(e.target); }
      }),
      { threshold: 0.1 }
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
        .rv { opacity:0; transform:translateY(32px); transition:opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
        .rv.rv-in { opacity:1; transform:translateY(0); }
        .d1{transition-delay:.1s} .d2{transition-delay:.2s} .d3{transition-delay:.3s}
        .d4{transition-delay:.4s} .d5{transition-delay:.5s} .d6{transition-delay:.6s}

        .founder-img { filter: grayscale(100%); transition: filter 0.5s; }
        .founder-img:hover { filter: grayscale(0%); }
        .team-img { filter: grayscale(100%); transition: filter 0.4s, transform 0.4s; }
        .team-img:hover { filter: grayscale(0%); transform: scale(1.05); }
      `}</style>

      <Navigation />

      {/* ── 1. TENETS ── */}
      <section className="relative min-h-screen bg-[#1a1a1a] overflow-hidden">
        <Image
          src="/images/projects/cultural-center.jpg"
          alt="Shrisha Studio"
          fill
          className="object-cover opacity-75"
          priority
        />
       <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

        {/* Left sidebar */}
        <div className="absolute left-0 top-0 h-full w-11 border-r border-primary/20 flex items-center justify-center z-20">
          <span className="text-[9px] tracking-[0.3em] text-white/25 uppercase select-none"
            style={{ writingMode:'vertical-rl', transform:'rotate(180deg)' }}>
            Shrisha — Architectural Visionaries — Pune
          </span>
        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-screen pl-20 pr-16 pt-28 pb-20 max-w-4xl">
          <h2 className="rv text-[11px] tracking-[0.5em] text-primary uppercase mb-10 font-normal">
            Tenets
          </h2>
          <p className="rv d1 text-white/90 text-base md:text-lg leading-loose mb-6">
            <span className="text-primary font-semibold">Shrisha Consultancy</span> is a multidisciplinary design firm specializing in Architectural Design, Architectural Liaisoning, and Interior Design, established in Pune.
          </p>
          <p className="rv d2 text-white/90 text-sm md:text-base leading-loose mb-6">
            The co-founders with their team of young and ambitious creative designers relentlessly work with a unified goal in mind: "end product to client satisfaction". Each project represents a blend of design elements with technology, exploring the ever-changing world of ideas.
          </p>
          <p className="rv d3 text-white/90 text-sm md:text-base leading-loose mb-6">
            The firm has been engaged in conceptualising and designing various size and scale of projects ranging from residential layouts to standalone structures, from private villas to commercial buildings — all conceived from architectural and interior perspectives, each with a fresh vision.
          </p>
          <p className="rv d4 text-white/90 text-sm md:text-base leading-loose">
            Driven by a profound belief in the capacity of good design to shape how people behave, the studio's work is underpinned by a clear understanding of the critical role that built environments play in daily life.
          </p>
        </div>
      </section>

      {/* ── 2. FOUNDER ── */}
      <section className="py-24 bg-[#222]">
        <div className="container-custom">
          <h2 className="rv text-center uppercase tracking-[0.35em] text-4xl md:text-5xl font-bold mb-20">
            <span className="text-primary">Shrisha</span> Founder
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {founders.map((founder, i) => (
              <div key={founder.id} className={`rv d${i + 1} text-center`}>
                {/* Square image */}
                <div className="relative w-full aspect-square overflow-hidden mb-6 founder-img">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[13px] tracking-[0.35em] uppercase text-white font-bold mb-2">
                  {founder.name}
                </h3>
                <p className="text-[10px] tracking-[0.25em] text-primary uppercase mb-5">{founder.title}</p>
                <p className="text-white/50 text-[13px] leading-relaxed text-left">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* ── 3. TEAM ── */}
<section className="py-24 bg-[#1e1e1e]">
  <div className="container-custom">
    <h2 className="rv text-center uppercase tracking-[0.35em] text-4xl md:text-5xl font-bold mb-16">
      Team <span className="text-primary">Shrisha</span>
    </h2>

    <div className="grid grid-cols-4 md:grid-cols-8">
      {Array.from({ length: 8 }).map((_, i) => {
        const memberIndex = [1,2,4,5,7,8,10,11,13,14,16,17,19,20,22,23].indexOf(i);
        const hasPhoto = memberIndex !== -1 && memberIndex < teamMembers.length;
        return (
          <div key={i} className="relative aspect-square overflow-hidden border border-[#222] bg-[#2a2a2a]">
           {hasPhoto ? (
  <>
    <Image
      src={teamMembers[memberIndex].image}
      alt={teamMembers[memberIndex].name}
      fill
      className="object-cover team-img"
    />
    <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2">
      <p className="text-white text-[11px] tracking-[0.2em] uppercase font-bold text-center leading-tight">
        {teamMembers[memberIndex].name}
      </p>
      <p className="text-primary text-[9px] tracking-[0.15em] uppercase mt-1 text-center">
        {teamMembers[memberIndex].role}
      </p>
    </div>
  </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[#262626]">
                <Image
                  src="/images/media/logo.png"
                  alt="Shrisha"
                  width={65}
                  height={32}
                  className="object-contain opacity-30 brightness-200"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>
      {/* ── 4. PHILOSOPHY ── */}
     <section className="py-24 bg-[#222]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square overflow-hidden rv">
              <Image
                src="/images/projects/koregaon-villas.jpg"
                alt="Design Philosophy"
                fill
                className="object-cover founder-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div>
              <p className="rv text-[10px] tracking-[0.35em] text-primary uppercase mb-4">Our Philosophy</p>
              <h2 className="rv d1 font-display font-bold text-4xl md:text-5xl leading-tight mb-6">
                Design is a <span className="text-primary">Behaviour</span>
              </h2>
              <p className="rv d2 text-white/55 text-sm leading-loose mb-4">
                Not a department with us. We approach each project with thoughtful concepts, research-driven development, and authentic design strategy — making our work highly responsive to context: time, place, and program.
              </p>
              <p className="rv d3 text-white/55 text-sm leading-loose mb-10">
                We like the blending of refined and clean items with slightly offbeat elements. Our work is driven by research and development, weaving thoughtful concepts throughout all aspects of design.
              </p>
              <div className="rv d4 grid grid-cols-2 gap-8 pt-6 border-t border-primary/20">
                <div>
                  <div className="text-5xl font-light text-primary mb-1" style={{ fontFamily:"'Cormorant Garamond',Georgia,serif" }}>100+</div>
                  <p className="text-[10px] tracking-[0.2em] text-white/35 uppercase">Projects Completed</p>
                </div>
                <div>
                  <div className="text-5xl font-light text-primary mb-1" style={{ fontFamily:"'Cormorant Garamond',Georgia,serif" }}>14+</div>
                  <p className="text-[10px] tracking-[0.2em] text-white/35 uppercase">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CORE VALUES ── */}
      <section className="py-24 bg-[#1e1e1e]">
        <div className="container-custom">
          <p className="rv text-[10px] tracking-[0.4em] text-primary uppercase mb-3 text-center">What Drives Us</p>
          <h2 className="rv d1 font-display font-bold text-4xl md:text-5xl uppercase tracking-wider mb-16 text-center">
            Core <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/10">
            {[
              { num: '01', title: 'Innovation', desc: 'Constantly pushing boundaries to deliver fresh perspectives and cutting-edge architectural solutions.' },
              { num: '02', title: 'Quality', desc: 'Unwavering commitment to excellence in design, materials, and execution on every project.' },
              { num: '03', title: 'Sustainability', desc: 'Creating spaces that respect the environment and benefit communities for generations to come.' },
            ].map(({ num, title, desc }, i) => (
              <div key={title} className={`rv d${i+1} group bg-[#262626] p-10 hover:bg-[#2a2a2a] transition-all duration-300`}>
                <div className="text-[48px] font-light text-primary/15 leading-none mb-4"
                  style={{ fontFamily:"'Cormorant Garamond',Georgia,serif" }}>{num}</div>
                <h3 className="text-[12px] tracking-[0.25em] uppercase font-bold text-white mb-4">{title}</h3>
                <p className="text-[13px] leading-relaxed text-white/50">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}