// ESM export
const bookingPages = [
  "silver",
  "gold",
  "platinum",
  "prestige",
  "officiel",
];

const staticPages = [
  "/participate",
  "/participate/sponsoring",
  "/contact",
  "/privacy-policy",
];

// Export dynamicPaths array
export const dynamicPaths = [
  ...staticPages,
  ...bookingPages.map((slug) => `/participate/${slug}`),
];
