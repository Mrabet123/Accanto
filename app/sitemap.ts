import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://accanto-care.com",
      lastModified: new Date(),
      priority: 1,
    }
  ];
}