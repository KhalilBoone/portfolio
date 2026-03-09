export type ProjectPhoto = {
  src: string;
  alt: string;
  caption: string;
  suggestion: string;
};

export type ProjectSection = {
  heading: string;
  body: string;
  photos?: ProjectPhoto[];
};

export type Project = {
  slug: string;
  emoji: string;
  title: string;
  subtitle: string;
  tags: string[];
  status: string;
  statusColor: string;
  timeline: string;
  role: string;
  preview: string;
  coverPhoto: ProjectPhoto;
  stack?: string;
  liveUrl?: string;
  githubUrl?: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "ai-tech-pack-generator",
    emoji: "🤖",
    title: "AI Tech Pack Generator",
    subtitle: "AI Product · Personal Project · In Progress",
    tags: ["AI / ML", "Computer Vision", "Fashion Tech", "Firebase", "React"],
    status: "In Progress",
    statusColor: "#f59e0b",
    timeline: "Jan 2025 – Present",
    role: "Solo — Product, Design, Engineering",
    stack: "Firebase, React, GPT-4 Vision, Python, SQL",
    preview:
      "An AI-powered system that generates garment technical specifications from a single product image — replacing a manual, error-prone process that costs fashion brands dozens of hours per style.",
    coverPhoto: {
      src: "/images/projects/techpack/cover.png",
      alt: "AI Tech Pack Generator interface",
      caption:
        "The Tech Pack Generator — upload a garment image, receive a fully structured technical specification document in seconds.",
      suggestion:
        "📸 PHOTO SUGGESTION: A side-by-side screenshot: left side shows the image upload UI with a garment photo dropped in; right side shows the generated tech pack document output. This single image tells the entire product story. If the app isn't fully built yet, mock this in Figma — a realistic-looking before/after is more compelling than a placeholder.",
    },
    sections: [],
  },
];
