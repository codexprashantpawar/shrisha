import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/data/projects';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className={`group cursor-pointer overflow-hidden ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
        <div className="relative overflow-hidden h-64 md:h-80 flex-center bg-secondary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
          />
          
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300" />
          
          {/* Content overlay - appears on hover */}
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
            {/* Category badge */}
            <div>
              <span className="inline-block px-3 py-1 bg-primary/90 text-black text-xs uppercase tracking-wider font-semibold mb-4">
                {project.category}
              </span>
            </div>

            {/* Title and description */}
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-2 leading-tight">{project.title}</h3>
              <p className="text-sm text-text-muted mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
              
              {/* Footer with arrow */}
              <div className="flex items-center justify-between pt-4 border-t border-primary/30">
                <span className="text-xs text-text-muted">{project.year}</span>
                <ArrowUpRight size={16} className="text-primary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
