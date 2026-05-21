interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: boolean;
}

export default function SectionHeader({ title, subtitle, accent = true }: SectionHeaderProps) {
  const parts = title.split(' ');
  const lastWord = parts.pop();

  return (
    <div className="section-header">
      <h2 className="section-title">
        {parts.length > 0 && `${parts.join(' ')} `}
        {accent && lastWord && <span className="text-primary">{lastWord}</span>}
        {!accent && lastWord}
      </h2>
      {subtitle && (
        <p className="section-subtitle max-w-2xl mx-auto mt-6">
          {subtitle}
        </p>
      )}
    </div>
  );
}
