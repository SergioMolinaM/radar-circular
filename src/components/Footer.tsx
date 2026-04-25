// src/components/Footer.tsx

export function Footer() {
  return (
    <footer className="mt-16 pt-6 pb-8 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold" style={{ color: 'var(--accent)', fontFamily: "'DM Serif Display', serif" }}>T</span>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Tercera Letra · Narrativa · Evidencia · Tecnología
          </span>
        </div>
        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
          radar-circular.cl
        </span>
      </div>
    </footer>
  )
}
