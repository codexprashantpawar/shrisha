// 'use client';

// import Navigation from '@/components/navigation';
// import Footer from '@/components/footer';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// const liasoningImages = [
//   '/images/architecture/ARCHLIASONING/EARTHSONG.jpeg',
//   '/images/architecture/ARCHLIASONING/MANGALAMMIDASCITY.jpg',
// ];

// const liasoningDetails = [
//   {
//     title: 'EARTHSONG AT RAVET',
//     plotArea: '20500 SQM.',
//     builtUpArea: '1562340 SQFT',
//     tenaments: '710 FLATS & COMMERCIAL SHOPS',
//   },
//   {
//     title: 'MIDAS CITY AT CHOVISAWADI',
//     plotArea: '25200 SQM.',
//     builtUpArea: '1240000 SQFT',
//     tenaments: '991 FLATS & COMMERCIAL SHOPS',
//   },
// ];

// function Lightbox({ images, startIndex, onClose }: { images: string[]; startIndex: number; onClose: () => void }) {
//   const [idx, setIdx] = useState(startIndex);
//   const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
//   const next = () => setIdx((i) => (i + 1) % images.length);
//   const details = liasoningDetails[idx];

//   return (
//     <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={onClose}>
//       <div
//         style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh', display: 'flex', alignItems: 'center', gap: '40px' }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Details — left side */}
//         <div style={{ maxWidth: '320px', textAlign: 'left' }}>
//           <h3 style={{
//             fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: '22px',
//             letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px',
//           }}>
//             {details.title}
//           </h3>
//           <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.8' }}>
//             <p style={{ marginBottom: '6px' }}><span style={{ color: '#f9b617' }}>Plot Area:</span> {details.plotArea}</p>
//             <p style={{ marginBottom: '6px' }}><span style={{ color: '#f9b617' }}>Built-up Area:</span> {details.builtUpArea}</p>
//             <p style={{ marginBottom: 0 }}><span style={{ color: '#f9b617' }}>Tenaments:</span> {details.tenaments}</p>
//           </div>
//         </div>

//         {/* Image — right side */}
//         <div style={{ position: 'relative' }}>
//           <Image src={images[idx]} alt={`Image ${idx + 1}`} width={1200} height={800} style={{ maxWidth: '60vw', maxHeight: '80vh', objectFit: 'contain' }} />
//           <div style={{ position: 'absolute', bottom: '-32px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.5)', fontSize: '12px', letterSpacing: '0.2em', fontFamily: "'Montserrat', sans-serif" }}>
//             {idx + 1} / {images.length}
//           </div>
//         </div>
//       </div>
//       <button onClick={onClose} style={{ position: 'fixed', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}><X size={28} /></button>
//       <button onClick={(e) => { e.stopPropagation(); prev(); }} style={{ position: 'fixed', left: '20px', top: '50%', transform: 'translateY(-50%)', background: '#f9b617', border: 'none', cursor: 'pointer', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronLeft size={20} color="#000" /></button>
//       <button onClick={(e) => { e.stopPropagation(); next(); }} style={{ position: 'fixed', right: '20px', top: '50%', transform: 'translateY(-50%)', background: '#f9b617', border: 'none', cursor: 'pointer', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronRight size={20} color="#000" /></button>
//     </div>
//   );
// }

// export default function LiasoningPage() {
//   const [lightbox, setLightbox] = useState<{ idx: number } | null>(null);

//   return (
//     <>
//       <style>{`
//         .proj-card { position: relative; overflow: hidden; cursor: pointer; }
//         .proj-card img { filter: grayscale(100%); transition: filter 0.4s, transform 0.4s; }
//         .proj-card:hover img { filter: grayscale(0%); transform: scale(1.04); }
//         .proj-card .proj-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0); transition: background 0.4s; display: flex; align-items: center; justify-content: center; }
//         .proj-card:hover .proj-overlay { background: rgba(0,0,0,0.45); }
//         .proj-icon { opacity: 0; transition: opacity 0.3s; }
//         .proj-card:hover .proj-icon { opacity: 1; }
//       `}</style>

//       <Navigation />

//       {/* HERO */}
//       <section style={{ position: 'relative', height: '55vh', minHeight: '320px', backgroundColor: '#272727', overflow: 'hidden' }}>
//         <Image src="/images/architecture/ARCHLIASONING/EARTHSONG.jpeg" alt="Liasoning" fill className="object-cover" style={{ opacity: 1 }} priority />
//         <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(39,39,39,0.95) 0%, rgba(39,39,39,0.7) 40%, rgba(39,39,39,0.3) 100%)' }} />
//         <div style={{ position: 'absolute', top: '50%', right: '60px', transform: 'translateY(-50%)', zIndex: 10, textAlign: 'right' }}>
//           <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: '5vmin', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#fff', margin: 0, lineHeight: 1.2 }}>
//             LIASONING
//           </h1>
//         </div>
//       </section>

