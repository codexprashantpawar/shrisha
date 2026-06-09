'use client';

import Link from 'next/link';
import { Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#272727', borderTop: '1px solid rgba(255,255,255,0.12)' }}>

      {/* Main footer columns */}
      <div className="container-custom" style={{ padding: '60px 0 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
        }}>

          {/* Col 1 — Contact Us */}
          <div>
            <h5 style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 400,
              fontSize: '15px',
              letterSpacing: '0.08em',
              color: '#fff',
              marginBottom: '20px',
              marginTop: 0,
            }}>
              Contact Us
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  fontSize: '13px',
                  lineHeight: '1.65',
                  color: 'rgba(255,255,255,0.5)',
                  margin: 0,
                }}>
                  Pune, Maharashtra, India
                </p>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="tel:+919307882668" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  lineHeight: '1.65',
                }}>
                  <Phone size={12} style={{ flexShrink: 0 }} />
                  +91 93078 82668
                </a>
              </li>
              <li>
                <a href="mailto:architecttilasyele@gmail.com" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  lineHeight: '1.65',
                }}>
                  <Mail size={12} style={{ flexShrink: 0 }} />
                  architecttilasyele@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h5 style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 400,
              fontSize: '15px',
              letterSpacing: '0.08em',
              color: '#fff',
              marginBottom: '20px',
              marginTop: 0,
            }}>
              Quick Links
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About us', href: '/about' },
                { label: 'Achievements', href: '/achievements' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href} style={{ marginBottom: '10px' }}>
                  <Link href={href} style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    lineHeight: '1.65',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f9b617'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Expertise */}
          <div>
            <h5 style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 400,
              fontSize: '15px',
              letterSpacing: '0.08em',
              color: '#fff',
              marginBottom: '20px',
              marginTop: 0,
            }}>
              Expertise
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'Architecture', href: '/projects?category=architecture' },
                { label: 'Interior', href: '/projects?category=interior' },
                { label: 'Liasoning', href: '/projects?category=liasoning' },
              ].map(({ label, href }) => (
                <li key={href} style={{ marginBottom: '10px' }}>
                  <Link href={href} style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    lineHeight: '1.65',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f9b617'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Follow Us */}
          <div>
            <h5 style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 400,
              fontSize: '15px',
              letterSpacing: '0.08em',
              color: '#fff',
              marginBottom: '20px',
              marginTop: 0,
            }}>
              Follow us
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f9b617'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                  <Instagram size={18} />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container-custom" style={{ padding: '18px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: '12px',
              color: 'rgba(255,255,255,0.3)',
              margin: 0,
              lineHeight: '1.65',
            }}>
              © 2024 Shrisha Architectural Consultancy | All Rights Reserved.
            </p>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: '12px',
              color: 'rgba(255,255,255,0.2)',
              margin: 0,
              lineHeight: '1.65',
            }}>
              Designed &amp; Developed by Team Segments..
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}