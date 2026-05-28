// 'use client';

// import { useState, useEffect, useCallback } from 'react';
// import Navigation from '@/components/navigation';
// import Footer from '@/components/footer';
// import { projects } from '@/lib/data/projects';
// import { ArrowRight, Palette, Zap, Leaf } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';

// const heroSlides = [
//   {
//     image: '/images/projects/lakeside-residences.jpg',
//     line1: 'ARCHITECTURE',
//     line2: 'RESIDENTIAL',
//     quote: 'We craft homes that blend timeless design with everyday living.',
//   },
//   {
//     image: '/images/projects/koregaon-villas.jpg',
//     line1: 'ARCHITECTURE',
//     line2: 'VILLA',
//     quote: 'Luxury villas designed as private sanctuaries of elegance, light and nature.',
//   },
//   {
//     image: '/images/projects/cultural-center.jpg',
//     line1: 'ARCHITECTURE',
//     line2: 'COMMERCIAL',
//     quote: 'Innovative commercial spaces that inspire business, people, and growth.',
//   },
//   {
//     image: '/images/projects/01.jpeg',
//     line1: 'ARCHITECTURAL',
//     line2: 'LIASONING',
//     quote: 'Seamless liasoning solutions ensuring smooth approvals and hassle-free execution.',
//   },
//   {
//     image: '/images/projects/05.jpeg',
//     line1: 'ARCHITECTURE',
//     line2: 'INSTITUTIONAL',
//     quote: 'Purpose-driven institutional architecture built for learning, community & impact.',
//   },
//   {
//     image: '/images/projects/it-complex.jpg',
//     line1: 'INTERIOR',
//     line2: 'DESIGN',
//     quote: 'Thoughtfully designed interiors that transform spaces into experience.',
//   },
// ];

// export default function Home() {
//   const [current, setCurrent] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const featuredProjects = projects.slice(0, 4);

//   const goTo = useCallback((n: number) => {
//     if (animating) return;
//     setAnimating(true);
//     setTimeout(() => {
//       setCurrent((n + heroSlides.length) % heroSlides.length);
//       setAnimating(false);
//     }, 150);
//   }, [animating]);

//   const next = () => goTo(current + 1);
//   const prev = () => goTo(current - 1);

//   useEffect(() => {
//     const t = setInterval(next, 5500);
//     return () => clearInterval(t);
//   }, [current]);

//   const slide = heroSlides[current];

//   return (
//     <>
//       <Navigation />

//       {/* ─────────────────────────────── HERO ─────────────────────────────── */}
//   <section className="relative w-full bg-black" style={{ height: '100vh' }}>

//     {heroSlides.map((s, i) => (
//   <div
//     key={i}
//     className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
//   >
//     <Image
//       src={s.image}
//       alt={s.line1}
//       fill
//       sizes="100vw"
//       quality={100}
//       className="object-cover object-[center_30%]"
//       priority={i === 0}
//     />
//   </div>
// ))}

//         {/* Gradient overlays */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30 z-10" />
// <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

//         {/* Left vertical sidebar */}
//         <div className="absolute left-0 top-0 h-full w-11 border-r border-primary/20 flex items-center justify-center z-20">
//           <span
//             className="text-[9px] tracking-[0.3em] text-white/30 uppercase select-none"
//             style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
//           >
//             Shrisha — Architectural Visionaries — Pune
//           </span>
//         </div>

//         {/* Ruler decoration */}
//         <div className="absolute top-24 left-14 z-20">
//           <svg width="140" height="20" viewBox="0 0 140 20">
//             <line x1="0" y1="10" x2="140" y2="10" stroke="rgba(194,154,89,0.4)" strokeWidth="0.5" />
//             {[0, 20, 40, 60, 80, 100, 120, 140].map((x, i) => (
//               <line key={x} x1={x} y1={i % 3 === 0 ? 4 : 6} x2={x} y2={i % 3 === 0 ? 16 : 14}
//                 stroke="rgba(194,154,89,0.4)" strokeWidth="0.8" />
//             ))}
//           </svg>
//         </div>

//         {/* Slide counter */}
//         <div className="absolute left-16 top-1/2 -translate-y-1/2 z-20">
//           <div
//             className={`font-serif text-[90px] font-light text-primary leading-none transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}
//             style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
//           >
//             {String(current + 1).padStart(2, '0')}
//           </div>
//           <div className="text-[11px] tracking-[0.2em] text-white/40 mt-1">
//             / {String(heroSlides.length).padStart(2, '0')}
//           </div>
//         </div>