//       {/* BREADCRUMB */}
//       <div style={{ backgroundColor: '#272727', padding: '20px 80px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
//         <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
//           <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = '#f9b617'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>Home</Link>
//           {' / '}
//           <span style={{ color: '#f9b617' }}>Liasoning</span>
//         </p>
//       </div>

//       {/* IMAGE GRID */}
//       <section style={{ backgroundColor: '#272727', padding: '0' }}>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 0 }}>
//           {liasoningImages.map((img, i) => (
//             <div key={i} className="proj-card" style={{ height: '380px' }} onClick={() => setLightbox({ idx: i })}>
//               <Image src={img} alt={`Liasoning ${i + 1}`} fill className="object-cover" />
//               <div className="proj-overlay">
//                 <div className="proj-icon" style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#f9b617', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
//                     <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                     <polyline points="15 3 21 3 21 9" />
//                     <line x1="10" y1="14" x2="21" y2="3" />
//                   </svg>
//                 </div>
//               </div>
//              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)', pointerEvents: 'none' }} />
//               <div style={{
//                 position: 'absolute', top: 0, left: 0, right: 0,
//                 padding: '20px 16px',
//                 fontFamily: "'Oswald', sans-serif", fontWeight: 400,
//                 fontSize: 'clamp(16px, 2vw, 22px)', letterSpacing: '0.15em',
//                 textTransform: 'uppercase', color: '#fff',
//               }}>
//                 {i === 0 ? 'EARTHSONG AT RAVET' : 'MIDAS CITY AT CHOVISAWADI'}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />

//       {lightbox && <Lightbox images={liasoningImages} startIndex={lightbox.idx} onClose={() => setLightbox(null)} />}
//     </>
//   );
// }


'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// ============================================================
// NEW PROJECT ADD KARNE KE LIYE: neeche array mein ek naya
// { ... } object copy-paste karo aur title, areas, images badlo.
// Grid cover = images[0]. Baaki sab apne aap update hoga.
// ============================================================
const liasoningDetails = [
  {
    title: 'AARAMBH AT DUDULGAON',
    plotArea: '89340 SQFT.',
    builtUpArea: '180000 SQFT',
    tenaments: '241 FLATS',
    images: [
      '/images/architecture/ARCHLIASONING/AARAMBH/1.jpg',
      '/images/architecture/ARCHLIASONING/AARAMBH/2.jpg',
      '/images/architecture/ARCHLIASONING/AARAMBH/3.jpg',
      '/images/architecture/ARCHLIASONING/AARAMBH/4.jpg',
      '/images/architecture/ARCHLIASONING/AARAMBH/5.jpg',
      '/images/architecture/ARCHLIASONING/AARAMBH/6.jpg',
      '/images/architecture/ARCHLIASONING/AARAMBH/7.jpg',
    ],
  },
 {
  title: 'BRAND SQUARE AT PIMPLE SAUDAGAR',
  plotArea: '170000 SQFT.',
  builtUpArea: '63000 SQFT',
  tenaments: 'COMMERCIAL BUILDING',
  images: [
    '/images/architecture/ARCHLIASONING/BRAND SQUARE/1.jpeg',
    '/images/architecture/ARCHLIASONING/BRAND SQUARE/2.jpeg',
  ],
},

{
  title: 'DREAMSONG AT MAMURDI',
  plotArea: '94725 SQFT.',
  builtUpArea: '545000 SQFT',
  tenaments: '291 FLATS',
  images: [
    '/images/architecture/ARCHLIASONING/DREAMSONG/1.jpeg',
    '/images/architecture/ARCHLIASONING/DREAMSONG/2.jpeg',
    '/images/architecture/ARCHLIASONING/DREAMSONG/3.jpeg',
    '/images/architecture/ARCHLIASONING/DREAMSONG/4.jpeg',
  ],
},

{
  title: 'EARTHSONG AT RAVET',
  plotArea: '220660 SQFT.',
  builtUpArea: '1562340 SQFT',
  tenaments: '710 FLATS & COMMERCIAL SHOPS',
  images: [
    '/images/architecture/ARCHLIASONING/EARTHSONG/01.jpeg',
    '/images/architecture/ARCHLIASONING/EARTHSONG/02.jpeg',
    '/images/architecture/ARCHLIASONING/EARTHSONG/03.jpeg',
    '/images/architecture/ARCHLIASONING/EARTHSONG/04.jpeg',
  ],
},

{
  title: 'HOMES AT DUDULGAON',
  plotArea: '76617 SQFT.',
  builtUpArea: '182000 SQFT',
  tenaments: '272 FLATS',
  images: [
    '/images/architecture/ARCHLIASONING/MANGALAM HOMES/1.jpg',
    '/images/architecture/ARCHLIASONING/MANGALAM HOMES/2.jpg',
    '/images/architecture/ARCHLIASONING/MANGALAM HOMES/3.jpg',
    '/images/architecture/ARCHLIASONING/MANGALAM HOMES/4.jpg',
  ],
},

{
  title: 'MARVEL AT CHARHOLI',
  plotArea: '130245 SQFT.',
  builtUpArea: '607000 SQFT',
  tenaments: '566 FLATS',
  images: [
    '/images/architecture/ARCHLIASONING/MANGALAM MARVEL/01.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MARVEL/02.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MARVEL/03.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MARVEL/04.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MARVEL/05.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MARVEL/06.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MARVEL/07.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MARVEL/08.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MARVEL/09.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MARVEL/10.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MARVEL/11.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MARVEL/12.jpeg',
  ],
},
{
  title: 'MIDAS CITY AT CHOVISAWADI',
  plotArea: '271250 SQFT.',
  builtUpArea: '1240000 SQFT',
  tenaments: '991 FLATS & COMMERCIAL SHOPS',
  images: [
    '/images/architecture/ARCHLIASONING/MANGALAM MIDAS CITY/01.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIDAS CITY/02.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIDAS CITY/03.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIDAS CITY/04.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIDAS CITY/05.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIDAS CITY/06.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIDAS CITY/07.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIDAS CITY/08.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIDAS CITY/09.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIDAS CITY/10.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIDAS CITY/11.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIDAS CITY/12.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIDAS CITY/13.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIDAS CITY/14.jpeg',
  ],
},
{
  title: 'MIRAYA AT MOSHI-BORHADEWADI',
  plotArea: '94725 SQFT.',
  builtUpArea: '497000 SQFT',
  tenaments: '495 FLATS',
  images: [
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/1.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/2.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/3.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/4.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/5.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/6.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/7.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/8.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/9.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/10.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/11.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/12.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/13.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/14.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/15.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/16.jpeg',
    '/images/architecture/ARCHLIASONING/MANGALAM MIRAYA/17.jpeg',
  ],
},

{
  title: 'MOMENTO AT MOSHI',
  plotArea: '133473 SQFT.',
  builtUpArea: '775300 SQFT',
  tenaments: '628 FLATS',
  images: Array.from({ length: 43 }, (_, i) => `/images/architecture/ARCHLIASONING/MANGALAM MOMENTO/${i + 1}.jpg`),
},
{
  title: 'SNBP UNIVERSITY AT CHIKHALI',
  plotArea: '180012 SQFT.',
  builtUpArea: '450000 SQFT',
  tenaments: 'EDUCATIONAL BUILDING',
  images: Array.from({ length: 12 }, (_, i) => `/images/architecture/ARCHLIASONING/SNBP/${i + 1}.jpeg`),
},
{
  title: 'ETERNIA AT CHARHOLI',
  plotArea: '41980 SQFT.',
  builtUpArea: '155000 SQFT',
  tenaments: '194 FLATS & COMMERCIAL SHOPS',
  images: Array.from({ length: 7 }, (_, i) => `/images/architecture/ARCHLIASONING/TIRUPATI ETERNIA/${i + 1}.jpeg`),
},
];

