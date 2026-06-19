'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, ArrowRight } from 'lucide-react';

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Contact() {
  const [enquiry, setEnquiry] = useState({ name: '', email: '', phone: '', message: '' });
  const [career, setCareer] = useState({ name: '', email: '', phone: '', message: '', file: null as File | null });
  useScrollReveal();

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    setEnquiry({ name: '', email: '', phone: '', message: '' });
  };

  const handleCareer = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted! We will review your profile.');
    setCareer({ name: '', email: '', phone: '', message: '', file: null });
  };

  const inputClass = "w-full px-5 py-4 bg-[#1a1a1a] border border-white/8 text-white/80 text-[13px] placeholder-white/25 focus:outline-none focus:border-primary/50 transition-colors duration-300";

  return (
    <>
      <style>{`
        .reveal { opacity:0; transform:translateY(30px); transition:opacity 0.8s cubic-bezier(0.22,1,0.36,1),transform 0.8s cubic-bezier(0.22,1,0.36,1); }
        .reveal.revealed { opacity:1; transform:translateY(0); }
        .d1{transition-delay:.1s}.d2{transition-delay:.2s}.d3{transition-delay:.3s}
        input:-webkit-autofill, textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #1a1a1a inset !important;
          -webkit-text-fill-color: rgba(255,255,255,0.8) !important;
        }
      `}</style>

      <Navigation />

      {/* ── SECTION 1: MAP + CONTACT INFO ── */}
      <section className="relative bg-black pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: '520px' }}>

          {/* Map */}
          <div className="relative w-full h-[400px] md:h-auto">
           <iframe
              src="https://www.google.com/maps?q=Rose+Icon+Amenity+Building,+Kunal+Icon+Road,+Pimple+Saudagar,+Pune,+Maharashtra+411027&output=embed"
              width="100%" height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.143646058626!2d73.78222705541994!3d18.594950200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8e0b174ca15%3A0x37fd8f8bb33a6cf0!2sRose%20Icon%20Co-Operative%20Housing%20Society!5e0!3m2!1sen!2sin!4v1779705187613!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          {/* Contact Info */}
          <div className="bg-[#0d0d0d] px-12 py-16 flex flex-col justify-center">
            <div className="space-y-10">

              {/* Phone */}
              <div className="reveal flex items-start gap-5">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.35em] uppercase text-primary mb-2">Phone</p>
                  <a href="tel:+9307882868" className="text-white/70 text-[15px] tracking-wide hover:text-primary transition-colors">
                    +91 9307882868
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="reveal d1 flex items-start gap-5">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.35em] uppercase text-primary mb-2">Email</p>
                  <a href="mailto:info@shrisha.in" className="text-white/70 text-[14px] hover:text-primary transition-colors block">
                  architectvilasyele@gmail.com
                  </a>
                 
                </div>
              </div>

              {/* Address */}
              <div className="reveal d2 flex items-start gap-5">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.35em] uppercase text-primary mb-2">Address</p>
                  <p className="text-white/70 text-[14px] leading-relaxed">
                    Shop No-112 &amp; 113, Rose Icon Amenity Building, Kunal Icon Road, Pimple Saudagar, Pune, Pimpri-Chinchwad, Maharashtra, 411027
                  </p>
                </div>
              </div>

              {/* Get Direction */}
              <div className="reveal d3">
                <a
                 href="https://www.google.com/maps/dir/?api=1&destination=Rose+Icon+Amenity+Building,+Kunal+Icon+Road,+Pimple+Saudagar,+Pune,+Maharashtra+411027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3 bg-primary text-black text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-primary/85 transition-colors duration-300"
                >
                  <MapPin size={14} /> Get Direction
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: GET IN TOUCH FORM ── */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <h2 className="reveal text-center uppercase tracking-[0.35em] text-4xl md:text-5xl font-bold mb-14">
            Get <span className="text-primary">In Touch</span>
          </h2>

          <form onSubmit={handleEnquiry}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
              <div className="space-y-2">
                <input
                  type="text" placeholder="Name *" required
                  value={enquiry.name}
                  onChange={e => setEnquiry(p => ({ ...p, name: e.target.value }))}
                  className={inputClass}
                />
                <input
                  type="email" placeholder="Email *" required
                  value={enquiry.email}
                  onChange={e => setEnquiry(p => ({ ...p, email: e.target.value }))}
                  className={inputClass}
                />
                <input
                  type="tel" placeholder="Phone *" required
                  value={enquiry.phone}
                  onChange={e => setEnquiry(p => ({ ...p, phone: e.target.value }))}
                  className={inputClass}
                />
              </div>
              <textarea
                placeholder="Message" rows={7}
                value={enquiry.message}
                onChange={e => setEnquiry(p => ({ ...p, message: e.target.value }))}
                className={`${inputClass} resize-none`}
              />
            </div>
            <div className="text-center mt-8">
              <button type="submit"
                className="inline-flex items-center gap-3 px-12 py-4 bg-primary text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-primary/85 transition-colors duration-300">
                Send Message <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ── SECTION 3: FOR CAREERS FORM ── */}
      <section className="py-20 bg-[#0d0d0d] border-t border-primary/10">
        <div className="container-custom">
          <h2 className="reveal text-center uppercase tracking-[0.35em] text-4xl md:text-5xl font-bold mb-14">
            For <span className="text-primary">Careers</span>
          </h2>

          <form onSubmit={handleCareer}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
              <div className="space-y-2">
                <input
                  type="text" placeholder="Name *" required
                  value={career.name}
                  onChange={e => setCareer(p => ({ ...p, name: e.target.value }))}
                  className={inputClass}
                />
                <input
                  type="email" placeholder="Email *" required
                  value={career.email}
                  onChange={e => setCareer(p => ({ ...p, email: e.target.value }))}
                  className={inputClass}
                />
                <input
                  type="tel" placeholder="Phone *" required
                  value={career.phone}
                  onChange={e => setCareer(p => ({ ...p, phone: e.target.value }))}
                  className={inputClass}
                />
                {/* File upload */}
                <label className="block w-full px-5 py-4 bg-[#1a1a1a] border border-white/8 text-white/25 text-[13px] cursor-pointer hover:border-primary/30 transition-colors">
                  <input type="file" className="hidden"
                    onChange={e => setCareer(p => ({ ...p, file: e.target.files?.[0] || null }))} />
                  {career.file ? career.file.name : 'Upload Resume / Portfolio'}
                </label>
              </div>
              <textarea
                placeholder="Message" rows={7}
                value={career.message}
                onChange={e => setCareer(p => ({ ...p, message: e.target.value }))}
                className={`${inputClass} resize-none`}
              />
            </div>
            <div className="text-center mt-8">
              <button type="submit"
                className="inline-flex items-center gap-3 px-12 py-4 bg-primary text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-primary/85 transition-colors duration-300">
                Submit Application <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Social */}
      <section className="py-10 bg-[#0a0a0a] border-t border-primary/10">
        <div className="container-custom flex items-center justify-center gap-4">
          {[
            { icon: Facebook, label: 'Facebook' },
            { icon: Instagram, label: 'Instagram' },
            { icon: Linkedin, label: 'LinkedIn' },
          ].map(({ icon: Icon, label }) => (
            <a key={label} href="#"
              className="w-10 h-10 border border-primary/20 flex items-center justify-center text-white/30 hover:border-primary hover:text-primary transition-all duration-300">
              <Icon size={15} />
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}