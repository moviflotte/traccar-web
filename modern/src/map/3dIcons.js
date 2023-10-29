import createPalette from '@mui/material/styles/createPalette';
import { grey } from '@mui/material/colors';

/* query params:
c => COLOR_CHASIS_CABINA
b => COLOR_DE_CAJA
a => COLOR_DE_CAJA2
p => COLOR_PARABRISAS
t => COLOR_LUCES_TRASERAS
f => COLOR_LUCES_FRENTE
alpha => TRANSPARENCIA_DE_ICONO
*/

const baseUrl = 'https://dj8a2t2l05zy6.cloudfront.net';

const mapPalette = createPalette({
  neutral: { main: grey[500] },
});

export default function getImageUrl(icon, color, rotation) {
  return `${baseUrl}/${icon}.php?c=${mapPalette[color].main && mapPalette[color].main.replace('#', '')}&grados=${rotation}`;
}
