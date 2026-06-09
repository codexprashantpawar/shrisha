'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const liasoningImages = [
  '/images/architecture/ARCHLIASONING/EARTHSONG.jpeg',
  '/images/architecture/ARCHLIASONING/MANGALAMMIDASCITY.jpg',
];

function Lightbox({ images, startIndex, onClose }: { images: string[]; startIndex: number; onClose: () => void }) {
  const [idx, setIdx] = useState(startIndex);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={onClose}>
      <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }} onClick={(e) => e.stopPropagation()}>
        <Image src={images[idx]} alt={`Image ${idx + 1}`} width={1200} height={800} style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain' }} />
        <div style={{ position: 'absolute', bottom: '-32px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.5)', fontSize: '12px', letterSpacing: '0.2em', fontFamily: "'Montserrat', sans-serif" }}>
          {idx + 1} / {images.length}
        </div>
      </div>
      <button onClick={onClose} style={{ position: 'fixed', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}><X size={28} /></button>
      <button onClick={(e) => { e.stopPropagation(); prev(); }} style={{ position: 'fixed', left: '20px', top: '50%', transform: 'translateY(-50%)', background: '#f9b617', border: 'none', cursor: 'pointer', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronLeft size={20} color="#000" /></button>
      <button onClick={(e) => { e.stopPropagation(); next(); }} style={{ position: 'fixed', right: '20px', top: '50%', transform: 'translateY(-50%)', background: '#f9b617', border: 'none', cursor: 'pointer', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronRight size={20} color="#000" /></button>
    </div>
  );
}

export default function LiasoningPage() {
  const [lightbox, setLightbox] = useState<{ idx: number } | null>(null);

  return (
    <>
      <style>{`
        .proj-card { position: relative; overflow: hidden; cursor: pointer; }
        .proj-card img { filter: grayscale(100%); transition: filter 0.4s, transform 0.4s; }
        .proj-card:hover img { filter: grayscale(0%); transform: scale(1.04); }
        .proj-card .proj-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0); transition: background 0.4s; display: flex; align-items: center; justify-content: center; }
        .proj-card:hover .proj-overlay { background: rgba(0,0,0,0.45); }
        .proj-icon { opacity: 0; transition: opacity 0.3s; }
        .proj-card:hover .proj-icon { opacity: 1; }
      `}</style>

      <Navigation />

      {/* HERO */}
      <section style={{ position: 'relative', height: '55vh', minHeight: '320px', backgroundColor: '#272727', overflow: 'hidden' }}>
        <Image src="/images/architecture/ARCHLIASONING/EARTHSONG.jpeg" alt="Liasoning" fill className="object-cover" style={{ opacity: 1 }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(39,39,39,0.95) 0%, rgba(39,39,39,0.7) 40%, rgba(39,39,39,0.3) 100%)' }} />
        <div style={{ position: 'absolute', top: '50%', right: '60px', transform: 'translateY(-50%)', zIndex: 10, textAlign: 'right' }}>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: '5vmin', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#fff', margin: 0, lineHeight: 1.2 }}>
            LIASONING
          </h1>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div style={{ backgroundColor: '#272727', padding: '20px 80px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = '#f9b617'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>Home</Link>
          {' / '}
          <span style={{ color: '#f9b617' }}>Liasoning</span>
        </p>
      </div>

      {/* IMAGE GRID */}
      <section style={{ backgroundColor: '#272727', padding: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 0 }}>
          {liasoningImages.map((img, i) => (
            <div key={i} className="proj-card" style={{ height: '380px' }} onClick={() => setLightbox({ idx: i })}>
              <Image src={img} alt={`Liasoning ${i + 1}`} fill className="object-cover" />
              <div className="proj-overlay">
                <div className="proj-icon" style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#f9b617', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
              </div>
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)', pointerEvents: 'none' }} />
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                padding: '20px 16px',
                fontFamily: "'Oswald', sans-serif", fontWeight: 400,
                fontSize: 'clamp(16px, 2vw, 22px)', letterSpacing: '0.15em',
                textTransform: 'uppercase', color: '#fff',
              }}>
                {i === 0 ? 'EARTHSONG' : 'MANGALAM MIDAS CITY'}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {lightbox && <Lightbox images={liasoningImages} startIndex={lightbox.idx} onClose={() => setLightbox(null)} />}
    </>
  );
}