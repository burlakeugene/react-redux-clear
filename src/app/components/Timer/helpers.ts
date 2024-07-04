type THex = string;
type TRbg = [number, number, number];

function hexToRgb(hex: THex): TRbg {
  hex = hex.replace('#', '');

  const bigInt = parseInt(hex, 16);
  const r = (bigInt >> 16) & 255;
  const g = (bigInt >> 8) & 255;
  const b = bigInt & 255;

  return [r, g, b];
}

function rgbToHex(rgb: TRbg): THex {
  const r = rgb[0].toString(16).padStart(2, '0');
  const g = rgb[1].toString(16).padStart(2, '0');
  const b = rgb[2].toString(16).padStart(2, '0');

  return `#${r}${g}${b}`;
}

function interpolateColor(color1: TRbg, color2: TRbg, factor: number) {
  if (factor === undefined) {
    factor = 0.5;
  }

  const result = color1.slice();

  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }

  return result as TRbg;
}

export function getIntermediateColor(colors: THex[], percentage: number): THex {
  if (percentage <= 0) {
    return colors[0];
  }

  if (percentage >= 100) {
    return colors[colors.length - 1];
  }

  const scaledPercentage = (percentage / 100) * (colors.length - 1);
  const lowerIndex = Math.floor(scaledPercentage);
  const upperIndex = lowerIndex + 1;
  const factor = scaledPercentage - lowerIndex;

  const color1 = hexToRgb(colors[lowerIndex]);
  const color2 = hexToRgb(colors[upperIndex]);
  const interpolatedColor = interpolateColor(color1, color2, factor);

  return rgbToHex(interpolatedColor);
}
