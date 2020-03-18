const breakP = process.env.NODE_ENV === 'development' ? 824 : 1000

export const device = {
  landscapeMobile: `(min-width: 580px) and (orientation: landscape)`,
  laptop: `(min-width: ${breakP}px) and (orientation: landscape)`
};