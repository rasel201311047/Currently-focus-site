const SEGMENTS = [
  { color: "var(--accent)", active: true },
  { color: "var(--border)", active: false },
  { color: "var(--accent-soft)", active: false },
  { color: "var(--border)", active: false },
  { color: "var(--accent-soft)", active: false },
  { color: "var(--border)", active: false },
  { color: "var(--accent)", active: false },
  { color: "var(--border)", active: false },
];

export default function TimeRing() {
  const r = 108;
  const circumference = 2 * Math.PI * r;
  const gap = 10;
  const segLength = circumference / SEGMENTS.length - gap;

  return (
    <svg
      viewBox="0 0 260 260"
      className="h-full w-full"
      role="img"
      aria-label="A circular timer split into colored time blocks"
    >
      <g transform="translate(130,130) rotate(-90)">
        {SEGMENTS.map((seg, i) => (
          <circle
            key={i}
            r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth={seg.active ? 10 : 7}
            strokeLinecap="round"
            strokeDasharray={`${segLength} ${circumference - segLength}`}
            strokeDashoffset={-(i * (segLength + gap))}
            opacity={seg.active ? 1 : 0.85}
          />
        ))}
      </g>
      <circle r="72" cx="130" cy="130" fill="var(--surface)" stroke="var(--border)" />
      <g>
        <rect x="119" y="104" width="8" height="34" rx="3" fill="var(--ink)" />
        <rect x="133" y="104" width="8" height="34" rx="3" fill="var(--ink)" />
      </g>
      <text
        x="130"
        y="164"
        textAnchor="middle"
        fill="var(--ink-muted)"
        fontSize="13"
        fontFamily="var(--font-body)"
      >
        18 : 24 left
      </text>
    </svg>
  );
}
