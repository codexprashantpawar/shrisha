import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import SectionHeader from '@/components/section-header';
import { mediaFeatures, clients } from '@/lib/data/services';
import Image from 'next/image';

export default function Achievements() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-20 md:pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-semibold mb-4 inline-block">
            Recognition & Awards
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">
            Our <span className="text-primary">ACHIEVEMENTS</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Celebrating excellence, innovation, and transformative design through the years.
          </p>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 md:py-32">
        <div className="container-custom">
          <SectionHeader
            title="Awards & RECOGNITION"
            subtitle="Industry acknowledgment of our design excellence"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                year: '2023',
                title: 'Design Excellence Award',
                category: 'Residential',
                description: 'Recognition for innovative residential architecture and sustainable design practices.',
              },
              {
                year: '2021',
                title: 'Best Commercial Design',
                category: 'Commercial',
                description: 'Award for transformative commercial space design and urban integration.',
              },
              {
                year: '2019',
                title: 'Sustainability Leadership',
                category: 'Green Building',
                description: 'Recognition for commitment to environmental responsibility and green architecture.',
              },
            ].map(({ year, title, category, description }) => (
              <div key={title} className="group p-8 border border-border-color hover:border-primary/50 transition-colors">
                <div className="text-4xl font-display font-bold text-primary mb-3">{year}</div>
                <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
                <p className="text-primary text-xs uppercase tracking-wider mb-3 font-semibold">{category}</p>
                <p className="text-text-muted text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            title="Media PRESENCE"
            subtitle="Featured in leading architectural and lifestyle publications"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaFeatures.map((feature) => (
              <div key={feature.id} className="group overflow-hidden border border-border-color hover:border-primary/50 transition-colors">
                <div className="relative h-64 overflow-hidden bg-secondary">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-primary text-xs uppercase tracking-wider font-semibold mb-2">
                    {feature.month} {feature.year}
                  </p>
                  <h3 className="font-display font-bold text-xl mb-1">{feature.title}</h3>
                  <p className="text-text-muted text-sm mb-4">{feature.subtitle}</p>
                  <p className="text-text-muted text-sm line-clamp-3">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 md:py-32">
        <div className="container-custom">
          <SectionHeader
            title="Trusted By LEADING DEVELOPERS"
            subtitle="Building exceptional spaces with industry's most respected names"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="p-6 border border-border-color hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center"
              >
                <p className="font-display font-bold text-lg mb-1">{client.name}</p>
                <p className="text-text-muted text-xs uppercase tracking-wider">{client.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-primary/10 to-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '15+', label: 'Awards Won' },
              { number: '120+', label: 'Satisfied Clients' },
              { number: '14', label: 'Years Experience' },
            ].map(({ number, label }) => (
              <div key={label} className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-2">
                  {number}
                </div>
                <p className="text-text-muted text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
