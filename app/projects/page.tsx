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
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); }
      }),
      { threshold: 0.08 }
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
    setTimeout(() => { setSelected(cat); setVisible(true); }, 250);
  };

  return (
    <>
      <style>{`
        .reveal { opacity:0; transform:translateY(32px); transition:opacity 0.8s cubic-bezier(0.22,1,0.36,1),transform 0.8s cubic-bezier(0.22,1,0.36,1); }
        .reveal.revealed { opacity:1; transform:translateY(0); }
        .d1{transition-delay:.08s}.d2{transition-delay:.16s}.d3{transition-delay:.24s}
        .d4{transition-delay:.32s}.d5{transition-delay:.40s}.d6{transition-delay:.48s}

        .grid-fade { transition: opacity 0.25s ease; }
        .grid-fade.hidden-grid { opacity:0; }

        .proj-card { position:relative; overflow:hidden; display:block; background:#111; }
        .proj-card img { transition: transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.5s; }
        .proj-card:hover img { transform:scale(1.07); filter:brightness(0.45); }
        .proj-card .card-info {
          position:absolute; bottom:0; left:0; right:0; padding:20px 24px;
          background:linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%);
          transform:translateY(6px); transition:transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .proj-card:hover .card-info { transform:translateY(0); }
        .proj-card .card-arrow {
          position:absolute; top:16px; right:16px;
          opacity:0; transform:translate(6px,-6px); transition:opacity 0.3s, transform 0.3s;
          background:rgb(212,175,55); color:#000; border-radius:50%;
          width:36px; height:36px; display:flex; align-items:center; justify-content:center;
        }
        .proj-card:hover .card-arrow { opacity:1; transform:translate(0,0); }
        .proj-card .card-overlay {
          position:absolute; inset:0; opacity:0; transition:opacity 0.4s;
          background:linear-gradient(135deg, rgba(212,175,55,0.07) 0%, transparent 60%);
        }
        .proj-card:hover .card-overlay { opacity:1; }

        .filter-pill {
          font-size:10px; letter-spacing:0.25em; text-transform:uppercase;
          padding:8px 22px; border:1px solid rgba(212,175,55,0.15); color:rgba(255,255,255,0.3);
          transition:all 0.3s; cursor:pointer; background:none;
        }
        .filter-pill:hover { border-color:rgba(212,175,55,0.5); color:rgba(212,175,55,0.7); }
        .filter-pill.active { border-color:rgb(212,175,55); color:rgb(212,175,55); background:rgba(212,175,55,0.07); }
      `}</style>

      <Navigation />

      {/* ── HERO ── */}
      <section className="relative min-h-[48vh] flex items-end pb-14 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/projects/lakeside-residences.jpg" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>
        <div className="absolute left-0 top-0 h-full w-11 border-r border-primary/20 flex items-center justify-center z-20">
          <span className="text-[9px] tracking-[0.3em] text-white/25 uppercase select-none"
            style={{ writingMode:'vertical-rl', transform:'rotate(180deg)' }}>
            Shrisha — Portfolio
          </span>
        </div>
        <div className="container-custom relative z-10 pl-16">
          <p className="text-[10px] tracking-[0.4em] text-primary uppercase mb-3">Our Portfolio</p>
          <h1 className="font-display font-bold uppercase leading-none"
            style={{ fontSize:'clamp(44px,6vw,88px)', letterSpacing:'0.08em' }}>
            Our <span className="text-primary">PROJECTS</span>
          </h1>
          <div className="flex items-center gap-6 mt-5">
            <span className="text-white/30 text-[11px] tracking-widest uppercase">{projects.length} Projects</span>
            <span className="w-10 h-px bg-primary/30" />
            <span className="text-white/30 text-[11px] tracking-widest uppercase">Pune, Maharashtra</span>
          </div>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <div className="bg-[#0d0d0d] border-b border-primary/10 py-5">
        <div className="container-custom pl-16">
          <div className="flex flex-wrap gap-3 items-center">
            <button className={`filter-pill ${selected === null ? 'active' : ''}`} onClick={() => handleFilter(null)}>
              All ({projects.length})
            </button>
            {projectCategories.map(({ id, label }) => (
              <button key={id} className={`filter-pill ${selected === id ? 'active' : ''}`} onClick={() => handleFilter(id)}>
                {label} ({projects.filter(p => p.category === id).length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MASONRY GRID ── */}
      <section className="bg-[#0a0a0a] py-2">
        <div className={`container-custom pl-16 grid-fade ${!visible ? 'hidden-grid' : ''}`}>

          {filtered.length > 0 && (
            <>
              {/* Row 1: 1 tall + 2x2 grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
                {filtered[0] && (
                  <Link href={`/projects/${filtered[0].id}`} className="proj-card reveal" style={{ height:500 }}>
                    <Image src={filtered[0].image} alt={filtered[0].title} fill className="object-cover" />
                    <div className="card-overlay" />
                    <div className="card-info">
                      <div className="text-[9px] tracking-[0.3em] text-primary uppercase mb-1">{filtered[0].category}</div>
                      <div className="text-[16px] font-bold tracking-wider text-white uppercase">{filtered[0].title}</div>
                      <div className="text-[10px] text-white/40 mt-1">{filtered[0].year} · {filtered[0].scale}</div>
                    </div>
                    <div className="card-arrow"><ArrowUpRight size={16} /></div>
                  </Link>
                )}
                <div className="md:col-span-2 grid grid-cols-2 gap-2">
                  {filtered.slice(1, 5).map((project, i) => (
                    <Link key={project.id} href={`/projects/${project.id}`}
                      className={`proj-card reveal d${i + 1}`} style={{ height:246 }}>
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                      <div className="card-overlay" />
                      <div className="card-info">
                        <div className="text-[9px] tracking-[0.3em] text-primary uppercase mb-1">{project.category}</div>
                        <div className="text-[13px] font-bold tracking-wider text-white uppercase">{project.title}</div>
                      </div>
                      <div className="card-arrow"><ArrowUpRight size={14} /></div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Remaining: 3 col */}
              {filtered.length > 5 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {filtered.slice(5).map((project, i) => (
                    <Link key={project.id} href={`/projects/${project.id}`}
                      className={`proj-card reveal d${(i % 3) + 1}`} style={{ height:300 }}>
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                      <div className="card-overlay" />
                      <div className="card-info">
                        <div className="text-[9px] tracking-[0.3em] text-primary uppercase mb-1">{project.category}</div>
                        <div className="text-[14px] font-bold tracking-wider text-white uppercase">{project.title}</div>
                        <div className="text-[10px] text-white/40 mt-1">{project.year} · {project.scale}</div>
                      </div>
                      <div className="card-arrow"><ArrowUpRight size={14} /></div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}

          {filtered.length === 0 && (
            <div className="py-24 text-center text-white/20 text-[11px] tracking-widest uppercase">
              No projects in this category
            </div>
          )}
        </div>
      </section>

      {/* ── CATEGORY STATS ── */}
      <section className="py-16 bg-[#111]">
        <div className="container-custom pl-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/10">
            {projectCategories.map(({ id, label }, i) => {
              const count = projects.filter(p => p.category === id).length;
              return (
                <div key={id} className={`reveal d${i + 1} bg-[#161616] p-8 text-center`}>
                  <div className="text-[56px] font-light text-primary leading-none"
                    style={{ fontFamily:"'Cormorant Garamond',Georgia,serif" }}>{count}</div>
                  <p className="text-[10px] tracking-[0.25em] text-white/35 uppercase mt-2">{label}</p>
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