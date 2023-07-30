import palette from '../common/theme/palette';

/* query params:
c => COLOR_CHASIS_CABINA
b => COLOR_DE_CAJA
a => COLOR_DE_CAJA2
p => COLOR_PARABRISAS
t => COLOR_LUCES_TRASERAS
f => COLOR_LUCES_FRENTE
alpha => TRANSPARENCIA_DE_ICONO

https://library.service24gps.com/iconos.html

*/
const baseUrl = 'https://dj8a2t2l05zy6.cloudfront.net';

export default function getImageUrl(icon, color, rotation) {
  return `${baseUrl}/${icon}.php?c=${palette().colors[color] && palette().colors[color].replace('#', '')}&grados=${rotation}`;
}
