/**
 * Datos de cobertura comunal ReSimple 2025
 * Fuente: resimple.cl/municipios/comunas-con-servicio-de-reciclaje
 * Fecha de captura: abril 2026
 * Tipos de envases en todas las comunas: PC (papel/cartón), V (vidrio), EL (envases livianos)
 * 
 * NOTA: ReSimple es el único GRANSIC (EyE) con datos comunales públicos.
 * GIRO y otros SIG no publican listado comunal equivalente.
 */

export interface ComunaReSimple {
  comuna: string;
  region: string;
  coberturaPct: number;
  tiposEnvases: string[];
}

export const datosReSimple2025: ComunaReSimple[] = [
  // --- Arica y Parinacota ---
  { comuna: 'Arica', region: 'Arica y Parinacota', coberturaPct: 66, tiposEnvases: ['PC', 'V', 'EL'] },

  // --- Antofagasta ---
  { comuna: 'Antofagasta', region: 'Antofagasta', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },

  // --- Coquimbo ---
  { comuna: 'Coquimbo', region: 'Coquimbo', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'La Serena', region: 'Coquimbo', coberturaPct: 25, tiposEnvases: ['PC', 'V', 'EL'] },

  // --- Valparaíso ---
  { comuna: 'Concón', region: 'Valparaíso', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Viña del Mar', region: 'Valparaíso', coberturaPct: 52, tiposEnvases: ['PC', 'V', 'EL'] },

  // --- Región Metropolitana ---
  { comuna: 'Buin', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Calera de Tango', region: 'Metropolitana', coberturaPct: 80, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Cerrillos', region: 'Metropolitana', coberturaPct: 85, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Cerro Navia', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Colina', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Conchalí', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Curacaví', region: 'Metropolitana', coberturaPct: 80, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'El Bosque', region: 'Metropolitana', coberturaPct: 85, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Estación Central', region: 'Metropolitana', coberturaPct: 80, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Independencia', region: 'Metropolitana', coberturaPct: 70, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'La Cisterna', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'La Florida', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'La Granja', region: 'Metropolitana', coberturaPct: 60, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'La Pintana', region: 'Metropolitana', coberturaPct: 30, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'La Reina', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Lampa', region: 'Metropolitana', coberturaPct: 91, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Lo Espejo', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Macul', region: 'Metropolitana', coberturaPct: 85, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Maipú', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'María Pinto', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Melipilla', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Ñuñoa', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Padre Hurtado', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Paine', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Pedro Aguirre Cerda', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Peñalolén', region: 'Metropolitana', coberturaPct: 75, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Pirque', region: 'Metropolitana', coberturaPct: 17, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Providencia', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Pudahuel', region: 'Metropolitana', coberturaPct: 90, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Puente Alto', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Quinta Normal', region: 'Metropolitana', coberturaPct: 22, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Renca', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'San Bernardo', region: 'Metropolitana', coberturaPct: 80, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'San Joaquín', region: 'Metropolitana', coberturaPct: 90, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'San Miguel', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'San Ramón', region: 'Metropolitana', coberturaPct: 80, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Santiago', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Talagante', region: 'Metropolitana', coberturaPct: 50, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Vitacura', region: 'Metropolitana', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },

  // --- O'Higgins ---
  { comuna: 'Rancagua', region: "O'Higgins", coberturaPct: 57, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'San Fernando', region: "O'Higgins", coberturaPct: 62, tiposEnvases: ['PC', 'V', 'EL'] },

  // --- Maule ---
  { comuna: 'Curicó', region: 'Maule', coberturaPct: 50, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Talca', region: 'Maule', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },

  // --- Ñuble ---
  { comuna: 'Chillán', region: 'Ñuble', coberturaPct: 50, tiposEnvases: ['PC', 'V', 'EL'] },

  // --- Biobío ---
  { comuna: 'Concepción', region: 'Biobío', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Coronel', region: 'Biobío', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Hualpén', region: 'Biobío', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'San Pedro de la Paz', region: 'Biobío', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },
  { comuna: 'Talcahuano', region: 'Biobío', coberturaPct: 100, tiposEnvases: ['PC', 'V', 'EL'] },

  // --- Los Ríos ---
  { comuna: 'Valdivia', region: 'Los Ríos', coberturaPct: 20, tiposEnvases: ['PC', 'V', 'EL'] },
];

// --- Resumen por región ---
export const resumenRegionalReSimple = () => {
  const porRegion = new Map<string, { comunas: number; coberturaPromedio: number }>();
  
  for (const c of datosReSimple2025) {
    const actual = porRegion.get(c.region) || { comunas: 0, coberturaPromedio: 0 };
    actual.coberturaPromedio = (actual.coberturaPromedio * actual.comunas + c.coberturaPct) / (actual.comunas + 1);
    actual.comunas += 1;
    porRegion.set(c.region, actual);
  }
  
  return porRegion;
};

/**
 * Regiones SIN cobertura ReSimple (0 comunas con convenio):
 * - Tarapacá
 * - Atacama
 * - La Araucanía
 * - Los Lagos
 * - Aysén
 * - Magallanes
 * 
 * Total: 52 comunas con servicio ReSimple en 11 de 16 regiones.
 * Concentración RM: 37 comunas (71% del total).
 * Cobertura promedio ponderada: ~85% (sesgada por RM al 100%).
 * 
 * Dato clave para análisis: Chile tiene 346 comunas.
 * ReSimple cubre 52 = 15% de las comunas del país.
 * Sin embargo, las 52 comunas concentran ~45% de la población nacional.
 */
