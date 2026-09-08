// Generates public/og-image.png (1200x630) used for social link previews
// (WhatsApp / Facebook / LinkedIn / X). Run: node scripts/make-og.mjs
import sharp from 'sharp';

const W = 1200;
const H = 630;
const LOGO_W = 780;
const LOGO_RATIO = 2548 / 757; // company-logo.png aspect
const logoH = Math.round(LOGO_W / LOGO_RATIO);

const bg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0B1224"/>
      <stop offset="55%" stop-color="#0D1B2A"/>
      <stop offset="100%" stop-color="#0B1224"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="28%" r="65%">
      <stop offset="0%" stop-color="#45ADFF" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#45ADFF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <!-- thin accent frame -->
  <rect x="24" y="24" width="${W - 48}" height="${H - 48}" rx="28" fill="none" stroke="#45ADFF" stroke-opacity="0.25" stroke-width="2"/>
  <!-- tagline -->
  <text x="${W / 2}" y="452" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="36" font-weight="700" fill="#FFFFFF">Android &#8226; iOS &#8226; Web &amp; Software Development</text>
  <rect x="${W / 2 - 110}" y="486" width="220" height="4" rx="2" fill="#45ADFF"/>
  <!-- location / url -->
  <text x="${W / 2}" y="548" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="25" fill="#94A3B8">Surat, Gujarat, India &#8226; gravitytechworld.com</text>
</svg>`;

const logo = await sharp('public/images/company-logo.png')
  .resize({ width: LOGO_W })
  .toBuffer();

await sharp(Buffer.from(bg))
  .composite([{ input: logo, top: 150, left: Math.round((W - LOGO_W) / 2) }])
  .png()
  .toFile('public/og-image.png');

console.log(`og-image.png created (${W}x${H}), logo ${LOGO_W}x${logoH}`);
