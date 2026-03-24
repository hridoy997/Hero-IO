export const formatDownloads = (value) => {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return `${value}`;
};

export const formatRating = (value) => value.toFixed(1);

export const formatSize = (value) => `${value} MB`;

export const formatReviews = (value) => formatDownloads(value);
