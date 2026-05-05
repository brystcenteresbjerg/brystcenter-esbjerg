import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const base = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/moed-os`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/patientrejsen`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/priser`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/booking`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/behandlinger/bfo-implantat`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/behandlinger/bfo-eget-fedt-lipofilling`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/behandlinger/brystloeft`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/behandlinger/brystreduktion`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/behandlinger/fedttransplantation`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/behandlinger/udskiftning-af-protese`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/behandlinger/second-opinion`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
