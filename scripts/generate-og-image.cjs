// scripts/generate-og-image.js
// Genera public/og-image.png (1200x630) para Open Graph
const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const W = 1200;
const H = 630;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

// --- Fondo: gradiente verde oscuro → verde medio ---
const grad = ctx.createLinearGradient(0, 0, W, 0);
grad.addColorStop(0, '#1a4d2e');
grad.addColorStop(1, '#2d7a4f');
ctx.fillStyle = grad;
ctx.fillRect(0, 0, W, H);

// --- Centrado vertical: bloque de contenido ---
const blockTop = 190; // posición Y del título (centrado visual)

// 1. Título principal
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 64px "Segoe UI", Arial, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'top';
ctx.fillText('Radar Circular', W / 2, blockTop);

// 2. Subtítulo
ctx.fillStyle = '#a8d5ba';
ctx.font = '28px "Segoe UI", Arial, sans-serif';
ctx.fillText('Inteligencia sobre la Ley REP en Chile', W / 2, blockTop + 64 + 16);

// 3. Línea separadora
const lineY = blockTop + 64 + 16 + 28 + 24;
ctx.strokeStyle = '#a8d5ba';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(W / 2 - 100, lineY);
ctx.lineTo(W / 2 + 100, lineY);
ctx.stroke();

// 4. Datos clave
ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
ctx.font = '20px "Segoe UI", Arial, sans-serif';
ctx.fillText('52 comunas  ·  102 instalaciones  ·  35 SIG  ·  7 decretos', W / 2, lineY + 24);

// 5. Marca inferior derecha
ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
ctx.font = '14px "Segoe UI", Arial, sans-serif';
ctx.textAlign = 'right';
ctx.fillText('Tercera Letra', W - 24, H - 24);

// --- Guardar ---
const outPath = path.join(__dirname, '..', 'public', 'og-image.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outPath, buffer);
console.log(`og-image.png generado: ${outPath} (${buffer.length} bytes)`);
