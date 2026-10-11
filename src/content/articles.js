// Each platform is a tab. Most articles link out to their external page; the
// "portfolio" channel holds posts published on this site itself (markdown in
// public/posts/<slug>/<lang>.md, rendered at /articles/<slug> and
// /kr/articles/<slug>). `articleChannels` defines the tabs (labels/landing URLs,
// localized for the UI language); `articles` holds the per-post entries grouped
// by `platform` key. Posts without a `lang` are shown on both the EN and KO
// routes; posts with one only on that language's route.

export const articleChannels = {
  en: [
    {
      key: "portfolio",
      title: "Portfolio",
      description:
        "Long-form write-ups published on this site, in English and Korean.",
      url: "/articles",
      tag: "Self-hosted"
    },
    {
      key: "medium",
      title: "Medium",
      description:
        "Global publication channel for English AWS, AI agent, and architecture posts.",
      url: "https://medium.com/@men16922",
      tag: "Global"
    },
    {
      key: "velog",
      title: "Velog",
      description:
        "Korean archive — selective engineering notes and write-ups.",
      url: "https://velog.io/@men16922/posts",
      tag: "Korean"
    },
    {
      key: "cloud",
      title: "AWS Community",
      description: "Cloud-platform community posts published natively on AWS.",
      url: "https://builder.aws.com/community/%40cbm?tab=badges",
      tag: "Platform"
    },
    {
      key: "notion",
      title: "Notion",
      description: "Project notes, speaking materials, and technical recaps.",
      url: "https://atlantic-andesaurus-8b9.notion.site/9a5c8aaf868f436eaf1c035404335a5e",
      tag: "Archive"
    },
    {
      key: "github",
      title: "GitHub",
      description: "Source, build logs, and open-source work.",
      url: "https://github.com/men16922",
      tag: "Code"
    }
  ],
  ko: [
    {
      key: "portfolio",
      title: "Portfolio",
      description: "이 포트폴리오에 직접 발행한 글입니다.",
      url: "/kr/articles",
      tag: "Self-hosted"
    },
    {
      key: "medium",
      title: "Medium",
      description: "Global 채널",
      url: "https://medium.com/@men16922",
      tag: "Global"
    },
    {
      key: "velog",
      title: "Velog",
      description: "한글 채널",
      url: "https://velog.io/@men16922/posts",
      tag: "Korean"
    },
    {
      key: "cloud",
      title: "AWS Community",
      description: "AWS Community에 작성한 글",
      url: "https://builder.aws.com/community/%40cbm?tab=badges",
      tag: "Platform"
    },
    {
      key: "notion",
      title: "Notion",
      description: "프로젝트 노트, 발표 자료, 기술 회고 아카이브입니다.",
      url: "https://atlantic-andesaurus-8b9.notion.site/9a5c8aaf868f436eaf1c035404335a5e",
      tag: "Archive"
    },
    {
      key: "github",
      title: "GitHub",
      description: "소스, 빌드 로그, 오픈소스 작업입니다.",
      url: "https://github.com/men16922",
      tag: "Code"
    }
  ]
};

