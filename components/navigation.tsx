'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './logo';

const expertiseLinks = [
  { href: '/architecture', label: 'ARCHITECTURE' },
  { href: '/liasoning', label: 'LIASONING' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isExpertiseActive = pathname === '/architecture' || pathname === '/liasoning';

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setExpertiseOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const linkStyle = (href: string) => ({
    fontFamily: "'Oswald', sans-serif",
    fontSize: '13px',
    fontWeight: 400,
    letterSpacing: '0.32em',
    textTransform: 'uppercase' as const,
    color: pathname === href ? '#f9b617' : 'rgba(255,255,255,0.75)',
    transition: 'color 0.3s',
    textDecoration: 'none',
    whiteSpace: 'nowrap' as const,
  });

  return (
    <nav
      className="fixed top-0 w-full z-50"
      style={{ backgroundColor: '#272727', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
     <div className="w-full px-6 lg:px-10 flex items-center h-[60px]" style={{ gap: '0' }}>

        {/* Left: Logo */}
        <Link href="/" className="flex-shrink-0" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo />
        </Link>

        {/* Right: Desktop Navigation */}
      {/* Right: Desktop Navigation */}
        <div className="hidden md:flex items-center ml-auto" style={{ gap: '48px' }}>

          {/* HOME */}
          <Link
            href="/"
            style={linkStyle('/')}
            onMouseEnter={(e) => { if (pathname !== '/') e.currentTarget.style.color = '#f9b617'; }}
            onMouseLeave={(e) => { if (pathname !== '/') e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
          >
            HOME
          </Link>

          {/* ABOUT US */}
          <Link
            href="/about"
            style={linkStyle('/about')}
            onMouseEnter={(e) => { if (pathname !== '/about') e.currentTarget.style.color = '#f9b617'; }}
            onMouseLeave={(e) => { if (pathname !== '/about') e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
          >
            ABOUT US
          </Link>

          {/* EXPERTISE dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setExpertiseOpen(!expertiseOpen)}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: '13px',
                fontWeight: 400,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: isExpertiseActive ? '#f9b617' : expertiseOpen ? '#f9b617' : 'rgba(255,255,255,0.75)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'color 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                whiteSpace: 'nowrap',
              }}
            >
              EXPERTISE
              <ChevronDown
                size={12}
                style={{
                  transform: expertiseOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s',
                }}
              />
            </button>

            {/* Dropdown menu */}
            {expertiseOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 16px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#272727',
                  border: '1px solid rgba(255,255,255,0.08)',
                  minWidth: '170px',
                  zIndex: 100,
                }}
              >
                {expertiseLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setExpertiseOpen(false)}
                    style={{
                      display: 'block',
                      padding: '12px 20px',
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: '12px',
                      fontWeight: 400,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: pathname === link.href ? '#f9b617' : 'rgba(255,255,255,0.65)',
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#f9b617'}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = pathname === link.href
                        ? '#f9b617'
                        : 'rgba(255,255,255,0.65)';
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CONTACT */}
          <Link
            href="/contact"
            style={linkStyle('/contact')}
            onMouseEnter={(e) => { if (pathname !== '/contact') e.currentTarget.style.color = '#f9b617'; }}
            onMouseLeave={(e) => { if (pathname !== '/contact') e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
          >
            CONTACT
          </Link>

        </div>

        {/* Mobile Menu Button */}
       {/* Mobile Menu Button */}
<button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden text-white ml-auto"
  aria-label="Toggle menu"
>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#272727] border-t border-white/10">
          <div className="px-6 py-8 flex flex-col gap-6">

            <Link href="/" onClick={() => setIsOpen(false)}
              style={{ fontFamily: "'Oswald', sans-serif", fontSize: '13px', letterSpacing: '0.32em', textTransform: 'uppercase', color: pathname === '/' ? '#f9b617' : 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
              HOME
            </Link>

            <Link href="/about" onClick={() => setIsOpen(false)}
              style={{ fontFamily: "'Oswald', sans-serif", fontSize: '13px', letterSpacing: '0.32em', textTransform: 'uppercase', color: pathname === '/about' ? '#f9b617' : 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
              ABOUT US
            </Link>

            {/* Mobile Expertise */}
            <div>
              <button
                onClick={() => setMobileExpertiseOpen(!mobileExpertiseOpen)}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: '13px',
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: isExpertiseActive ? '#f9b617' : 'rgba(255,255,255,0.6)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                EXPERTISE
                <ChevronDown size={12} style={{ transform: mobileExpertiseOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
              </button>
              {mobileExpertiseOpen && (
                <div style={{ paddingLeft: '16px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {expertiseLinks.map((link) => (
                    <Link key={link.href} href={link.href}
                      onClick={() => { setIsOpen(false); setMobileExpertiseOpen(false); }}
                      style={{ fontFamily: "'Oswald', sans-serif", fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', color: pathname === link.href ? '#f9b617' : 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" onClick={() => setIsOpen(false)}
              style={{ fontFamily: "'Oswald', sans-serif", fontSize: '13px', letterSpacing: '0.32em', textTransform: 'uppercase', color: pathname === '/contact' ? '#f9b617' : 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
              CONTACT
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}