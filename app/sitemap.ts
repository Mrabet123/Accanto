import { MetadataRoute } from "next";

const BASE_URL = "https://www.accanto-care.com";

const pages = [
  "",
  "/profile",
  "/services",
  "/contract",
  "/request",
];

const languages = [
  "",      // Italian (default)
  "/en",
  "/fr",
  "/ar",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return languages.flatMap((lang) =>
    pages.map((page) => ({
      url: `${BASE_URL}${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1 : 0.8,
    }))
  );
}