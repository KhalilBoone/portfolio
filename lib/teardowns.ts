export type TeardownPhoto = {
  src: string;
  alt: string;
  caption: string;
  suggestion: string;
};

export type TeardownSection = {
  heading: string;
  body: string;
  photo?: TeardownPhoto;
};

export type Teardown = {
  slug: string;
  emoji: string;
  title: string;
  subtitle: string;
  tags: string[];
  date: string;
  preview: string;
  coverPhoto: TeardownPhoto;
  sections: TeardownSection[];
};

export const teardowns: Teardown[] = [
  {
    slug: "cursor-ai",
    emoji: "🤖",
    title: "Cursor AI",
    subtitle: "Developer Tools · AI-Assisted Coding",
    tags: ["AI", "Dev Tools", "B2B"],
    date: "Mar 2025",
    preview:
      "How Cursor turned the IDE into a collaborative AI interface — and where the product still has friction for non-engineering users.",
    coverPhoto: {
      src: "/images/teardowns/cursor/cover.png",
      alt: "Cursor AI interface overview",
      caption:
        "Cursor's chat panel alongside the editor — the AI lives exactly where the work happens, not in a separate tab.",
      suggestion:
        "📸 PHOTO SUGGESTION: Screenshot of Cursor with the chat panel open and an active conversation visible. Add a green annotation arrow pointing to the Tab completion ghost text. Establishing a consistent annotation system (green = good, red = problem) throughout your teardowns makes them feel like a series.",
    },
    sections: [
      {
        heading: "What's Working",
        body: "Cursor nailed the core insight: developers don't want a chatbot, they want a collaborator that lives inside their environment. Tab completion is seamlessly integrated, Cmd+K inline editing feels natural, and the product drives retention through muscle memory — once you've used it, returning to VS Code feels like a downgrade.",
        photo: {
          src: "/images/teardowns/cursor/tab-completion.png",
          alt: "Cursor Tab completion in action",
          caption:
            "Tab completion predicting a multi-line edit — the ghost text appears before you've finished typing the first line. It feels less like autocomplete and more like a collaborator.",
          suggestion:
            "📸 PHOTO SUGGESTION: Screenshot of Tab completion mid-suggestion (gray ghost text visible across 2–3 lines). Draw a green annotation box around the ghost text. Green = what's working. Consistent annotation colors across all teardowns trains readers to interpret your analysis visually.",
        },
      },
      {
        heading: "What's Broken",
        body: "The onboarding assumes deep LLM familiarity. Non-engineering users — designers, PMs, analysts — hit a wall fast. There's no progressive disclosure. The rules/.cursorrules system is genuinely powerful but exposed to new users on day one with no guidance, documentation, or defaults.",
        photo: {
          src: "/images/teardowns/cursor/onboarding-friction.png",
          alt: "Cursor settings showing confusing configuration options",
          caption:
            "The rules configuration screen — one of the first things a new user encounters, with no defaults, no examples, and no explanation of what 'rules' even do.",
          suggestion:
            "📸 PHOTO SUGGESTION: Screenshot of Cursor's Settings > Rules page or the .cursorrules editor. Draw red annotation boxes (numbered 1, 2, 3) around the three most confusing elements. Add a legend below the image: '1. No example rules provided. 2. No explanation of scope. 3. No defaults for common use cases.' Numbered annotations = analytical rigor.",
        },
      },
      {
        heading: "The One Bet I'd Make",
        body: "Launch a 'Cursor for PMs and Designers' mode that simplifies the interface to the 3 highest-value non-developer use cases: reading a codebase to understand architecture, reviewing a PR for product/design implications, and generating a technical spec from a design file. This unlocks an adjacent market that's currently underserved and that GitHub Copilot can't easily address.",
        photo: {
          src: "/images/teardowns/cursor/concept-sketch.png",
          alt: "Wireframe concept: Cursor for PMs",
          caption:
            "A concept sketch for a simplified Cursor mode — surfacing the 3 highest-value non-developer actions without exposing the full complexity of the editor.",
          suggestion:
            "📸 PHOTO SUGGESTION: Build a lo-fi wireframe in Figma (1–2 screens) showing what 'Cursor for PMs' looks like. Key elements: a simplified sidebar with only 3 actions (Understand Codebase / Review PR / Generate Spec), no terminal, no file tree clutter. Export as PNG. This is your design-thinking differentiator — most PM teardowns are text-only. Yours has a concept.",
        },
      },
      {
        heading: "How I'd Measure Success",
        body: "Weekly active users segmented by role (engineering vs. non-engineering). Time-to-first-meaningful-action for new non-developer users. D7 and D30 retention segmented by role. Qualitative NPS delta between engineering and non-engineering cohorts. Conversion rate from free to Pro for non-developer users.",
      },
    ],
  },
  {
    slug: "perplexity-ai",
    emoji: "🧠",
    title: "Perplexity AI",
    subtitle: "Consumer AI · Search · Information Products",
    tags: ["AI", "Consumer", "Search"],
    date: "Feb 2025",
    preview:
      "Perplexity is winning on trust where Google is struggling — but its roadmap reveals a growing tension between being a search engine and being a knowledge platform.",
    coverPhoto: {
      src: "/images/teardowns/perplexity/cover.png",
      alt: "Perplexity AI answer interface with citations",
      caption:
        "Perplexity's answer UI — citations are inline and traceable. In a world of AI hallucinations, showing your sources is the trust mechanic that separates Perplexity from every other AI product.",
      suggestion:
        "📸 PHOTO SUGGESTION: Screenshot of a Perplexity answer on a research-type query. The citation numbers should be visible inline and the source cards should be visible in the sidebar or below. Annotate one citation number with a green circle and draw a line connecting it to its source card. This visual makes the trust loop tangible.",
    },
    sections: [
      {
        heading: "What's Working",
        body: "Cited responses are the killer feature. In a world of AI hallucinations, showing your work builds trust in a way that ChatGPT's confident prose cannot. The Discover feed is a smart wedge into habitual daily use. The mobile experience is significantly better than most AI products. The Pro conversion is well-designed — the free tier is generous enough to hook, paid adds real, visible value.",
        photo: {
          src: "/images/teardowns/perplexity/citations-close.png",
          alt: "Close-up of Perplexity citation system",
          caption:
            "Every factual claim is numbered and traceable. The source card shows domain, title, and a preview snippet — enough context to decide whether to click through.",
          suggestion:
            "📸 PHOTO SUGGESTION: Zoom into a Perplexity answer showing 3–4 inline citation numbers and the corresponding source cards. Circle the citation-to-source connection with a green annotation. Consider adding a text label: 'Every claim is traceable.' This is your 'aha moment' image for this section.",
        },
      },
      {
        heading: "What's Broken",
        body: "The product identity is blurring. Is Perplexity a search engine, a research tool, or a news aggregator? The Discover tab pulls it toward media consumption, while Pro mode pulls it toward deep professional research. These audiences have fundamentally different needs, mental models, and willingness to pay — and the product is trying to serve both without a clear hierarchy.",
        photo: {
          src: "/images/teardowns/perplexity/identity-tension.png",
          alt: "Perplexity product identity tension diagram",
          caption:
            "The identity tension: Discover mode positions Perplexity as a news/media product for casual consumers, while Pro mode positions it as a research tool for professionals. One product, two users, no clear priority.",
          suggestion:
            "📸 PHOTO SUGGESTION: Build a simple spectrum diagram in Figma — a horizontal axis from 'Casual Consumer' to 'Professional Researcher'. Plot Perplexity's major features (Discover, Quick Search, Pro Deep Research, Spaces) along the axis. Add a red annotation showing the gap/conflict. This analytical framework is exactly what PM hiring managers want to see — original structured thinking, not just observations.",
        },
      },
      {
        heading: "The One Bet I'd Make",
        body: "Double down on research-and-synthesis for professionals — PMs, analysts, consultants, journalists. Build workspace features: persistent research threads, team sharing, source annotation, and export to docs. This creates a defensible B2B wedge that Google can't replicate, ChatGPT hasn't prioritized, and Notion hasn't touched.",
        photo: {
          src: "/images/teardowns/perplexity/workspace-concept.png",
          alt: "Concept wireframe: Perplexity Workspace",
          caption:
            "Concept sketch: Perplexity Workspace — persistent research threads on the left, active research on the right, with share and export actions in the topbar. Research becomes a collaborative, persistent artifact rather than a one-off query.",
          suggestion:
            "📸 PHOTO SUGGESTION: Figma wireframe of 'Perplexity Workspace' (1–2 lo-fi screens). Key elements: a left sidebar showing saved research threads (like Notion pages), the main research area showing a thread with citations, and a topbar with Share / Export buttons. This is the most valuable image in the teardown — it transforms an observation into a product vision.",
        },
      },
      {
        heading: "How I'd Measure Success",
        body: "Return visit rate for research-intent queries (vs. one-off searches). Share and export actions per session. Team plan conversion rate. Thread save rate (% of sessions where users save research). Competitive win rate vs. ChatGPT for research tasks in user surveys.",
      },
    ],
  },
];
