import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://joinaltr.com",
      lastModified: new Date(),
    },
    {
      url: "https://joinaltr.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://joinaltr.com/communities",
      lastModified: new Date(),
    },
    {
      url: "https://joinaltr.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://joinaltr.com/waitlist",
      lastModified: new Date(),
    },
  ];
}