//         {/* PREV / NEXT arrows */}
//         <div className="absolute left-16 bottom-32 z-20 flex items-center gap-8">
//           <button
//             onClick={prev}
//             className="flex items-center gap-3 text-[10px] tracking-[0.25em] text-white/50 hover:text-primary transition-colors duration-300 uppercase"
//           >
//             <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
//               <line x1="22" y1="5" x2="0" y2="5" stroke="currentColor" strokeWidth="1" />
//               <polyline points="7,1 0,5 7,9" fill="none" stroke="currentColor" strokeWidth="1" />
//             </svg>
//             Prev
//           </button>
//           <button
//             onClick={next}
//             className="flex items-center gap-3 text-[10px] tracking-[0.25em] text-white/50 hover:text-primary transition-colors duration-300 uppercase"
//           >
//             Next
//             <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
//               <line x1="0" y1="5" x2="22" y2="5" stroke="currentColor" strokeWidth="1" />
//               <polyline points="15,1 22,5 15,9" fill="none" stroke="currentColor" strokeWidth="1" />
//             </svg>
//           </button>
//         </div>

//         {/* Hero title — bottom right */}
//         <div
//           className={`absolute bottom-20 right-16 text-right z-20 transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}
//         >
//           <div
//             className="text-[42px] md:text-[52px] font-light tracking-[0.45em] text-white/90 uppercase leading-tight"
//             style={{ fontFamily: "'Montserrat', sans-serif" }}
//           >
//             {slide.line1}
//           </div>
//           <div
//             className="text-[42px] md:text-[52px] font-bold tracking-[0.45em] text-white uppercase leading-tight"
//             style={{ fontFamily: "'Montserrat', sans-serif" }}
//           >
//             {slide.line2}
//           </div>
//           <p className="mt-4 text-[11px] tracking-[0.08em] text-white/40 italic max-w-xs ml-auto">
//             {slide.quote}
//           </p>
//         </div>



//         {/* Scroll indicator */}
//         <button className="absolute bottom-8 right-16 z-20 w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-bounce">
//           <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
//             <polyline points="1,1 7,7 13,1" stroke="#000" strokeWidth="1.5" fill="none" />
//           </svg>
//         </button>

//         {/* Social icon left-bottom */}
//         <div className="absolute bottom-8 left-3 z-20">
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
//             <rect x="2" y="2" width="20" height="20" rx="5" />
//             <circle cx="12" cy="12" r="4" />
//             <circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.3)" />
//           </svg>
//         </div>

//       </section>

//       {/* ─────────────────────────── STATS ─────────────────────────────── */}
//     <section className="bg-[#1e1e1e] py-20">
//         <div className="container-custom">
//          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { number: '100+', label: 'Projects Completed' },
// { number: '2 Cr+', label: 'Sq.ft Designed & Executed' },
// { number: '2 Cr+', label: 'Sq.ft of Architectural Excellence' },
// { number: '14+', label: 'Years of Excellence' },
//             ].map(({ number, label }) => (
//               <div key={label} className="text-center">
//                 <div
//                   className="text-[60px] md:text-[72px] font-light text-primary leading-none"
//                   style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
//                 >
//                   {number}
//                 </div>
//                 <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mt-2">{label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* ─────────────────────────── ABOUT ─────────────────────────────── */}
// {/* ─────────────────────────── ABOUT ─────────────────────────────── */}
// <section className="py-16 bg-[#111]">
//   <div className="container-custom">
//     <p className="text-[10px] tracking-[0.35em] text-primary uppercase mb-4 text-center">Who We Are</p>
//     <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-wider mb-16 text-center">
//       About <span className="text-primary">SHRISHA</span>
//     </h2>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//       <div>
//         <p className="text-white/60 text-[14px] leading-relaxed mb-6">
//           SHRISHA Consultancy is a multidisciplinary design firm specializing in Architectural Design, Architectural Liaisoning, and Interior Design. We are committed to creating functional, aesthetic, and sustainable environments that enhance the way people live, work, and experience spaces.
//         </p>
//         <p className="text-white/60 text-[14px] leading-relaxed mb-6">
//           With a holistic approach to design and project coordination, we provide comprehensive solutions from concept development to execution support. Our expertise combines creativity, technical precision, regulatory knowledge, and client-focused service to deliver projects that are innovative, practical, and timeless.
//         </p>
//         <p className="text-white/60 text-[14px] leading-relaxed mb-10">
//           We believe every project is unique and deserves thoughtful planning, attention to detail, and seamless integration between architecture, interiors, and landscape elements.
//         </p>
//         <Link
//           href="/about"
//           className="inline-flex items-center gap-3 px-8 py-3 border border-primary text-primary text-[11px] tracking-[0.25em] uppercase hover:bg-primary hover:text-black transition-colors duration-300"
//         >
//           Know More <ArrowRight size={16} />
//         </Link>
//       </div>
//       <div className="relative h-[420px] overflow-hidden">
//         <Image
//           src="/images/projects/cultural-center.jpg"
//           alt="About Shrisha"
//           fill
//           className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
//         />
//       </div>
//     </div>
//   </div>
// </section>

