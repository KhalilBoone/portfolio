export type ProcessPhoto = {
  src: string;
  alt: string;
  caption: string;
  suggestion: string; // shown in dev as placeholder instructions
};

export type DeviceViewerConfig = {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
};

export type CaseSection = {
  heading: string;
  body: string;
  photos?: ProcessPhoto[];
  deviceViewer?: DeviceViewerConfig;
};

export type CaseStudy = {
  slug: string;
  emoji: string;
  title: string;
  subtitle: string;
  tags: string[];
  status: string;
  statusColor: string;
  preview: string;
  coverPhoto?: ProcessPhoto;
  sections: CaseSection[];
};

export const cases: CaseStudy[] = [
  {
    slug: "blackstone-design-system",
    emoji: "🏗️",
    title: "Blackstone Design System",
    subtitle: "Enterprise · Design Systems · Product Strategy",
    tags: ["Fintech", "B2B", "Scale"],
    status: "Published",
    statusColor: "#4caf85",
    preview:
      "Led product development of a design system adopted across 41 product websites, reducing design iteration cycles by 30% and aligning 3 design teams with engineering and product leadership.",
    coverPhoto: {
      src: "/images/bx_guidelines.png",
      alt: "Blackstone Design System in React",
      caption:
        "The React component library, with 30+ components across 41 product sites, documented with usage guidelines and accessibility annotations.",
      suggestion:
        "",
    },
    sections: [
      {
        heading: "The Problem",
        body: "Blackstone's product suite had grown to 41 enterprise sites with no shared design language. Each designer and engineer rebuilt components from scratch, creating visual inconsistency, slowing shipping velocity, and generating constant rework across the organization.",
        photos: [
          {
            src: "/images/improved_components.png",
            alt: "UI audit showing inconsistency across product websites",
            caption:
              "A UI audit comparing button styles, type scales, and color usage across 24 product websites before the design system.",
            suggestion: "",
          },
        ],
      },
      // {
      //   heading: "My Role",
      //   body: "I stepped into the intersection of design, product, and engineering — owning the design system as a product owner. I managed a team of 3 designers and served as the primary bridge between design leadership, business stakeholders and engineering squads across the organization.",
      //   photos: [
      //     {
      //       src: "/images/cases/blackstone/team-structure.png",
      //       alt: "Design system team structure",
      //       caption:
      //         "How the design system team interfaced with product squads — a hub-and-spoke model with embedded system contributors in each squad.",
      //       suggestion:
      //         "📸 PHOTO SUGGESTION: Create a simple org diagram in FigJam showing the design system team at the center and product squads around it. Even a photo of a whiteboard sketch from an early planning session is more authentic than a polished org chart. Shows real process.",
      //     },
      //   ],
      // },
      {
        heading: "Token Architecture",
        body: "We adopted a three-tier token architecture — primitive values mapped to semantic tokens mapped to component-level tokens — enabling per-brand theming without forking the system. Tokens were version-controlled and published via GitHub CI/CD pipelines.",
        photos: [
          {
            src: "/images/bx_spacing.png",
            alt: "Design token hierarchy: primitive → semantic → component",
            caption:
              "The three-tier token model. Primitive tokens define raw values; semantic tokens define intent; component tokens define usage. Brand themes swap the primitive layer without touching components.",
            suggestion: "",          
          },
          {
            src: "/images/spacing_examples.png",
            alt: "React component documentation",
            caption:
              "Component documentation in React, with each component ships with usage guidelines, prop tables, and do/don't examples.",
            suggestion: "",
          },
        ],
      },
      {
        heading: "Outcome",
        body: "30% reduction in design iteration cycles. 41 enterprise products aligned on a single shared system. Measurably faster feature shipping velocity across product teams, with newly onboarded engineers productive in the design system within their first week.",
        photos: [
          {
            src: "/images/bx_product-pages.png",
            alt: "After: visual consistency across products",
            caption:
              "The same 41 product websites from the audit — now visually consistent, using shared components and tokens. Before/after is the most powerful proof of system impact.",
            suggestion: "",
          },
        ],
      },
    ],
  },
  {
    slug: "netflix-operations-systems",
    emoji: "🎬",
    title: "Netflix Product Operations & Vendor Systems",
    subtitle: "Enterprise SaaS · PLM · Operational Infrastructure",
    tags: ["PLM Systems", "Airtable", "Operations", "B2B"],
    status: "Published",
    statusColor: "#4caf85",
    preview:
      "Built the operational infrastructure that coordinated 8+ vendor relationships across PLM systems and Airtable — designing the data architecture, workflow automation, and cross-functional tracking systems that kept high-velocity product timelines on schedule.",
    coverPhoto: {
      src: "/images/overview.png",
      alt: "Netflix product operations system overview",
      caption:
        "The Airtable operational system of record — a single source of truth for 8+ vendor relationships, surfacing blockers before they hit the critical path.",
      suggestion:
        "",
    },
    sections: [
      {
        heading: "The Problem",
        body: "Coordinating 8+ vendor relationships across a high-velocity product pipeline had no single source of truth. Status lived in email threads and siloed spreadsheets — blockers surfaced too late, and cross-functional teams were constantly misaligned on timelines and deliverables.",
        photos: [
          {
            src: "/images/product dev.png",
            alt: "Fragmented before state: siloed spreadsheets and emails",
            caption:
              "The before state: vendor status scattered across disconnected spreadsheets and email threads, with no shared visibility across design, production, and retail teams.",
            suggestion:
              "",
          },
        ],
      },
      // {
      //   heading: "PLM System Management",
      //   body: "Managed end-to-end product workflows inside PLM (Product Lifecycle Management) software — configuring product records, maintaining data integrity across vendor submissions, and ensuring specification accuracy from initial brief through final approval. Served as the operational bridge between internal stakeholders and external manufacturing partners navigating the system.",
      //   photos: [
      //     {
      //       src: "/images/cases/netflix/plm-workflow.png",
      //       alt: "PLM system workflow and product record management",
      //       caption:
      //         "PLM workflow stages owned end-to-end: brief → vendor submission → review → approval → production handoff. Each stage gated on data integrity checks.",
      //       suggestion:
      //         "📸 PHOTO SUGGESTION: Screenshot of the PLM system (Centric, Arena, Backbone, or whichever you used) showing a product record or workflow status board. Annotate the stages you owned with blue brackets or labels. If the system is confidential, rebuild the workflow as a clean diagram in Figma — the stages and gates matter more than the specific UI.",
      //     },
      //   ],
      // },
      {
        heading: "Airtable as Operational Infrastructure",
        body: "Designed and maintained the Airtable base that became the team's operational system of record. This wasn't filling in a template — it meant structuring the database schema, building cross-table relationships, creating filtered views for each stakeholder group (design, production, retail), and setting up automations to surface blockers before they hit the critical path.",
        photos: [
          {
            src: "/images/vendor.png",
            alt: "Airtable database schema and cross-table relationships",
            caption:
              "The Airtable schema: linked tables for Vendors, Products, Timeline Milestones, and Blockers — with role-specific filtered views so each team saw only what was relevant to them.",
            suggestion:
              "",
          },
          // {
          //   src: "/images/vendor.png",
          //   alt: "Airtable automation setup for blocker surfacing",
          //   caption:
          //     "Automation rules: status changes triggered Slack notifications to the relevant team lead — ensuring blockers were visible within hours, not days.",
          //   suggestion:
          //     "📸 PHOTO SUGGESTION: Screenshot of your Airtable automations panel showing a trigger-action setup. Even one well-configured automation (e.g. 'When Status = Blocked → Notify [team lead]') demonstrates systems thinking that most PMs can't show evidence of.",
          // },
        ],
      },
      {
        heading: "Cross-functional Coordination System",
        body: "Built a shared timeline view giving each team visibility into upstream dependencies — design approvals blocking production starts, production completion blocking retail setup. This made the critical path legible to non-technical stakeholders without requiring them to understand the underlying data model.",
        photos: [
          {
            src: "/images/vendor tracker.png",
            alt: "Cross-functional timeline view showing dependencies",
            caption:
              "8 vendor workstreams visible in a single view, with dependency relationships surfacing which delays would cascade.",
            suggestion:
              "",
          },
        ],
      },
      {
        heading: "Outcome",
        body: "The operational system became the template adopted for subsequent product lines — proof that well-architected internal tooling directly determines whether cross-functional teams ship on time. This role demonstrated that product operations and data architecture skills transfer directly to Technical PM work: understanding how systems store, move, and surface information is the same cognitive muscle whether you're configuring an Airtable base or writing a product spec for an API.",
      },
    ],
  },
  {
    slug: "equityzen-investor-marketplace",
    emoji: "📈",
    title: "EquityZen Investor Marketplace",
    subtitle: "Fintech · UX Research · Stakeholder Alignment",
    tags: ["Fintech", "Research", "B2B"],
    status: "Published",
    statusColor: "#4caf85",
    preview:
      "Launched a structured UX research program at a fintech investment platform — turning user interviews into product decisions that aligned Sales, Engineering, and Product leadership.",
    coverPhoto: {
      src: "/images/ez_dashboard.png",
      alt: "EquityZen research repository in MixPanel",
      caption:
        " We began building features to help increase deal flow while tailoring investment recommenedations to the user, surfacing the conflicting beliefs each team held about user behavior. (Adjusted for confidentiality)",
      suggestion:
        "",
    },
    sections: [
      {
        heading: "The Problem",
        body: "EquityZen's internal tools were built reactively with no user research foundation. Product, Sales, and Engineering each held different — and often conflicting — assumptions about user needs, leading to misaligned priorities and repeated rework.",
        photos: [
          {
            src: "/images/research.png",
            alt: "Feature building exercise",
            caption:
              "The research repository in MixPanel. Insights are tagged by theme, linked to evidence, and mapped to open product questions. (Adjusted for confidentiality)",
            suggestion:
              "",
          },
        ],
      },
      {
        heading: "Research Methods",
        body: "I established a structured research cadence: bi-weekly moderated user interviews, task-based usability tests on prototypes, and async prototype feedback sessions with power users in the Sales and Deals team.",
        photos: [
          {
            src: "/images/ez_flow-maps.png",
            alt: "User interview discussion guide",
            caption:
              "Built flowmaps and user personas after conducting our user interviews. The new workflows were structured around mental models and not feature preferences. (Adjusted for confidentiality)",
            suggestion:
              "",
          },
          {
            src: "/images/ez_affinity-map.png",
            alt: "Affinity mapping of research findings",
            caption:
              "Post-interview affinity mapping, 80+ observations from 12 interviews clustered into 6 actionable insight themes. (Adjusted for confidentiality)",
            suggestion:
              "",
          },
        ],
      },
      {
        heading: "From Insights to Product",
        body: "Each research cycle fed directly into sprint planning. I created a living insight repository in Notion — tagged by theme, linked to supporting quotes, and connected to open product questions. Findings stopped living in research docs that nobody read.",
        photos: [
          {
            src: "/images/ez_final-designs.png",
            alt: "Research insights mapped to shipped features",
            caption:
              "The insight-to-feature chain: research observation → validated insight → product decision → shipped feature. Closing this loop is what made the research program stick. (Adjusted for confidentiality)",
            suggestion:
              "",
          },
        ],
      },
      {
        heading: "Outcome",
        body: "Research insights directly shaped product direction for the platform. Complex internal tools shipped for the Sales and Deals team, improving dealflow efficiency. Each research method became a permanent fixture in the product development cycle.",
      },
    ],
  },
  {
    slug: "prosek-financial-ux",
    emoji: "",
    title: "Financial Services UX Strategy",
    subtitle: "Prosek Partners · Neuberger Berman · Stellex Capital",
    tags: ["Financial Services", "UX Strategy", "Interaction Design"],
    status: "Current",
    statusColor: "#0F2D52",
    preview:
      "Owning end-to-end UX strategy and interaction design for three financial services clients — scoping projects, defining information architecture, designing detailed interactions, and ensuring quality implementation across digital products for institutional investors.",
    coverPhoto: {
      src: "/images/nb_sitemap.png",
      alt: "Neuberger Berman site information architecture",
      caption: "Full site architecture for neubergereberman.com — mapping all page types, navigational hierarchy, and content relationships across the corporate investor experience.",
      suggestion: "",
    },
    sections: [
      {
        heading: "Discovery",
        body: "Every engagement begins with a structured discovery phase — stakeholder interviews, content audits, and competitive analysis. For Neuberger Berman, this meant mapping the full corporate site architecture across all investor segments and product lines before a single wireframe was drawn. The sitemap below represents the output of that discovery: a comprehensive IA defining 30+ page templates, navigational hierarchy, and the logic governing IP-based content personalization for regional audiences.",
        photos: [
          {
            src: "/images/nb_sitemap.png",
            alt: "Neuberger Berman corporate site information architecture",
            caption:
              "Full site architecture for neubergereberman.com — mapping all page types, navigational hierarchy, and content relationships across the corporate investor experience.",
            suggestion: "",
          },
        ],
      },
      {
        heading: "Neuberger Berman",
        body: "Designing investor-facing digital experiences for one of the largest independent asset managers. Work spans information architecture, data presentation design, and interaction patterns for complex financial products — with particular attention to how institutional investors consume and act on portfolio data.",
      },
      {
        heading: "Interaction Design",
        body: "With the architecture defined, work moves into detailed interaction design — wireframes, annotated flows, and component-level specs handed off directly to engineering. Every screen is pressure-tested against real user workflows before moving to high-fidelity, ensuring implementation review catches edge cases rather than structural issues.",
        photos: [
          {
            src: "/images/wireframes.png",
            alt: "Wireframes and interaction design for financial services clients",
            caption:
              "Mid-fidelity wireframes documenting page structure, component hierarchy, and interaction states — annotated for engineering handoff.",
            suggestion: "",
          },
        ],
      },
      {
        heading: "Approach",
        body: "Financial services design demands a different discipline than consumer product work. The bar for information density, precision, and regulatory compliance is significantly higher. My process starts with deep stakeholder interviews, maps to existing mental models in the domain, and tests against actual workflows before any pixels are finalized.",
      },
      {
        heading: "Implementation",
        body: "Final designs are reviewed against live implementation to ensure fidelity — checking spacing, interaction behavior, responsive breakpoints, and accessibility. Below are the shipped Neuberger Berman homepage and What We Do pages across desktop and mobile.",
        deviceViewer: {
          desktopSrc: "/images/desktop_home.png",
          mobileSrc: "/images/mobile_home.png",
          alt: "Neuberger Berman homepage — desktop and mobile",
        },
      },
    ],
  },
];
