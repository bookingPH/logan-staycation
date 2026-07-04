// Applies client-configured brand colors, background, and fonts as CSS variable
// overrides. Call once per page, right after loading clients/{clientId}/settings/public
// — pass the settings data object straight through.
export function applyDesignSettings(s) {
  if (!s) return;
  const root = document.documentElement.style;

  if (s.primaryColor)   root.setProperty('--primary', s.primaryColor);
  if (s.primaryColor)   root.setProperty('--primary-dark', s.primaryColor); // close enough
  if (s.accentColor)    root.setProperty('--accent', s.accentColor);
  if (s.secondaryColor) root.setProperty('--secondary', s.secondaryColor);
  if (s.errorColor)     root.setProperty('--error', s.errorColor);
  if (s.bgColor)         root.setProperty('--bg', s.bgColor);

  const headingFont = s.headingFont || 'Playfair Display';
  const bodyFont    = s.bodyFont    || 'Inter';
  if (headingFont !== 'Playfair Display' || bodyFont !== 'Inter') {
    const fontsToLoad = [headingFont, bodyFont].filter(Boolean).filter((f, i, a) => a.indexOf(f) === i);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?${fontsToLoad.map(f => `family=${encodeURIComponent(f)}:wght@400;600;700`).join('&')}&display=swap`;
    document.head.appendChild(link);
  }
  root.setProperty('--font-heading', `'${headingFont}', Georgia, serif`);
  root.setProperty('--font-body', `'${bodyFont}', system-ui, sans-serif`);
}
