// src/components/Callout.tsx
import { HelpCircle, AlertTriangle, Info } from 'lucide-react'

type CalloutVariant = 'info' | 'explainer' | 'warning'

interface CalloutProps {
  children: React.ReactNode
  variant?: CalloutVariant
  titulo?: string
}

const config: Record<CalloutVariant, {
  bg: string; border: string; icon: typeof Info; iconColor: string; textColor: string; titleColor: string
}> = {
  info: {
    bg: 'var(--accent-subtle)',
    border: 'var(--accent-border)',
    icon: Info,
    iconColor: 'var(--accent)',
    textColor: 'var(--text-secondary)',
    titleColor: 'var(--text-primary)',
  },
  explainer: {
    bg: 'var(--bg-callout)',
    border: '#dde3ea',
    icon: HelpCircle,
    iconColor: 'var(--text-callout-muted)',
    textColor: 'var(--text-callout-muted)',
    titleColor: 'var(--text-callout)',
  },
  warning: {
    bg: 'rgba(232, 168, 56, 0.08)',
    border: 'rgba(232, 168, 56, 0.3)',
    icon: AlertTriangle,
    iconColor: 'var(--amber)',
    textColor: 'var(--text-secondary)',
    titleColor: 'var(--text-primary)',
  },
}

export function Callout({ children, variant = 'explainer', titulo }: CalloutProps) {
  const c = config[variant]
  const Icon = c.icon
  return (
    <div
      className="p-4 md:p-5 rounded-xl flex gap-3"
      style={{ backgroundColor: c.bg, border: `1px solid ${c.border}` }}
    >
      <Icon size={18} className="shrink-0 mt-0.5" style={{ color: c.iconColor }} />
      <div className="space-y-1">
        {titulo && (
          <p className="text-sm font-semibold" style={{ color: c.titleColor }}>{titulo}</p>
        )}
        <div className="text-sm leading-relaxed" style={{ color: c.textColor }}>
          {children}
        </div>
      </div>
    </div>
  )
}
