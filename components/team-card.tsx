import Image from 'next/image';
import { TeamMember } from '@/lib/data/team';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden mb-6 h-72">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="font-display font-bold text-xl mb-1">{member.name}</h3>
      <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
      <p className="text-text-muted text-sm mb-4 line-clamp-3">{member.bio}</p>
      <div className="flex flex-wrap gap-2">
        {member.specialization.map((spec) => (
          <span key={spec} className="text-xs border border-primary/30 text-primary px-2 py-1">
            {spec}
          </span>
        ))}
      </div>
    </div>
  );
}
