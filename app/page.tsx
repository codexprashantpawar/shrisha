'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { projects } from '@/lib/data/projects';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

/* ─── hero slides ─────────────────────────────────────── */
const heroSlides = [
  {
    image: '/images/architecture/ARCHCOMM/CHIKHALISR.jpg',
    line1: 'ARCHITECTURE',
    line2: 'COMMERCIAL',
  },
  {
    image: '/images/architecture/ARCHCOMM/CHIKHALISR606View02.jpg',
    line1: 'ARCHITECTURE',
    line2: 'COMMERCIAL',
  },
  {
    image: '/images/architecture/ARCHCOMM/NIRA.jpeg',
    line1: 'ARCHITECTURE',
    line2: 'COMMERCIAL',
  },
  {
    image: '/images/architecture/ARCHVILAA/MOHANRAUT.jpeg',
    line1: 'ARCHITECTURE',
    line2: 'VILLA',
  },
  {
    image: '/images/architecture/ARCHVILAA/UMESHKATE.jpeg',
    line1: 'ARCHITECTURE',
    line2: 'VILLA',
    position: 'top center',
  },
  {
    image: '/images/architecture/ARCHRESI/SWASTIKHOMETOWN.jpeg',
    line1: 'ARCHITECTURE',
    line2: 'RESIDENTIAL',
  },
  {
    image: '/images/architecture/ARCHRESI/Cam002SideView001.jpg',
    line1: 'ARCHITECTURE',
    line2: 'RESIDENTIAL',
  },
  {
    image: '/images/architecture/ARCHRESI/BHOOMIALLIUM.jpeg',
    line1: 'ARCHITECTURE',
    line2: 'RESIDENTIAL',
  },
  {
    image: '/images/architecture/ARCHLIASONING/EARTHSONG.jpeg',
    line1: 'ARCHITECTURE',
    line2: 'LIASONING',
  },
  {
    image: '/images/architecture/ARCHLIASONING/MANGALAMMIDASCITY.jpg',
    line1: 'ARCHITECTURE',
    line2: 'LIASONING',
  },
];

/* ─── DISCOVER button (matches FSND circle+line style) ── */
function DiscoverBtn({ href }: { href: string }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-0 mt-6">
      {/* Circle */}
      <div
        className="w-[52px] h-[52px] rounded-full border border-white/30 flex items-center justify-center shrink-0 group-hover:border-primary transition-colors duration-300"
        style={{ fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)', fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
     >
      </div>
      {/* Line */}
      <div className="h-px bg-white/25 group-hover:bg-primary transition-colors duration-300" style={{ width: '80px' }} />
    </Link>
  );
}

