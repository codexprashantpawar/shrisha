'use client';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-12 h-12 flex-center">
        {/* Main golden circle */}
        <div className="w-10 h-10 rounded-full bg-primary flex-center relative overflow-hidden">
          {/* Vertical lines pattern */}
          <svg
            viewBox="0 0 40 40"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <g opacity="0.3" stroke="rgb(10, 10, 10)" strokeWidth="1">
              <line x1="8" y1="8" x2="8" y2="32" />
              <line x1="14" y1="8" x2="14" y2="32" />
              <line x1="20" y1="8" x2="20" y2="32" />
              <line x1="26" y1="8" x2="26" y2="32" />
              <line x1="32" y1="8" x2="32" y2="32" />
            </g>
            {/* Center "S" */}
            <text
              x="20"
              y="28"
              textAnchor="middle"
              fontSize="24"
              fontWeight="700"
              fill="rgb(10, 10, 10)"
              fontFamily="'Playfair Display', serif"
            >
              S
            </text>
          </svg>
        </div>
      </div>
      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-xs font-bold tracking-widest text-primary">SHRISHA</span>
        <span className="text-xs tracking-widest text-text-muted">ARCHITECTS</span>
      </div>
    </div>
  );
}
