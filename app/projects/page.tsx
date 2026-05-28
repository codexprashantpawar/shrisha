'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { projects, projectCategories } from '@/lib/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('rv-in'); observer.unobserve(e.target); }
      }),
      { threshold: 0.06 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Projects() {
  const [selected, setSelected] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  useScrollReveal();

  const filtered = selected ? projects.filter(p => p.category === selected) : projects;

  const handleFilter = (cat: string | null) => {
    setVisible(false);
    setTimeout(() => { setSelected(cat); setVisible(true); }, 200);
  };

  return (
    <>
      <style>{`
        .rv { opacity:0; transform:translateY(24px); transition:opacity 0.7s cubic-bezier(0.22,1,0.36,1),transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .rv.rv-in { opacity:1; transform:translateY(0); }
        .d1{transition-delay:.05s}.d2{transition-delay:.12s}.d3{transition-delay:.19s}

        .grid-fade { transition:opacity 0.2s ease; }
        .grid-fade.hidden-grid { opacity:0; }

        .pc { position:relative; overflow:hidden; display:block; background:#181818; }
        .pc img { transition:transform 0.6s cubic-bezier(0.22,1,0.36,1), filter 0.4s; }
        .pc:hover img { transform:scale(1.06); filter:brightness(0.4); }
        .pc .ci {
          position:absolute; bottom:0; left:0; right:0; padding:18px 20px;
          background:linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%);
          transform:translateY(4px); transition:transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .pc:hover .ci { transform:translateY(0); }
        .pc .ca {
          position:absolute; top:14px; right:14px; opacity:0;
          transform:translate(5px,-5px); transition:opacity 0.25s, transform 0.25s;
          background:rgb(212,175,55); color:#000; border-radius:50%;
          width:32px; height:32px; display:flex; align-items:center; justify-content:center;
        }
        .pc:hover .ca { opacity:1; transform:translate(0,0); }
        .pc .co {
          position:absolute; inset:0; opacity:0; transition:opacity 0.35s;
          background:linear-gradient(135deg, rgba(212,175,55,0.06) 0%, transparent 55%);
        }
        .pc:hover .co { opacity:1; }

        .fp { font-size:10px; letter-spacing:0.25em; text-transform:uppercase;
          padding:7px 20px; cursor:pointer; background:none;
          border:1px solid rgba(212,175,55,0.12); color:rgba(255,255,255,0.25);
          transition:all 0.25s; }
        .fp:hover { border-color:rgba(212,175,55,0.4); color:rgba(212,175,55,0.7); }
        .fp.active { border-color:rgb(212,175,55); color:rgb(212,175,55); background:rgba(212,175,55,0.06); }

        .marquee-wrap { overflow:hidden; }
        .marquee-inner { display:flex; gap:48px; animation:mq 22s linear infinite; white-space:nowrap; }
        @keyframes mq { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      `}</style>

      <Navigation />

      {/* ── HERO ── */}
      <section className="relative h-[55vh] flex items-end pb-16 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/projects/lakeside-residences.jpg" alt="" fill className="object-cover object-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
        </div>

        <div className="absolute left-0 top-0 h-full w-11 border-r border-primary/15 flex items-center justify-center z-20">
          <span className="text-[9px] tracking-[0.3em] text-white/20 uppercase select-none"
            style={{ writingMode:'vertical-rl', transform:'rotate(180deg)' }}>
            Shrisha — Portfolio — Pune
          </span>
        </div>

        <div className="container-custom relative z-10 pl-16">
          <p className="text-[10px] tracking-[0.45em] text-primary uppercase mb-3">Our Portfolio</p>
          <h1 className="font-display font-bold uppercase leading-none text-white"
            style={{ fontSize:'clamp(42px,6vw,84px)', letterSpacing:'0.07em' }}>
            Our <span className="text-primary">PROJECTS</span>
          </h1>
          <div className="flex items-center gap-5 mt-5">
            <span className="text-white/25 text-[11px] tracking-widest uppercase">{projects.length} Projects</span>
            <span className="w-8 h-px bg-primary/25" />
            <span className="text-white/25 text-[11px] tracking-widest uppercase">Pune, Maharashtra</span>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="py-4 bg-[#111] border-y border-primary/8 marquee-wrap">
        <div className="marquee-inner">
          {[...Array(2)].map((_, r) =>
            ['Residential', 'Villa', 'Commercial', 'Liasoning', 'Institutional', 'Interior', 'Architecture', 'Design'].map((t, i) => (
              <span key={`${r}-${i}`} className="text-[10px] tracking-[0.3em] uppercase text-white/15">
                {t} <span className="text-primary/50 mx-3">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── FILTERS ── */}
      <div className="bg-[#111] border-b border-primary/8 py-4">
        <div className="container-custom pl-16">
          <div className="flex flex-wrap gap-2 items-center">
            <button className={`fp ${selected === null ? 'active' : ''}`} onClick={() => handleFilter(null)}>
              All ({projects.length})
            </button>
            {projectCategories.map(({ id, label }) => (
              <button key={id} className={`fp ${selected === id ? 'active' : ''}`} onClick={() => handleFilter(id)}>
                {label} ({projects.filter(p => p.category === id).length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── GRID ── */}
      <section className="bg-[#0e0e0e] py-3">
        <div className={`container-custom pl-16 grid-fade ${!visible ? 'hidden-grid' : ''}`}>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {filtered.map((project, i) => (
                <Link key={project.id} href={`/projects/${project.id}`}
                  className={`pc rv d${(i % 3) + 1}`} style={{ height:310 }}>
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                  <div className="co" />
                  <div className="ci">
                    <div className="text-[9px] tracking-[0.3em] text-primary uppercase mb-1">{project.category}</div>
                    <div className="text-[14px] font-bold tracking-wider text-white uppercase leading-tight">{project.title}</div>
                    <div className="text-[10px] text-white/35 mt-1">{project.year} · {project.scale}</div>
                  </div>
                  <div className="ca"><ArrowUpRight size={14} /></div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-white/15 text-[11px] tracking-widest uppercase">
              No projects in this category
            </div>
          )}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-10 bg-[#111]">
        <div className="container-custom pl-16">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-primary/8">
            {projectCategories.map(({ id, label }, i) => {
              const count = projects.filter(p => p.category === id).length;
              return (
                <div key={id} className={`rv d${i + 1} bg-[#171717] p-5 text-center group hover:bg-[#1c1c1c] transition-colors duration-300`}>
                  <div className="text-[38px] font-light text-primary leading-none group-hover:scale-110 transition-transform duration-300"
                    style={{ fontFamily:"'Cormorant Garamond',Georgia,serif" }}>{count}</div>
                  <p className="text-[9px] tracking-[0.2em] text-white/30 uppercase mt-1">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}