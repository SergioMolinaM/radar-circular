import DataTypeBadge from './DataTypeBadge'

function KPICard({ label, value, unit, context, dataType }) {
  return (
    <div className="p-6 bg-white rounded-lg border border-cafe/10">
      <DataTypeBadge type={dataType} />
      <p className="mt-3 font-sans text-xs uppercase tracking-wider text-cafe/60">
        {label}
      </p>
      <p className="mt-1">
        <span className="font-serif text-4xl text-cafe">{value}</span>
        {unit && <span className="font-serif text-xl text-cafe/60 ml-1">{unit}</span>}
      </p>
      {context && (
        <p className="mt-2 font-sans text-xs text-cafe/60">{context}</p>
      )}
    </div>
  )
}

export default KPICard