// `platform` matches an `articleChannels[].key`. `url` is the external post.
export const articles = [
  // ---- Portfolio (published on this site) ----
  {
    platform: "portfolio",
    lang: "en",
    slug: "tether",
    title: "Fix the simulator, not the policy",
    excerpt:
      "How Tether uses NVIDIA Nemotron on Nebius Token Factory and NVIDIA Newton to find the physics a simulator gets wrong, and to say how sure it is.",
    category: "Physical AI · Simulation",
    readTime: "15 min read",
    date: "2026-10-11",
    url: "/articles/tether",
    source: "/posts/tether/en.md"
  },
  {
    platform: "portfolio",
    lang: "ko",
    slug: "tether",
    title: "정책 대신 시뮬레이터를 고치기",
    excerpt:
      "Tether가 Nebius Token Factory의 NVIDIA Nemotron과 NVIDIA Newton으로 시뮬레이터가 틀린 물리를 찾아내고, 그 답을 얼마나 확신하는지까지 말하는 방법.",
    category: "Physical AI · 시뮬레이션",
    readTime: "13분",
    date: "2026-10-11",
    url: "/kr/articles/tether",
    source: "/posts/tether/ko.md"
  },
  // ---- Medium ----
  {
    platform: "medium",
    title:
      "Democratizing Branding: How Brandy Makes Professional Branding Accessible",
    excerpt:
      "Turning professional brand creation into a fast, AI-assisted workflow anyone can run.",
    category: "Product",
    readTime: "6 min read",
    url: "https://medium.com/@men16922/democratizing-branding-how-brandy-makes-professional-branding-accessible-3c5e45cacec9"
  },
  {
    platform: "medium",
    title:
      "Building a Thin DevOps Agent on AWS with Self-Hosted n8n, Lambda, and Slack",
    excerpt:
      "A lightweight, cost-aware DevOps agent wiring n8n, Lambda, and Slack on AWS.",
    category: "AI Agents · DevOps",
    readTime: "8 min read",
    url: "https://medium.com/@men16922/building-a-thin-devops-agent-on-aws-with-self-hosted-n8n-lambda-and-slack-6e3677887b05"
  },
  {
    platform: "medium",
    title:
      "AWS-Native Observability on EKS Fargate: A Dual-Pipeline ADOT Architecture",
    excerpt:
      "A dual-pipeline ADOT setup for metrics and traces on EKS Fargate.",
    category: "Observability",
    readTime: "9 min read",
    url: "https://medium.com/@men16922/aws-native-observability-on-eks-fargate-a-dual-pipeline-adot-architecture-7ac987a8056c"
  },
  {
    platform: "medium",
    title:
      "Building an Explainable EV Charging Agent on Google Cloud: Gemini, BigQuery, and Hybrid Routing",
    excerpt:
      "An explainable EV-charging agent combining Gemini, BigQuery, and hybrid routing.",
    category: "AI Agents · GCP",
    readTime: "9 min read",
    url: "https://medium.com/@men16922/building-an-explainable-ev-charging-agent-on-google-cloud-gemini-bigquery-and-hybrid-routing-6c84ff5d95c2"
  },
  // ---- Velog (Korean) ----
  {
    platform: "velog",
    title: "AI가 만드는 당신의 브랜드, 5분 만에 완성",
    excerpt: "AI로 전문가 수준의 브랜딩을 5분 만에 완성하는 과정.",
    category: "프로덕트",
    readTime: "6분",
    url: "https://velog.io/@men16922/AI%EA%B0%80-%EB%A7%8C%EB%93%9C%EB%8A%94-%EB%8B%B9%EC%8B%A0%EC%9D%98-%EB%B8%8C%EB%9E%9C%EB%93%9C-5%EB%B6%84-%EB%A7%8C%EC%97%90-%EC%99%84%EC%84%B1"
  },
  {
    platform: "velog",
    title: "$0.15로 보안팀도 승인할 수 있는 DevOps AI 에이전트",
    excerpt: "비용과 보안을 모두 만족하는 경량 DevOps AI 에이전트 설계기.",
    category: "AI Agent · DevOps",
    readTime: "8분",
    url: "https://velog.io/@men16922/0.15%EC%97%90-%EB%B3%B4%EC%95%88%ED%8C%80%EB%8F%84-%EC%8A%B9%EC%9D%B8%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-DevOps-AI-%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8"
  },
  // ---- AWS Community ----
  {
    platform: "cloud",
    title:
      "Building a Thin DevOps Agent on AWS with Self-Hosted n8n, Lambda, and Slack",
    excerpt:
      "A lightweight, cost-aware DevOps agent wiring n8n, Lambda, and Slack on AWS.",
    category: "AI Agents · DevOps",
    readTime: "8 min read",
    url: "https://builder.aws.com/content/3DRiyFtp29ROozNQF80i9NyShlH/building-a-thin-devops-agent-on-aws-with-self-hosted-n8n-lambda-and-slack"
  },
  {
    platform: "cloud",
    title:
      "AWS-Native Observability on EKS Fargate: A Dual-Pipeline ADOT Architecture",
    excerpt:
      "A dual-pipeline ADOT setup for metrics and traces on EKS Fargate.",
    category: "Observability",
    readTime: "9 min read",
    url: "https://builder.aws.com/content/3DfUroxNF11M8acWUP2BiqH8g9v/aws-native-observability-on-eks-fargate-a-dual-pipeline-adot-architecture"
  },
  {
    platform: "cloud",
    title:
      "Building a Safe Event-Driven DevOps Agent with AWS Lambda and Amazon DynamoDB",
    excerpt:
      "An event-driven DevOps agent with safe action gating on Lambda and DynamoDB.",
    category: "AI Agents · DevOps",
    readTime: "7 min read",
    url: "https://builder.aws.com/content/3FXdExAw4SeFqYwNKMfK7Qo1xBf/building-a-safe-event-driven-devops-agent-with-aws-lambda-and-amazon-dynamodb"
  },
  // ---- Notion ----
  {
    platform: "notion",
    title: "Qwen Kubernetes",
    excerpt: "Notes on serving Qwen models on Kubernetes.",
    category: "LLM · Kubernetes",
    readTime: "5 min read",
    url: "https://atlantic-andesaurus-8b9.notion.site/Qwen-Kubernetes-3a94c2420ac4801cbe99e36c16ed90fd?pvs=74"
  }
];

export function getArticlesByPlatform(platformKey, lang) {
  return articles.filter(
    article =>
      article.platform === platformKey &&
      (!article.lang || !lang || article.lang === lang)
  );
}

// A post published on this site, in the given language.
export function getPost(slug, lang) {
  return articles.find(
    article => article.slug === slug && article.lang === lang
  );
}

// The same post in the other language, if it exists.
export function getTranslation(post) {
  return articles.find(
    article => article.slug === post.slug && article.lang !== post.lang
  );
}

// Tab list for the UI language (labels/descriptions localized; same platforms).
export function getPlatforms(lang) {
  return articleChannels[lang] || articleChannels.en;
}
