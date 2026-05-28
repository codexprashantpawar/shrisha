'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './logo';

const navigationLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT US' },
  { href: '/services', label: 'EXPERTISE' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1c1c1c]/83 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20 relative">

        {/* Left: Logo */}
        <Link href="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-14 absolute left-1/2 -translate-x-1/2">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-primary'
                  : 'text-white hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#1c1c1c] border-t border-white/5">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}