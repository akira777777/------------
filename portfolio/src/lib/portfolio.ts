export type ProjectMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  kind?: "image" | "video";
  poster?: string;
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  category: string;
  year: string;
  description: string;
  role: string;
  cover: ProjectMedia;
  media: ProjectMedia[];
  tags: string[];
  accent: string;
};

export const siteConfig = {
  name: "Elizaveta Vakalova",
  role: "Graphic designer & art director",
  email: "magic4jellyfish@gmail.com",
  description:
    "Graphic design, editorial systems and image-making for ideas that deserve a distinct visual language.",
};

export const projects: Project[] = [
  {
    slug: "chrome-forms",
    title: "Chrome Forms",
    kicker: "3D image-making",
    category: "3D / art direction",
    year: "2024",
    description:
      "A study of reflective chrome objects, the body and the forest. The project moves between tactile material tests, digital sculpture and a short moving image.",
    role: "Concept, 3D direction, image-making",
    cover: { src: "/work/chrome/head.webp", alt: "Chrome mask across a sculpted head", width: 1080, height: 1320 },
    media: [
      { src: "/work/chrome/head.webp", alt: "Chrome mask across a sculpted head", width: 1080, height: 1320 },
      { src: "/work/chrome/chrome-forms.mp4", poster: "/work/chrome/chrome-forms-poster.webp", alt: "Chrome lettering in a misty forest", width: 720, height: 896, kind: "video" },
      { src: "/work/chrome/forest.webp", alt: "Chrome sculpture in a green forest", width: 2720, height: 3807 },
      { src: "/work/chrome/mirror.webp", alt: "Reflective garment study in a mirror", width: 4059, height: 4177 },
    ],
    tags: ["3D", "Image-making", "Moving image"],
    accent: "#9b91a8",
  },
  {
    slug: "heide",
    title: "HEIDE",
    kicker: "A museum in your pocket",
    category: "Product / UX UI",
    year: "2024",
    description:
      "A mobile concept for discovering exhibitions and building a calmer, more legible museum visit. The system balances editorial typography with fast wayfinding.",
    role: "UX direction, interface design, prototype",
    cover: { src: "/work/heide/page-1.webp", alt: "HEIDE mobile app concept presentation", width: 1600, height: 925 },
    media: [
      { src: "/work/heide/page-1.webp", alt: "HEIDE mobile app concept presentation", width: 1600, height: 925 },
      { src: "/work/heide/page-2.webp", alt: "HEIDE problem and solution map", width: 1600, height: 925 },
      { src: "/work/heide/page-5.webp", alt: "HEIDE mobile wireframes", width: 1600, height: 925 },
      { src: "/work/heide/page-8.webp", alt: "HEIDE interaction prototype", width: 1600, height: 925 },
    ],
    tags: ["Research", "Interface", "Prototype"],
    accent: "#e1a37d",
  },
  {
    slug: "post-museum",
    title: "Galerie Muzea České Pošty",
    kicker: "A visual identity for a postal museum",
    category: "Identity / exhibition",
    year: "2023",
    description:
      "A visual concept built from the meeting of a postage stamp, a display stand and fragments of portraiture. The identity carries a historic collection into a contemporary gallery context.",
    role: "Identity, art direction, spatial applications",
    cover: { src: "/work/post-museum/page-7.webp", alt: "Czech Post Museum exhibition identity", width: 1600, height: 853 },
    media: [
      { src: "/work/post-museum/page-1.webp", alt: "Czech Post Museum identity cover", width: 1600, height: 853 },
      { src: "/work/post-museum/page-4.webp", alt: "Czech Post Museum color system", width: 1600, height: 853 },
      { src: "/work/post-museum/page-6.webp", alt: "Czech Post Museum poster studies", width: 1600, height: 853 },
      { src: "/work/post-museum/page-7.webp", alt: "Czech Post Museum printed matter", width: 1600, height: 853 },
      { src: "/work/post-museum/page-8.webp", alt: "Czech Post Museum bus stop application", width: 1600, height: 853 },
    ],
    tags: ["Brand identity", "Print", "Exhibition"],
    accent: "#7c8a7d",
  },
  {
    slug: "povstalec",
    title: "Povstalec",
    kicker: "A magazine about new voices",
    category: "Editorial",
    year: "2023",
    description:
      "An editorial system for a publication that gives young people room to speak. Soft cyan interventions, generous white space and a flexible grid keep the conversations in focus.",
    role: "Editorial concept, layout, visual language",
    cover: { src: "/work/povstalec/page-2.webp", alt: "Povstalec magazine spread", width: 1600, height: 853 },
    media: [
      { src: "/work/povstalec/page-1.webp", alt: "Povstalec magazine title page", width: 1600, height: 853 },
      { src: "/work/povstalec/page-2.webp", alt: "Povstalec magazine spread", width: 1600, height: 853 },
      { src: "/work/povstalec/page-4.webp", alt: "Povstalec magazine interview spread", width: 1600, height: 853 },
      { src: "/work/povstalec/page-6.webp", alt: "Povstalec magazine editorial spread", width: 1600, height: 853 },
      { src: "/work/povstalec/page-8.webp", alt: "Povstalec magazine closing spread", width: 1600, height: 853 },
      { src: "/work/povstalec/page-9.webp", alt: "Povstalec magazine final page", width: 1600, height: 853 },
    ],
    tags: ["Editorial", "Art direction", "Layout"],
    accent: "#67c6c4",
  },
  {
    slug: "efest",
    title: "EFEST",
    kicker: "Electronic music & visual art",
    category: "Campaign / poster",
    year: "2023",
    description:
      "A visual world for a festival where analogue texture meets electric light. The system uses a modular wordmark, high-contrast black and luminous green to move across print and screen.",
    role: "Campaign concept, typography, poster system",
    cover: { src: "/work/efest/posters.webp", alt: "EFEST poster series", width: 1440, height: 2145 },
    media: [{ src: "/work/efest/posters.webp", alt: "EFEST poster series", width: 1440, height: 2145 }],
    tags: ["Typography", "Campaign", "Poster"],
    accent: "#a8e54d",
  },
  {
    slug: "illustrations",
    title: "Illustrations",
    kicker: "Hand-drawn worlds",
    category: "Illustration",
    year: "2022—24",
    description:
      "A collection of drawn figures, botanical forms and small surreal narratives. Pencil texture stays visible while collage structures give each image a second rhythm.",
    role: "Illustration, composition, image editing",
    cover: { src: "/work/illustrations/mushroom.webp", alt: "Illustration of a figure beneath a mushroom", width: 2480, height: 3508 },
    media: [
      { src: "/work/illustrations/mushroom.webp", alt: "Illustration of a figure beneath a mushroom", width: 2480, height: 3508 },
      { src: "/work/illustrations/cup.webp", alt: "Illustration of a person holding a cup", width: 2480, height: 3508 },
      { src: "/work/illustrations/rose.webp", alt: "Illustration of a figure inside a rose", width: 2480, height: 3508 },
      { src: "/work/illustrations/two.webp", alt: "Illustration of two figures with flowers", width: 2480, height: 3508 },
    ],
    tags: ["Drawing", "Collage", "Narrative"],
    accent: "#b7a5c8",
  },
  {
    slug: "selected-print",
    title: "Selected print",
    kicker: "Objects, events, atmosphere",
    category: "Print / graphic design",
    year: "2022—24",
    description:
      "A compact selection of printed experiments: a cosmic magazine object, a themed event poster and a tactile fold-out flyer.",
    role: "Concept, art direction, graphic design",
    cover: { src: "/work/print/comet.webp", alt: "Comet editorial print mockup", width: 1920, height: 2576 },
    media: [
      { src: "/work/print/comet.webp", alt: "Comet editorial print mockup", width: 1920, height: 2576 },
      { src: "/work/print/fairy-party.webp", alt: "Fairy Party event poster", width: 1272, height: 802 },
      { src: "/work/print/page-1.webp", alt: "Understyle fold-out flyer", width: 1600, height: 900 },
      { src: "/work/print/page-2.webp", alt: "Understyle flyer layout", width: 1600, height: 900 },
    ],
    tags: ["Print", "Art direction", "Typography"],
    accent: "#e3c18b",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { next: null, prev: null };
  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];
  return { next, prev };
}
