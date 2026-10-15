'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  // {
  //   slug: 'bajirao-park',
  //   label: 'BAJIRAO PARK AT RAVET',
  //   image: '/images/architecture/BAJIRAOPARK/Bajirao1.jpeg',
  // },
  // {
  //   slug: 'florenza-pimpri',
  //   label: 'FLORENZA AT PIMPRI',
  //   image: '/images/architecture/FLORENZAPIMPRI/01.jpg',
  // },
  // {
  //   slug: 'essentia',
  //   label: 'ESSENTIA AT RAVET',
  //   image: '/images/architecture/ESSENTIA/Essentia1.jpeg',
  // },
  // {
  //   slug: 'b-square',
  //   label: 'B SQUARE AT THERGAON',
  //   image: '/images/architecture/BSQUARE/BSquare1.jpg',
  // },
  {
    slug: 'fortune-flora',
    label: 'FORTUNE FLORA AT KIWALE',
    image: '/images/architecture/FORTUNEFLORA/01.jpg',
  },
  {
    slug: 'riveria',
    label: 'RIVIERAA AT DUDULGAON',
    image: '/images/architecture/RIVIERAA/01.jpg',
  },
  {
    slug: 'silver-18',
    label: 'SILVER 18 AT CHIKHALI',
    image: '/images/architecture/SILVER18/01.jpg',
  },

    {
    slug: 'SWASTIKHOMETOWN',
    label: 'SWASTIK HOMETOWN AT CHIKHALI',
    image: '/images/architecture/SWASTIKHOMETOWN/1.jpeg',
  },
  {
    slug: 'SWAYMBHU',
    label: 'SWAYAMBHU AT PIMPLE NILAKH',
    image: '/images/architecture/SWAYMBHU/01.jpeg',
  }
];

export default function ArchitecturePage() {
  return (
    <>
      <style>{`
        .arch-card { position: relative; overflow: hidden; cursor: pointer; }
        .arch-card img { filter: grayscale(100%); transition: filter 0.4s, transform 0.4s; width: 100%; height: 100%; object-fit: cover; }
        .arch-card:hover img { filter: grayscale(0%); transform: scale(1.05); }
       .arch-card .overlay { position: absolute; inset: 0; background: rgba(0,0,0,0); transition: background 0.4s; display: flex; align-items: flex-end; justify-content: flex-end; padding: 20px; }
        .arch-card:hover .overlay { background: rgba(0,0,0,0.45); }
        .arch-card .explore-icon { opacity: 0; transition: opacity 0.3s; }
        .arch-card:hover .explore-icon { opacity: 1; }
       .arch-card .vertical-text {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%) rotate(180deg);
          writing-mode: vertical-rl;
          font-family: 'Oswald', sans-serif;
          font-weight: 400;
          letter-spacing: 0.8em;
          color: #fff;
          padding: 0px 14px 30px 14px;
          text-transform: uppercase;
        }
        .arch-card .card-title {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: 20px 16px;
          font-family: 'Oswald', sans-serif;
          font-weight: 400;
          font-size: clamp(16px, 2vw, 22px);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fff;
        }
      `}</style>

      <Navigation />

      {/* ── HERO ── */}
      <section
        style={{
          position: 'relative',
          height: '55vh',
          minHeight: '320px',
          backgroundColor: '#272727',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/images/projects/lakeside-residences.jpg"
          alt="Architecture"
          fill
          className="object-cover"
         style={{ opacity: 1 }}
          priority
        />
        {/* FSND exact gradient */}
       <div style={{
          position: 'absolute', inset: 0,
       background: 'linear-gradient(to top, rgba(39,39,39,0.95) 0%, rgba(39,39,39,0.7) 40%, rgba(39,39,39,0.3) 100%)',
        }} />

       
        {/* ARCHITECTURE title — bottom right, FSND style */}
        <div style={{
         position: 'absolute', top: '50%', right: '60px',
          transform: 'translateY(-50%)',
          zIndex: 10, textAlign: 'right',
        }}>
         <h1 style={{
           fontFamily: "'Oswald', sans-serif",
            fontWeight: 400,
            fontSize: '5vmin',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: '#fff',
            margin: 0,
            lineHeight: 1.2,
          }}>
            ARCHITECTURE
          </h1>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div style={{
        backgroundColor: '#272727',
        padding: '20px 80px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 300,
          fontSize: '13px',
          color: 'rgba(255,255,255,0.5)',
          margin: 0,
        }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#f9b617'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >Home</Link>
          {' / '}
          <span style={{ color: '#f9b617' }}>Architecture</span>
        </p>
      </div>

      {/* ── CATEGORY GRID — FSND 4-col full width ── */}
      <section style={{ backgroundColor: '#272727' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
        }}>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/architecture/${cat.slug}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div className="arch-card" style={{ height: '80vh' }}>
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover"
                />

                {/* Dark overlay on hover */}
                <div className="overlay">
                  {/* Gold explore icon */}
                  <div className="explore-icon" style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    backgroundColor: '#f9b617',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                </div>

                {/* Vertical ARCHITECTURE text — left side */}
                <div className="vertical-text">ARCHITECTURE</div>

                {/* Category title — bottom */}
                <div className="card-title">{cat.label}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}