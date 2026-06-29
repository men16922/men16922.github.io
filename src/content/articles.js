// Articles are not self-hosted. Each platform is a tab; each article title links
// out to its external page. `articleChannels` defines the tabs (labels/landing
// URLs, localized for the UI language); `articles` holds the per-post entries
// grouped by `platform` key. Posts are shown on both the EN and KO routes — only
// the surrounding UI copy changes by language.

export const articleChannels = {
  en: [
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
  }
];

export function getArticlesByPlatform(platformKey) {
  return articles.filter(article => article.platform === platformKey);
}

// Tab list for the UI language (labels/descriptions localized; same platforms).
export function getPlatforms(lang) {
  return articleChannels[lang] || articleChannels.en;
}
