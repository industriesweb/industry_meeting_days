import { dynamicPaths } from "./next-sitemap.paths.js"; // ⚡ note the .js extension

const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://industryday.info",
  generateRobotsTxt: true,
  generateIndexSitemap: false, // true if you have >50k URLs
  changefreq: "daily",
  priority: 0.7,

  transform: async (config, path) => {
    if (path.includes("/participate/sponsoring/booking/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },

  additionalPaths: async () => {
    return dynamicPaths.map((path) => ({
      loc: path,
      changefreq: "daily",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    }));
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/admin", "/api/", "/private/", "/_next/"],
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
    ],
  },

  exclude: ["/admin/*", "/api/*", "/private/*", "/404", "/500"],

  additionalSitemaps: [
    "https://industryday.info/sitemap.xml"
  ],
};

export default config;
