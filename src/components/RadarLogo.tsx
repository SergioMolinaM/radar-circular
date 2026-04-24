// src/components/RadarLogo.tsx
export function RadarLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Círculos concéntricos */}
      <circle cx="20" cy="20" r="18" stroke="var(--border-light)" strokeWidth="1" opacity="0.4" />
      <circle cx="20" cy="20" r="12" stroke="var(--border-light)" strokeWidth="1" opacity="0.3" />
      <circle cx="20" cy="20" r="6" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6" />
      {/* Punto central */}
      <circle cx="20" cy="20" r="2.5" fill="var(--accent)" />
      {/* Línea de barrido animada */}
      <line
        x1="20" y1="20" x2="20" y2="2"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 20 20"
          to="360 20 20"
          dur="4s"
          repeatCount="indefinite"
        />
      </line>
      {/* Estela del barrido */}
      <path
        d="M20 20 L20 2 A18 18 0 0 1 35.6 11.0 Z"
        fill="var(--accent)"
        opacity="0.08"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 20 20"
          to="360 20 20"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}