/* ─── main page ──────────────────────────────────────── */
export default function Home() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const featuredProjects = projects.slice(0, 4);

  const goTo = useCallback(
    (n: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent((n + heroSlides.length) % heroSlides.length);
        setAnimating(false);
      }, 400);
    },
    [animating],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <>
      <Navigation />

      {/* ══════════════════════════════════════════
          HERO  — FSND style
      ══════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: 'calc(100vh - 0px)', minHeight: '500px' }}
      >
        {/* ── Slide images ── */}
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, zIndex: 1 }}
          >
            <Image
              src={s.image}
              alt={s.line1}
              fill
              sizes="100vw"
              quality={100}
              className="object-cover object-center"
              priority={i === 0}
            />
          </div>
        ))}

        {/* ── Gradient overlays (FSND uses subtle dark edges) ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.25) 100%)',
            zIndex: 2,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)',
            zIndex: 2,
          }}
        />

        
        {/* ── COUNTER + PREV/NEXT grouped — left side, vertically centered ── */}
        <div
          className="absolute flex flex-col"
          style={{ left: '68px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, gap: '20px' }}
        >
          {/* Counter */}
          <div>
            <div
              className={`leading-none transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(60px, 8vw, 90px)',
                fontWeight: 300,
                color: '#f9b617',
                lineHeight: 1,
              }}
            >
              {String(current + 1).padStart(2, '0')}
            </div>
            
          </div>

          {/* PREV / NEXT — directly below counter */}
          <div className="flex items-center gap-6">
            <button
              onClick={prev}
              className="flex items-center gap-2 uppercase transition-colors duration-300 hover:text-primary"
              style={{
               fontSize: '11px',
                letterSpacing: '0.22em',
                color: 'rgba(255,255,255,0.75)',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <svg width="22" height="10" viewBox="0 0 22 10" fill="none" style={{ display: 'block' }}>
                <line x1="22" y1="5" x2="0" y2="5" stroke="currentColor" strokeWidth="1.5" />
                <polyline points="7,1 0,5 7,9" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              PREV
            </button>
            <button
              onClick={next}
              className="flex items-center gap-2 uppercase transition-colors duration-300 hover:text-primary"
              style={{
                fontSize: '11px',
                letterSpacing: '0.22em',
                color: 'rgba(255,255,255,0.75)',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              NEXT
              <svg width="22" height="10" viewBox="0 0 22 10" fill="none" style={{ display: 'block' }}>
                <line x1="0" y1="5" x2="22" y2="5" stroke="currentColor" strokeWidth="1.5" />
                <polyline points="15,1 22,5 15,9" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>

       
        <div
          className={`absolute text-right transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}
          style={{
            right: '0',
            bottom: '0',
            zIndex: 10,
            paddingRight: '24px',
            paddingBottom: '80px',
            maxWidth: '90vw',
          }}
        >
          {/* Line 1 — thin */}
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
             fontSize: 'clamp(28px, 3.8vw, 56px)',
              letterSpacing: '0.45em',
              color: 'rgba(255,255,255,0.88)',
              lineHeight: 1.1,
              textTransform: 'uppercase',
            }}
          >
            {slide.line1}
          </div>

          {/* Line 2 — bold */}
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: '2em',
letterSpacing: '13px',
lineHeight: '52px',
              color: '#ffffff',
             
              textTransform: 'uppercase',
            }}
          >
            {slide.line2}
          </div>

          {/* Quote */}
          {/* <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: '12px',
              letterSpacing: '0.04em',
              color: 'rgba(255,255,255,0.42)',
              fontStyle: 'italic',
              marginTop: '12px',
              maxWidth: '320px',
              marginLeft: 'auto',
              lineHeight: 1.6,
            }}
          >
            {slide.quote}
          </p> */}
        </div>

        {/* ── SCROLL DOWN button — gold circle, bottom-right ── */}
        <button
          onClick={() => {
            const el = document.getElementById('about-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute flex items-center justify-center rounded-full"
          style={{
            width: '42px',
            height: '42px',
            backgroundColor: '#f9b617',
            right: '24px',
            bottom: '24px',
            zIndex: 20,
            border: 'none',
            cursor: 'pointer',
            animation: 'bounce 2s infinite',
          }}
          aria-label="Scroll down"
        >
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <polyline points="1,1 7,7 13,1" stroke="#000" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* ── Dot indicators (optional, subtle) ── */}
        <div
          className="absolute flex flex-col gap-2"
          style={{ right: '13px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
        >
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: '4px',
                height: i === current ? '20px' : '4px',
                borderRadius: '2px',
                backgroundColor: i === current ? '#f9b617' : 'rgba(255,255,255,0.25)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════ */}
     <section style={{ backgroundColor: '#2d2d2d', padding: '64px 0' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '100+', label: 'Projects Completed' },
              { number: '2 Cr+', label: 'Sq.ft Designed & Executed' },
              { number: '14+', label: 'Years of Excellence' },
            ].map(({ number, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 'clamp(52px, 7vw, 72px)',
                    fontWeight: 300,
                    color: '#f9b617',
                    lineHeight: 1,
                  }}
                >
                  {number}
                </div>
                <p
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.25em',
                    color: 'rgba(255,255,255,0.38)',
                    textTransform: 'uppercase',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    marginTop: '8px',
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT — matches FSND "ABOUT FSND" section
          White text + gold accent word, two-col layout
      ══════════════════════════════════════════ */}
      <section id="about-section" style={{ backgroundColor: '#2d2d2d', padding: '80px 0 100px' }}>
        <div className="container-custom">

          {/* Section heading — FSND exact style: "ABOUT [gold]SHRISHA[/gold]" */}
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(24px, 3.5vw, 35px)',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: '#fff',
                margin: 0,
              }}
            >
              About{' '}
              <span style={{ color: '#f9b617' }}>SHRISHA</span>
            </h2>
          </div>

          {/* Two-column: text left, image right */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '60px',
              alignItems: 'flex-start',
            }}
          >
            {/* Left col */}
            <div>
              <h3
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 300,
                  fontSize: 'clamp(20px, 2.8vw, 28px)',
                  letterSpacing: '0.04em',
                  color: '#e8e8e8',
                  lineHeight: 1.35,
                  marginBottom: '28px',
                  marginTop: 0,
                }}
              >
                Design is a Behaviour,
                <br />
                Not a Department with us
                <span style={{ color: '#f9b617' }}>.</span>
              </h3>

              {/* Divider line */}
              <div style={{ width: '48px', height: '1px', backgroundColor: '#f9b617', marginBottom: '28px' }} />

              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  fontSize: '14px',
                  lineHeight: '1.9',
                  color: 'rgba(255,255,255,0.52)',
                  marginBottom: '20px',
                }}
              >
                SHRISHA Consultancy is a multidisciplinary design firm specializing in Architectural
                Design, Architectural Liaisoning, and Interior Design. We are committed to creating
                functional, aesthetic, and sustainable environments that enhance the way people live,
                work, and experience spaces.
              </p>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  fontSize: '14px',
                  lineHeight: '1.9',
                  color: 'rgba(255,255,255,0.52)',
                  marginBottom: '36px',
                }}
              >
                With a holistic approach to design and project coordination, we provide comprehensive
                solutions from concept development to execution support. Our expertise combines
                creativity, technical precision, regulatory knowledge, and client-focused service.
              </p>

              {/* FSND-style DISCOVER button: circle + horizontal line */}
              <Link href="/about" className="inline-flex flex-col items-center">
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#f9b617', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '1px', height: '14px', backgroundColor: 'rgba(0,0,0,0.5)' }} />
                </div>
                <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
              </Link>
            </div>

            {/* Right col — image (grayscale → color on hover like FSND) */}
            <div
              style={{
                position: 'relative',
                height: '420px',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/projects/cultural-center.jpg"
                alt="About Shrisha"
                fill
                className="object-cover transition-all duration-700"
                style={{ filter: 'grayscale(40%)' }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
                onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(40%)')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPERTISE — FSND "Expertise" section style
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#282828', padding: '80px 0 100px' }}>
        <div className="container-custom">

          {/* Centered section heading */}
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(24px, 3.5vw, 35px)',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: '#f9b617',
                margin: 0,
              }}
            >
              Expertise
            </h2>
          </div>

          {/* Two-column grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '48px 64px',
            }}
          >
            {[
              {
                title: 'Architecture',
                body: 'Design which is Functional yet Aesthetically driven in combination with the elements of Nature is Architecture Design for our firm. The process of building a positive interaction between the space and the individual leads to success of Design. Every Architecture project is a blend of design elements with technology. Our design language focuses on forms enhanced by lines, colours, textures with respect to the climate & use of design principles.',
                href: '/projects?category=architecture',
              },
              {
                title: 'Interior',
                body: 'The firm\'s concept sits on a design style that is "clean and contextual". We find balance in our designs by juxtaposing warm and cool features. We like the blending of refined and clean items with slightly offbeat elements. Our work is driven by research and development, weaving thoughtful concepts throughout all aspects of design. We are critical thinkers and make it a priority to approach each project with a well considered, authentic design strategy.',
                href: '/projects?category=interior',
              },
            ].map(({ title, body, href }) => (
              <div key={title}>
                <h4
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 400,
                    fontSize: '18px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    marginBottom: '20px',
                    marginTop: 0,
                  }}
                >
                  {title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                    fontSize: '14px',
                    lineHeight: '1.9',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: '28px',
                  }}
                >
                  {body}
                </p>

                {/* DISCOVER button — FSND style */}
                <Link href={href} className="inline-flex flex-col items-center">
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#f9b617', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '1px', height: '14px', backgroundColor: 'rgba(0,0,0,0.5)' }} />
                  </div>
                  <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
                </Link>
              </div>
            ))}
          </div>

          {/* Liasoning — third item */}
          <div style={{ marginTop: '48px', maxWidth: '560px' }}>
            <h4
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 400,
                fontSize: '18px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#fff',
                marginBottom: '20px',
                marginTop: 0,
              }}
            >
              Liasoning
            </h4>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: '1.9',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '28px',
              }}
            >
              Faster, smoother approvals with full regulatory compliance — single point co-ordination
              from documentation to authority follow ups. Ensuring seamless project approvals at every
              stage.
            </p>
            <Link href="/projects?category=liasoning" className="inline-flex flex-col items-center">
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#f9b617', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '1px', height: '14px', backgroundColor: 'rgba(0,0,0,0.5)' }} />
              </div>
              <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROJECTS
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#2d2d2d', padding: '80px 0 100px' }}>
        <div className="container-custom">
          <p
            style={{
              fontSize: '10px',
              letterSpacing: '0.35em',
              color: '#f9b617',
              textTransform: 'uppercase',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              marginBottom: '12px',
            }}
          >
            Portfolio
          </p>
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(24px, 3.5vw, 35px)',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: '#fff',
              marginBottom: '48px',
            }}
          >
            Featured{' '}
            <span style={{ color: '#f9b617' }}>PROJECTS</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px' }}>
            {featuredProjects.map((project, idx) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block relative overflow-hidden"
                style={{ gridRow: idx === 0 ? 'span 2' : undefined }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ height: idx === 0 ? '500px' : '248px' }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                    style={{ filter: 'brightness(0.72)' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, transparent 60%)',
                    }}
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '20px' }}>
                    <div
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.3em',
                        color: '#f9b617',
                        textTransform: 'uppercase',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 400,
                        marginBottom: '4px',
                      }}
                    >
                      {project.category}
                    </div>
                    <div
                      style={{
                        fontSize: '14px',
                        letterSpacing: '0.08em',
                        fontWeight: 600,
                        color: '#fff',
                        textTransform: 'uppercase',
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {project.title}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 hover:bg-primary hover:text-black transition-colors duration-300"
              style={{
                padding: '12px 40px',
                border: '1px solid #f9b617',
                color: '#f9b617',
                fontSize: '11px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
              }}
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      
      <Footer />

      {/* ── bounce keyframe ── */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}