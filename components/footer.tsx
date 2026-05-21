'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-primary/10">

      {/* Top CTA strip */}
      <div className="border-b border-primary/10 py-10">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] tracking-[0.35em] text-primary uppercase mb-1">Ready to Build?</p>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
              Let's Create Something <span className="text-primary">Extraordinary</span>
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-3 border border-primary text-primary text-[11px] tracking-[0.25em] uppercase hover:bg-primary hover:text-black transition-colors duration-300 flex-shrink-0"
          >
            Start a Project <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display font-bold text-2xl tracking-wider text-white mb-4">
              SH<span className="text-primary">.</span>RISHA
            </div>
            <p className="text-white/35 text-[12px] leading-relaxed mb-6">
              Premium architectural consultancy specializing in innovative design that blends aesthetics with functionality.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: 'facebook' },
                { icon: Instagram, label: 'instagram' },
                { icon: Linkedin, label: 'linkedin' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href={`https://${label}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-primary/20 flex items-center justify-center text-white/30 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-primary mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Projects', href: '/projects' },
                { label: 'Achievements', href: '/achievements' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-white/35 hover:text-primary text-[12px] tracking-wide transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-3 h-px bg-primary/30 group-hover:w-5 group-hover:bg-primary transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-primary mb-5">Services</h4>
            <ul className="space-y-3">
              {['Architecture Design', 'Interior Design', 'Sustainable Design', 'Project Management', 'Consultation'].map((s) => (
                <li key={s}>
                  <span className="text-white/35 text-[12px] tracking-wide flex items-center gap-2 group">
                    <span className="w-3 h-px bg-primary/20" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-primary mb-5">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-start gap-3 text-white/35 hover:text-primary text-[12px] transition-colors duration-300 group">
                <Phone size={13} className="mt-0.5 flex-shrink-0 group-hover:text-primary" />
                +91 98765 43210
              </a>
              <a href="mailto:info@shrisha.in" className="flex items-start gap-3 text-white/35 hover:text-primary text-[12px] transition-colors duration-300 group">
                <Mail size={13} className="mt-0.5 flex-shrink-0 group-hover:text-primary" />
                info@shrisha.in
              </a>
              <p className="flex items-start gap-3 text-white/35 text-[12px]">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                Pune, Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[11px] tracking-[0.15em]">
            © 2024 Shrisha Architectural Consultancy. All rights reserved.
          </p>
          <p className="text-white/15 text-[10px] tracking-[0.2em] uppercase">
            Pune · Maharashtra · India
          </p>
        </div>
      </div>
    </footer>
  );
}