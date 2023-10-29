import { useTranslation } from '../../common/components/LocalizationProvider';
import { useAttributePreference } from '../../common/util/preferences';

const styleCustom = ({ tiles, minZoom, maxZoom, attribution }) => {
  const source = {
    type: 'raster',
    tiles,
    attribution,
    tileSize: 256,
    minzoom: minZoom,
    maxzoom: maxZoom,
  };
  Object.keys(source).forEach((key) => source[key] === undefined && delete source[key]);
  return {
    version: 8,
    sources: {
      custom: source,
    },
    glyphs: 'https://cdn.traccar.com/map/fonts/{fontstack}/{range}.pbf',
    layers: [{
      id: 'custom',
      type: 'raster',
      source: 'custom',
    }],
  };
};

export default () => {
  const t = useTranslation();

  const locationIqKey = useAttributePreference('locationIqKey') || 'pk.0f147952a41c555a5b70614039fd148b';
  return [
    {
      id: 'locationIqStreets',
      title: t('mapLocationIqStreets'),
      style: `https://tiles.locationiq.com/v3/streets/vector.json?key=${locationIqKey}`,
      available: true,
    },
    {
      id: 'locationIqDark',
      title: t('mapLocationIqDark'),
      style: `https://tiles.locationiq.com/v3/dark/vector.json?key=${locationIqKey}`,
      available: true,
    },
    {
      id: 'osm',
      title: t('mapOsm'),
      style: styleCustom({
        tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
        maxZoom: 19,
        attribution: '© <a target="_top" rel="noopener" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }),
      available: true,
    },
    {
      id: 'googleRoad',
      title: t('mapGoogleRoad'),
      style: styleCustom({
        tiles: ['https://d831cxdfrpk69.cloudfront.net/?x={x}&y={y}&z={z}&type=roads'],
        maxZoom: 20,
        attribution: '© Google',
      }),
      available: true,
    },
    {
      id: 'googleSatellite',
      title: t('mapGoogleSatellite'),
      style: styleCustom({
        tiles: ['https://d831cxdfrpk69.cloudfront.net/?x={x}&y={y}&z={z}&type=satellite'],
        maxZoom: 20,
        attribution: '© Google',
      }),
      available: true,
    },
  ];
};
