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
    sections: [
      {
        heading: "The Problem",
        body: "Technical packs (tech packs) are the garment industry's source of truth — detailed specification documents that tell manufacturers exactly how to construct a garment. Creating one manually takes a skilled designer 4–8 hours per style, requires deep technical knowledge, and is incredibly error-prone. Small brands and independent designers are locked out of professional manufacturing pipelines because they can't produce quality tech packs fast enough or affordably enough. Existing tools like Techpack.app and Aitechpacks.com solve part of the problem but rely heavily on manual data entry — they haven't truly leveraged AI vision to extract specifications directly from images.",
        photos: [
          {
            src: "/images/projects/techpack/problem-space.png",
            alt: "Manual tech pack creation process showing time and complexity",
            caption:
              "A traditional manual tech pack — dozens of fields, multiple views, hand-drawn sketches, and hours of annotation. This is what the generator replaces.",
            suggestion:
              "📸 PHOTO SUGGESTION: Find a public example of a traditional tech pack (search 'garment technical pack example' on Google Images — many are shared openly). Screenshot it and annotate with red callouts highlighting the most tedious manual elements: measurement tables, construction notes, material specs. Shows the depth of the problem you're solving.",
          },
        ],
      },
      {
        heading: "Market & Competitive Landscape",
        body: "The existing solutions — Techpack.app, Aitechpacks.com, and Adobe Illustrator templates — all require the user to already know what they're doing. They're tools for trained technical designers, not for the 2.1M independent fashion creators and small brand founders who don't have that background. The opportunity is a product that meets users where they are: upload a photo, get a professional-grade document. AI vision makes this possible in a way it wasn't two years ago.",
        photos: [
          {
            src: "/images/projects/techpack/competitive-landscape.png",
            alt: "Competitive landscape mapping existing solutions",
            caption:
              "Competitive positioning: existing tools serve trained designers; the AI Tech Pack Generator targets independent creators and small brands who need professional output without technical expertise.",
            suggestion:
              "📸 PHOTO SUGGESTION: Build a 2x2 competitive landscape in Figma. Axes: 'AI-powered vs. Manual' (x-axis) and 'Expert user vs. Non-expert user' (y-axis). Plot Techpack.app, Aitechpacks.com, Adobe Illustrator templates, and your product. Your product should be in the upper-right quadrant (AI-powered + Non-expert). This framing makes the opportunity crystal clear.",
          },
        ],
      },
      {
        heading: "Product Architecture",
        body: "The system is built as a feature module inside an existing Firebase application, with four discrete AI pipelines that run in sequence. I designed this modular architecture deliberately — each pipeline can be tested, swapped, and improved independently, and the Firebase infrastructure (Firestore, Storage, Auth) already handles user management and document persistence without rebuilding from scratch.",
        photos: [
          {
            src: "/images/projects/techpack/architecture-diagram.png",
            alt: "Four-pipeline AI architecture diagram",
            caption:
              "The four-pipeline architecture: Image Analysis → Flat Sketch Generation → Specification Generation → Document Assembly. Each pipeline is modular, testable, and independently improvable.",
            suggestion:
              "📸 PHOTO SUGGESTION: This is your most important technical diagram. Build it in FigJam or Figma: a horizontal flow showing the 4 pipelines as connected boxes, with input/output labeled at each stage. Below each box, add a small annotation: the AI model or service used (e.g. GPT-4 Vision, DALL-E, etc.) and what it produces. Add Firebase as the substrate underneath all four. This diagram alone could get you a PM interview — it shows you think in systems.",
          },
        ],
      },
      {
        heading: "Pipeline 1: Garment Image Analysis",
        body: "The first pipeline takes the uploaded garment image and extracts structured data: garment category, construction type, visible materials, color palette, design details (pockets, closures, topstitching), and silhouette. I use GPT-4 Vision with a carefully engineered prompt that outputs structured JSON rather than prose — ensuring downstream pipelines receive clean, typed data rather than text to parse.",
        photos: [
          {
            src: "/images/projects/techpack/pipeline-1-analysis.png",
            alt: "Image analysis pipeline: input image and structured JSON output",
            caption:
              "Pipeline 1 output: a garment image converted to structured JSON — category, materials, construction details, and silhouette data ready for downstream pipelines.",
            suggestion:
              "📸 PHOTO SUGGESTION: Split-screen screenshot: left side shows the garment image input; right side shows the raw JSON output from your analysis prompt (prettified in VS Code or your terminal). Blur any API keys. This is a developer-grade artifact that shows you understand the technical layer — rare for a PM portfolio.",
          },
        ],
      },
      {
        heading: "Pipeline 2: Flat Sketch Generation",
        body: "The second pipeline converts the image analysis JSON into a garment flat sketch — the industry-standard 2D technical illustration used in tech packs. I explored multiple approaches here: prompting image generation models directly, using SVG generation via LLM, and a hybrid approach with a base sketch template library. The prompt engineering for this pipeline was the most technically challenging part of the project — getting consistently clean, manufacturer-readable flat sketches from AI required significant iteration.",
        photos: [
          {
            src: "/images/projects/techpack/pipeline-2-sketches.png",
            alt: "Flat sketch generation iterations showing prompt engineering process",
            caption:
              "Prompt engineering iterations for flat sketch generation — early attempts (left) vs. refined output (right) after 30+ prompt variations.",
            suggestion:
              "📸 PHOTO SUGGESTION: A grid showing your flat sketch generation iterations — 6–8 outputs showing the progression from poor early results to cleaner final output. This is your process story. Even messy AI-generated sketches are interesting here because they show the problem is hard and you solved it through iteration. Label each with the prompt version number.",
          },
        ],
      },
      {
        heading: "Pipeline 3: Specification Generation",
        body: "The third pipeline takes the image analysis JSON and flat sketch data and generates the full specification tables: bill of materials (BOM), construction details, measurement specifications, care instructions, and labeling requirements. Each specification type has its own prompt, structured to output JSON that maps directly to the document template fields — keeping the generation deterministic and auditable.",
        photos: [
          {
            src: "/images/projects/techpack/pipeline-3-specs.png",
            alt: "Specification generation output: BOM and measurement tables",
            caption:
              "Pipeline 3 output: bill of materials and measurement specification tables generated from image analysis data.",
            suggestion:
              "📸 PHOTO SUGGESTION: Screenshot of your Firestore console or a rendered JSON/table view showing the BOM and measurement spec output for a sample garment. Alternatively, show the spec data rendered in your UI as a structured table. The goal: show that the output is structured and professional, not vague prose.",
          },
        ],
      },
      {
        heading: "Pipeline 4: Document Assembly",
        body: "The final pipeline assembles all generated data — cover page, flat sketches, BOM, construction details, measurement tables, and care instructions — into a formatted PDF tech pack. I built the document template in a format that mirrors industry-standard tech packs, so the output is immediately usable with a manufacturer rather than requiring reformatting.",
        photos: [
          {
            src: "/images/projects/techpack/pipeline-4-output.png",
            alt: "Final assembled tech pack PDF document",
            caption:
              "The assembled tech pack output — cover page, flat sketch, bill of materials, construction details, and measurement tables in a single downloadable PDF.",
            suggestion:
              "📸 PHOTO SUGGESTION: Screenshot of the final generated PDF tech pack open in a browser or PDF viewer — show at least 2 pages so the document feels substantial. If possible, show it alongside the source garment image so the input-to-output story is immediate. This is your money shot — the thing recruiters will remember.",
          },
        ],
      },
      {
        heading: "Key Product Decisions",
        body: "Several decisions shaped the architecture significantly. I chose to integrate into an existing Firebase app rather than build standalone — this gave me Auth, Storage, and a user database on day one and let me focus on the AI pipelines. I chose modular sequential pipelines over an end-to-end model — harder to build but much easier to debug, improve, and explain. I chose structured JSON outputs over prose throughout — this made the system deterministic and reduced hallucination surface area significantly. And I chose to match industry-standard tech pack format from the start — even at the cost of complexity — because manufacturer-usability is the core value proposition.",
        photos: [
          {
            src: "/images/projects/techpack/decision-log.png",
            alt: "Product decision log showing key architectural choices",
            caption:
              "A decision log capturing key architectural choices, alternatives considered, and rationale — a practice I carry from product work into my own builds.",
            suggestion:
              "📸 PHOTO SUGGESTION: Screenshot of a Notion decision log table with columns: Decision, Alternatives Considered, Rationale, Date. Show 4–5 real decisions you made. This is an extremely PM artifact — it proves you make deliberate, documented tradeoffs rather than building reactively. Most engineers don't keep decision logs. Most PMs say they do but can't show one. You can.",
          },
        ],
      },
      {
        heading: "What's Next",
        body: "The immediate roadmap: (1) improve flat sketch quality and consistency with a curated base template library, (2) add a review-and-edit step so users can correct AI-generated specs before document assembly, (3) build a shareable link so generated tech packs can be sent directly to manufacturers, and (4) explore a B2B offering for small fashion brands who need volume tech pack generation.",
        photos: [
          {
            src: "/images/projects/techpack/roadmap.png",
            alt: "Product roadmap for AI Tech Pack Generator",
            caption:
              "The near-term roadmap: flat sketch quality → user review step → shareable output → B2B volume offering.",
            suggestion:
              "📸 PHOTO SUGGESTION: A simple Now / Next / Later roadmap in Figma or Notion. Three columns, each with 3–5 items. Keep it clean and visual. This shows product thinking beyond current state — you're not just building features, you're managing a roadmap. Even for a personal project, this is powerful positioning.",
          },
        ],
      },
    ],
  },
];