//       {/* ─────────────────────────── SERVICES ──────────────────────────── */}
//       <section className="py-16 bg-[#111]">
//         <div className="container-custom">
//           <p className="text-[10px] tracking-[0.35em] text-primary uppercase mb-4">What We Do</p>
//           <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-wider mb-16">
//             Our <span className="text-primary">EXPERTISE</span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/10">
//             {[
//              { icon: Palette, num: '01', title: 'Architectural Design', desc: 'Comprehensive consultancy focused on design quality, spatial efficiency and contextual sensitivity — well planned, functional, timeless.' },
// { icon: Zap, num: '02', title: 'Architectural Liasoning', desc: 'Faster, smoother approvals with full regulatory compliance — single point co-ordination from documentation to authority follow ups.' },
// { icon: Leaf, num: '03', title: 'Interior Designing', desc: 'End to end interior solution driven by clarity, proportion and material sensibility — timeless interiors that are both beautiful & functional.' },
//             ].map(({ icon: Icon, num, title, desc }) => (
//               <div
//                 key={title}
//                 className="group bg-[#161616] p-10 border border-primary/10 hover:border-primary/40 hover:bg-[#1a1a1a] transition-all duration-300"
//               >
//                 <div className="text-[48px] font-light text-primary/20 leading-none mb-4"
//                   style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
//                   {num}
//                 </div>
//                 <h3 className="text-[13px] tracking-[0.2em] uppercase font-semibold text-white mb-4">{title}</h3>
//                 <p className="text-[13px] leading-relaxed text-white/45">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─────────────────────────── PROJECTS ──────────────────────────── */}
//       <section className="py-16 bg-[#0a0a0a]">
//         <div className="container-custom">
//           <p className="text-[10px] tracking-[0.35em] text-primary uppercase mb-4">Portfolio</p>
//           <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-wider mb-16">
//             Featured <span className="text-primary">PROJECTS</span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
//             {featuredProjects.map((project, idx) => (
//               <Link
//                 key={project.id}
//                 href={`/projects/${project.id}`}
//                 className={`group relative overflow-hidden block ${idx === 0 ? 'md:row-span-2' : ''}`}
//               >
//                 <div className="relative overflow-hidden" style={{ height: idx === 0 ? '500px' : '248px' }}>
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover brightness-60 group-hover:brightness-40 group-hover:scale-105 transition-all duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
//                   <div className="absolute bottom-0 left-0 p-5">
//                     <div className="text-[9px] tracking-[0.3em] text-primary uppercase mb-1">{project.category}</div>
//                     <div className="text-[15px] tracking-[0.08em] font-semibold text-white uppercase">{project.title}</div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div className="mt-12 text-center">
//             <Link
//               href="/projects"
//               className="inline-flex items-center gap-3 px-10 py-3 border border-primary text-primary text-[11px] tracking-[0.25em] uppercase hover:bg-primary hover:text-black transition-colors duration-300"
//             >
//               View All Projects <ArrowRight size={16} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ─────────────────────────── CTA ────────────────────────────────── */}
//       <section className="py-16 bg-[#111] text-center">
//         <div className="container-custom">
//           <h2
//             className="text-[52px] md:text-[64px] font-light text-white mb-5 leading-tight"
//             style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
//           >
//             Ready to Transform Your Vision?
//           </h2>
//           <p className="text-[11px] tracking-[0.2em] text-white/35 uppercase mb-12">
//             Collaborate with Shrisha — spaces that inspire, innovate, and endure
//           </p>
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-4 px-12 py-4 bg-primary text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-primary/85 transition-colors duration-300"
//           >
//             Start Your Project <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }



'use client';

