import { MetadataRoute } from "next";

const BASE_URL = "https://www.accanto-care.com";

// Italian has no prefix
const languages = ["", "/en", "/fr", "/ar"];

const pages = [
  "",
  "/contract",
  "/profile",
  "/request",
  "/services",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return languages.flatMap((lang) =>
    pages.map((page) => ({
      url: `${BASE_URL}${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1.0 : 0.8,
    }))
  );
}