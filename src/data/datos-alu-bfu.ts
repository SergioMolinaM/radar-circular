// src/data/datos-alu-bfu.ts
// Fuentes:
// - ANIR/Kyklos Estudio Comparativo de Materiales 2024 (presentado cierre ANIR dic 2025)
// - País Circular feb 2026: "ANIR expone avances y brechas del reciclaje en Chile"
// - ANIR/Kyklos Estudio 2023 (presentado dic 2024)

export const datosALU = {
  mdp: 120748, // ton disponibles en el país
  mgp: 57438, // ton gestionadas
  tasaValorizacion: 47.6, // %
  añoDato: 2024,
  decretoVigencia: 'Enero 2027',
  decreto: 'DS 47/2023',
  nota: 'La industria de re-refinación ya opera con alta capacidad antes de la entrada en vigor de las metas REP. DS 47 publicado en Diario Oficial en noviembre de 2024.',
  fuente: 'ANIR/Kyklos Estudio Comparativo de Materiales 2024',
}

export const datosBFU = {
  tasaValorizacion2023: 74.5, // %
  tasaValorizacion2024: 52, // % (baja por cambio metodológico o mercado)
  añoDato: 2024,
  nota: 'Las baterías de plomo-ácido tienen alta valorización por el valor del plomo. BFU cubre baterías >5kg; las menores están en decreto P+AEE. Consulta pública cerrada abril 2026.',
  fuente: 'ANIR/Kyklos Estudio Comparativo de Materiales 2023-2024',
}