// grid cover = har project ki pehli image
const liasoningImages = liasoningDetails.map((d) => d.images[0]);

function Lightbox({ projectIdx, onClose }: { projectIdx: number; onClose: () => void }) {
  const details = liasoningDetails[projectIdx];
  const images = details.images;
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={onClose}>
      <div
        style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh', display: 'flex', alignItems: 'center', gap: '40px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Details — left side */}
        <div style={{ maxWidth: '320px', textAlign: 'left' }}>
          <h3 style={{
            fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: '22px',
            letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px',
          }}>
            {details.title}
          </h3>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '6px' }}><span style={{ color: '#f9b617' }}>Plot Area:</span> {details.plotArea}</p>
            <p style={{ marginBottom: '6px' }}><span style={{ color: '#f9b617' }}>Built-up Area:</span> {details.builtUpArea}</p>
            <p style={{ marginBottom: 0 }}><span style={{ color: '#f9b617' }}>Tenaments:</span> {details.tenaments}</p>
          </div>
        </div>

        {/* Image — right side */}
        <div style={{ position: 'relative' }}>
          <Image src={images[idx]} alt={`Image ${idx + 1}`} width={1200} height={800} style={{ maxWidth: '60vw', maxHeight: '80vh', objectFit: 'contain' }} />
          <div style={{ position: 'absolute', bottom: '-32px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.5)', fontSize: '12px', letterSpacing: '0.2em', fontFamily: "'Montserrat', sans-serif" }}>
            {idx + 1} / {images.length}
          </div>
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
        <Image src={liasoningDetails[0].images[0]} alt="Liasoning" fill className="object-cover" style={{ opacity: 1 }} priority />
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
                {liasoningDetails[i].title}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {lightbox && <Lightbox projectIdx={lightbox.idx} onClose={() => setLightbox(null)} />}
    </>
  );
}