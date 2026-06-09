'use client';

import { useEffect } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { teamMembers } from '@/lib/data/team';
import Image from 'next/image';

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('rv-in');
            observer.unobserve(e.target);
          }
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
        .rv { opacity:0; transform:translateY(28px); transition:opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1); }
        .rv.rv-in { opacity:1; transform:translateY(0); }
        .d1{transition-delay:.1s} .d2{transition-delay:.2s} .d3{transition-delay:.3s}
        .d4{transition-delay:.4s} .d5{transition-delay:.5s}
        .team-tile { position:relative; overflow:hidden; aspect-ratio:1; }
        .team-tile img { filter:grayscale(100%); transition:filter 0.4s; width:100%; height:100%; object-fit:cover; }
        .team-tile:hover img { filter:grayscale(0%); }
        .team-overlay { position:absolute; inset:0; background:rgba(0,0,0,0.72); opacity:0; transition:opacity 0.3s; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:12px; }
        .team-tile:hover .team-overlay { opacity:1; }
      `}</style>

      <Navigation />

      {/* ══════════════════════════════════════════
          1. TENETS — FSND exact style
          - image clearly visible (not dark)
          - gradient from bottom (dark) to top (transparent)
          - content sits at bottom-left with vmin padding
          - font: Montserrat 300, 1em, line-height 1.65, color rgba(255,255,255,0.5)
      ══════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          backgroundColor: '#272727',
          overflow: 'hidden',
        }}
      >
        {/* Background image — high opacity like FSND */}
        <Image
         src="/images/projects/cultural-center-bw.jpg"
          alt="Shrisha Studio"
          fill
          className="object-cover"
        style={{ opacity: 0.85, zIndex: 0 }}
          priority
        />

        {/* FSND gradient — dark from BOTTOM, fades to transparent at top */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
           background:
              'linear-gradient(to top, rgba(39,39,39,0.7) 0%, rgba(39,39,39,0.5) 40%, rgba(39,39,39,0.3) 70%, rgba(39,39,39,0.15) 100%)',
          }}
        />

        

        {/* Content — FSND uses padding: 33.7vmin 0 on .main-inner */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            paddingLeft: '80px',
            paddingRight: '80px',
            paddingTop: '26vmin',
            paddingBottom: '26vmin',
            maxWidth: '100%',
          }}
        >
          {/* TENETS heading — gold, Oswald, same size as FSND h1 */}
          <h1
            className="rv"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: '#f9b617',
              marginBottom: '20px',
              marginTop: 0,
              lineHeight: 1,
            }}
          >
            TENETS
          </h1>

          {/* Paragraph 1 — first word gold, rest FSND body style */}
          <p
            className="rv d1"
            style={{
             fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: '30px',
              color: '#fff',
              marginBottom: '10px',
            }}
          >
            <span style={{ color: '#f9b617' }}>Shrisha Consultancy</span> is a multidisciplinary
            design firm specializing in Architectural Design, Architectural Liaisoning, and Interior
            Design, established in Pune.
          </p>

          <p
            className="rv d2"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: '30px',
              color: '#fff',
               marginBottom: '10px',
            }}
          >
            The founder with a team of young and ambitious creative designers relentlessly works
            with a unified goal in mind: "end product to client satisfaction". Each project
            represents a blend of design elements with technology, exploring the ever-changing world
            of ideas.
          </p>

          <p
            className="rv d3"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: '30px',
              color: '#fff',
              marginBottom: 0,
            }}
          >
            The firm has been engaged in conceptualising and designing various size and scale of
            projects ranging from residential layouts to standalone structures, from private villas
            to commercial buildings — all conceived from architectural and interior perspectives,
            each with a fresh vision, exploring the ever-changing world of ideas.
          </p>

          <p
            className="rv d4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: '30px',
              color: '#fff',
              marginBottom: 0,
            }}
          >
            Driven by a profound belief in the capacity of good design to shape how people behave,
            the studio&apos;s work is underpinned by a clear understanding of the critical role
            that built environments play in daily life.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. FOUNDER
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#272727', padding: '80px 0 100px' }}>
        <div className="container-custom">

          <div className="rv text-center" style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(28px, 4vw, 48px)',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              <span style={{ color: '#f9b617' }}>SHRISHA</span>{' '}
              <span style={{ color: '#fff' }}>FOUNDER</span>
            </h2>
          </div>

          <div
            className="rv d1"
            style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1',
                overflow: 'hidden',
                marginBottom: '24px',
                filter: 'grayscale(100%)',
                transition: 'filter 0.5s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
              onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
            >
              <Image
                src="/images/team/ARVILASJAGANNATHYELE.jpeg"
                alt="Ar. Vilas Yele"
                fill
                className="object-cover"
              />
            </div>

            <h3
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 400,
                fontSize: '18px',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: '#fff',
                marginBottom: '8px',
                marginTop: 0,
              }}
            >
              AR. VILAS YELE
            </h3>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#f9b617',
                marginBottom: '24px',
              }}
            >
              Founder &amp; Principal Architect
            </p>

            {/* <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                fontSize: '1em',
                lineHeight: '1.65',
                color: 'rgba(255,255,255,0.5)',
                textAlign: 'left',
              }}
            >
              With over a decade of experience in architectural design and project execution,
              Ar. Vilas Yele has built Shrisha Consultancy on the principles of functional beauty,
              contextual sensitivity, and client-centred collaboration. His holistic approach spans
              architecture, interiors, and regulatory liaisoning — ensuring every project is
              delivered with precision, creativity, and care.
            </p> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}