import { useState, useEffect, useCallback } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { projects } from '@/lib/data/projects';
import { ArrowRight, Palette, Zap, Leaf } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const heroSlides = [
  {
    image: '/images/projects/lakeside-residences.jpg',
    line1: 'ARCHITECTURE',
    line2: 'RESIDENTIAL',
    quote: 'We craft homes that blend timeless design with everyday living.',
  },
  {
    image: '/images/projects/koregaon-villas.jpg',
    line1: 'ARCHITECTURE',
    line2: 'VILLA',
    quote: 'Luxury villas designed as private sanctuaries of elegance, light and nature.',
  },
  {
    image: '/images/projects/cultural-center.jpg',
    line1: 'ARCHITECTURE',
    line2: 'COMMERCIAL',
    quote: 'Innovative commercial spaces that inspire business, people, and growth.',
  },
  {
    image: '/images/projects/01.jpeg',
    line1: 'ARCHITECTURAL',
    line2: 'LIASONING',
    quote: 'Seamless liasoning solutions ensuring smooth approvals and hassle-free execution.',
  },
  {
    image: '/images/projects/05.jpeg',
    line1: 'ARCHITECTURE',
    line2: 'INSTITUTIONAL',
    quote: 'Purpose-driven institutional architecture built for learning, community & impact.',
  },
  {
    image: '/images/projects/it-complex.jpg',
    line1: 'INTERIOR',
    line2: 'DESIGN',
    quote: 'Thoughtfully designed interiors that transform spaces into experience.',
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const featuredProjects = projects.slice(0, 4);

  const goTo = useCallback((n: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((n + heroSlides.length) % heroSlides.length);
      setAnimating(false);
    }, 150);
  }, [animating]);

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [current]);

  const slide = heroSlides[current];

  return (
    <>
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative w-full bg-[#1a1a1a]" style={{ height: '100vh' }}>
        {heroSlides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
            <Image src={s.image} alt={s.line1} fill sizes="100vw" quality={100}
              className="object-cover object-[center_30%]" priority={i === 0} />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

        {/* Left sidebar */}
        <div className="absolute left-0 top-0 h-full w-11 border-r border-primary/20 flex items-center justify-center z-20">
          <span className="text-[9px] tracking-[0.3em] text-white/30 uppercase select-none"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            Shrisha — Architectural Visionaries — Pune
          </span>
        </div>

        {/* Ruler */}
        <div className="absolute top-24 left-14 z-20">
          <svg width="140" height="20" viewBox="0 0 140 20">
            <line x1="0" y1="10" x2="140" y2="10" stroke="rgba(194,154,89,0.4)" strokeWidth="0.5" />
            {[0, 20, 40, 60, 80, 100, 120, 140].map((x, i) => (
              <line key={x} x1={x} y1={i % 3 === 0 ? 4 : 6} x2={x} y2={i % 3 === 0 ? 16 : 14}
                stroke="rgba(194,154,89,0.4)" strokeWidth="0.8" />
            ))}
          </svg>
        </div>

        {/* Counter */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 z-20">
          <div className={`font-serif text-[90px] font-light text-primary leading-none transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            {String(current + 1).padStart(2, '0')}
          </div>
          <div className="text-[11px] tracking-[0.2em] text-white/40 mt-1">
            / {String(heroSlides.length).padStart(2, '0')}
          </div>
        </div>

        {/* PREV/NEXT */}
        <div className="absolute left-16 bottom-32 z-20 flex items-center gap-8">
          <button onClick={prev} className="flex items-center gap-3 text-[10px] tracking-[0.25em] text-white/50 hover:text-primary transition-colors duration-300 uppercase">
            <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
              <line x1="22" y1="5" x2="0" y2="5" stroke="currentColor" strokeWidth="1" />
              <polyline points="7,1 0,5 7,9" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
            Prev
          </button>
          <button onClick={next} className="flex items-center gap-3 text-[10px] tracking-[0.25em] text-white/50 hover:text-primary transition-colors duration-300 uppercase">
            Next
            <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
              <line x1="0" y1="5" x2="22" y2="5" stroke="currentColor" strokeWidth="1" />
              <polyline points="15,1 22,5 15,9" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>
        </div>

        {/* Title */}
        <div className={`absolute bottom-20 right-16 text-right z-20 transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-[42px] md:text-[52px] font-light tracking-[0.45em] text-white/90 uppercase leading-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>{slide.line1}</div>
          <div className="text-[42px] md:text-[52px] font-bold tracking-[0.45em] text-white uppercase leading-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>{slide.line2}</div>
          <p className="mt-4 text-[11px] tracking-[0.08em] text-white/40 italic max-w-xs ml-auto">{slide.quote}</p>
        </div>

        {/* Scroll btn */}
        <button className="absolute bottom-8 right-16 z-20 w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-bounce">
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <polyline points="1,1 7,7 13,1" stroke="#000" strokeWidth="1.5" fill="none" />
          </svg>
        </button>

        {/* Instagram icon */}
        <div className="absolute bottom-8 left-3 z-20">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.3)" />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#1e1e1e] py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '100+', label: 'Projects Completed' },
              { number: '2 Cr+', label: 'Sq.ft Designed & Executed' },
              { number: '14+', label: 'Years of Excellence' },
            ].map(({ number, label }) => (
              <div key={label} className="text-center">
                <div className="text-[60px] md:text-[72px] font-light text-primary leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{number}</div>
                <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 bg-[#222]">
        <div className="container-custom">
          <p className="text-[10px] tracking-[0.35em] text-primary uppercase mb-4 text-center">Who We Are</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-wider mb-16 text-center">
            About <span className="text-primary">SHRISHA</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-white/65 text-[14px] leading-relaxed mb-6">
                SHRISHA Consultancy is a multidisciplinary design firm specializing in Architectural Design, Architectural Liaisoning, and Interior Design. We are committed to creating functional, aesthetic, and sustainable environments that enhance the way people live, work, and experience spaces.
              </p>
              <p className="text-white/65 text-[14px] leading-relaxed mb-6">
                With a holistic approach to design and project coordination, we provide comprehensive solutions from concept development to execution support. Our expertise combines creativity, technical precision, regulatory knowledge, and client-focused service to deliver projects that are innovative, practical, and timeless.
              </p>
              <p className="text-white/65 text-[14px] leading-relaxed mb-10">
                We believe every project is unique and deserves thoughtful planning, attention to detail, and seamless integration between architecture, interiors, and landscape elements.
              </p>
              <Link href="/about"
                className="inline-flex items-center gap-3 px-8 py-3 border border-primary text-primary text-[11px] tracking-[0.25em] uppercase hover:bg-primary hover:text-black transition-colors duration-300">
                Know More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative h-[420px] overflow-hidden">
              <Image src="/images/projects/cultural-center.jpg" alt="About Shrisha" fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="py-16 bg-[#1e1e1e]">
        <div className="container-custom">
          <p className="text-[10px] tracking-[0.35em] text-primary uppercase mb-4">What We Do</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-wider mb-16">
            Our <span className="text-primary">EXPERTISE</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/10">
            {[
              { icon: Palette, num: '01', title: 'Architectural Design', desc: 'Comprehensive consultancy focused on design quality, spatial efficiency and contextual sensitivity — well planned, functional, timeless.' },
              { icon: Zap, num: '02', title: 'Architectural Liasoning', desc: 'Faster, smoother approvals with full regulatory compliance — single point co-ordination from documentation to authority follow ups.' },
              { icon: Leaf, num: '03', title: 'Interior Designing', desc: 'End to end interior solution driven by clarity, proportion and material sensibility — timeless interiors that are both beautiful & functional.' },
            ].map(({ icon: Icon, num, title, desc }) => (
              <div key={title} className="group bg-[#262626] p-10 border border-primary/10 hover:border-primary/40 hover:bg-[#2a2a2a] transition-all duration-300">
                <div className="text-[48px] font-light text-primary/20 leading-none mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{num}</div>
                <h3 className="text-[13px] tracking-[0.2em] uppercase font-semibold text-white mb-4">{title}</h3>
                <p className="text-[13px] leading-relaxed text-white/55">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-16 bg-[#222]">
        <div className="container-custom">
          <p className="text-[10px] tracking-[0.35em] text-primary uppercase mb-4">Portfolio</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-wider mb-16">
            Featured <span className="text-primary">PROJECTS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
            {featuredProjects.map((project, idx) => (
              <Link key={project.id} href={`/projects/${project.id}`}
                className={`group relative overflow-hidden block ${idx === 0 ? 'md:row-span-2' : ''}`}>
                <div className="relative overflow-hidden" style={{ height: idx === 0 ? '500px' : '248px' }}>
                  <Image src={project.image} alt={project.title} fill
                    className="object-cover brightness-75 group-hover:brightness-50 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <div className="text-[9px] tracking-[0.3em] text-primary uppercase mb-1">{project.category}</div>
                    <div className="text-[15px] tracking-[0.08em] font-semibold text-white uppercase">{project.title}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/projects"
              className="inline-flex items-center gap-3 px-10 py-3 border border-primary text-primary text-[11px] tracking-[0.25em] uppercase hover:bg-primary hover:text-black transition-colors duration-300">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#1e1e1e] text-center">
        <div className="container-custom">
          <h2 className="text-[52px] md:text-[64px] font-light text-white mb-5 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Ready to Transform Your Vision?
          </h2>
          <p className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-12">
            Collaborate with Shrisha — spaces that inspire, innovate, and endure
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-4 px-12 py-4 bg-primary text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-primary/85 transition-colors duration-300">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}