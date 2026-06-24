export const articleChannels = {
  en: [
    {
      title: "GitHub Blog (MDX)",
      description:
        "Primary technical blog. Long-form engineering posts, architecture notes, and build logs should live under the portfolio domain first.",
      url: "/articles",
      tag: "Primary"
    },
    {
      title: "Notion",
      description: "Project notes, speaking materials, and technical recaps.",
      url: "https://atlantic-andesaurus-8b9.notion.site/9a5c8aaf868f436eaf1c035404335a5e",
      tag: "Archive"
    },
    {
      title: "Medium",
      description:
        "Global promotion channel for English-facing AWS, AI agent, architecture, and hackathon content.",
      url: "https://medium.com/@men16922",
      tag: "Global"
    },
    {
      title: "Velog",
      description:
        "Korean archive channel. Keep it active, but reduce new-post frequency and reserve it for selective notes.",
      url: "https://velog.io/@men16922/posts",
      tag: "Korean"
    },
    {
      title: "AWS / GCP / Azure Community",
      description:
        "Cloud-platform community posts are published natively on each platform, then indexed back into this hub.",
      url: "https://builder.aws.com/community/%40cbm?tab=badges",
      tag: "Platform"
    }
  ],
  ko: [
    {
      title: "GitHub Blog (MDX)",
      description:
        "메인 기술 블로그입니다. 장문 엔지니어링 글, 아키텍처 노트, 빌드 로그를 먼저 포트폴리오 도메인에 쌓습니다.",
      url: "/kr/articles",
      tag: "Primary"
    },
    {
      title: "Notion",
      description: "프로젝트 노트, 발표 자료, 기술 회고 아카이브입니다.",
      url: "https://atlantic-andesaurus-8b9.notion.site/9a5c8aaf868f436eaf1c035404335a5e",
      tag: "Archive"
    },
    {
      title: "Medium",
      description:
        "AWS, AI Agent, 아키텍처, 해커톤 관련 영문 콘텐츠를 노출하는 글로벌 홍보 채널입니다.",
      url: "https://medium.com/@men16922",
      tag: "Global"
    },
    {
      title: "Velog",
      description:
        "한글 아카이브 채널입니다. 유지하되 신규 글 빈도는 낮게 가져갑니다.",
      url: "https://velog.io/@men16922/posts",
      tag: "Korean"
    },
    {
      title: "AWS / GCP / Azure Community",
      description:
        "클라우드 플랫폼 커뮤니티 글은 각 플랫폼에 직접 발행하고, 여기서 다시 집계합니다.",
      url: "https://builder.aws.com/community/%40cbm?tab=badges",
      tag: "Platform"
    }
  ]
};

export const articlePlatforms = {
  en: [
    {
      title: "AWS Community",
      type: "Cloud community",
      mark: "A",
      url: ""
    },
    {
      title: "Google Cloud",
      type: "Cloud community",
      mark: "G",
      url: ""
    },
    {
      title: "Medium",
      type: "Global publication",
      mark: "M",
      url: "https://medium.com/@men16922"
    },
    {
      title: "Velog",
      type: "Korean publication",
      mark: "V",
      url: "https://velog.io/@men16922/posts"
    },
    {
      title: "Notion",
      type: "Notes and archive",
      mark: "N",
      url: "https://atlantic-andesaurus-8b9.notion.site/08-Articles-1e94c2420ac4808790f7f7ab47826bc5?pvs=73"
    }
  ],
  ko: [
    {
      title: "AWS Community",
      type: "클라우드 커뮤니티",
      mark: "A",
      url: ""
    },
    {
      title: "Google Cloud",
      type: "클라우드 커뮤니티",
      mark: "G",
      url: ""
    },
    {
      title: "Medium",
      type: "글로벌 퍼블리케이션",
      mark: "M",
      url: "https://medium.com/@men16922"
    },
    {
      title: "Velog",
      type: "한국어 퍼블리케이션",
      mark: "V",
      url: "https://velog.io/@men16922/posts"
    },
    {
      title: "Notion",
      type: "노트 및 아카이브",
      mark: "N",
      url: "https://atlantic-andesaurus-8b9.notion.site/08-Articles-1e94c2420ac4808790f7f7ab47826bc5?pvs=73"
    }
  ]
};

export const articles = [
  {
    slug: "technical-brand-system",
    lang: "en",
    title: "Designing a Technical Brand System Around One Portfolio URL",
    excerpt:
      "Why the portfolio site should be the control plane, GitHub Blog the primary publication surface, and external channels the distribution layer.",
    publishedAt: "2026-06-24",
    order: 3,
    category: "Brand Strategy",
    readTime: "6 min read",
    source: "GitHub Blog",
    sourcePath: "/articles/en/technical-brand-system.mdx"
  },
  {
    slug: "slackops-agent-architecture",
    lang: "en",
    title:
      "SlackOps Agent Architecture: Turning Alerts into Operational Context",
    excerpt:
      "How an AI DevOps agent assembles operational context, routes actions, and shortens the path from alert to response.",
    publishedAt: "2026-06-24",
    order: 1,
    category: "AI Agents",
    readTime: "7 min read",
    source: "GitHub Blog",
    sourcePath: "/articles/en/slackops-agent-architecture.mdx"
  },
  {
    slug: "github-blog-mdx-strategy",
    lang: "en",
    title: "Why GitHub Blog Should Be the Primary Technical Blog",
    excerpt:
      "Owning the main technical archive inside the portfolio domain improves consistency, discoverability, and long-term brand control.",
    publishedAt: "2026-06-24",
    order: 2,
    category: "Writing System",
    readTime: "5 min read",
    source: "GitHub Blog",
    sourcePath: "/articles/en/github-blog-mdx-strategy.mdx"
  },
  {
    slug: "personal-technical-brand-system",
    lang: "ko",
    title: "하나의 포트폴리오 URL 중심으로 기술 브랜드를 설계하는 방법",
    excerpt:
      "포트폴리오를 단순 소개 페이지가 아니라 프로젝트, 글, 자격증, 해커톤을 통합하는 브랜드 허브로 만드는 방식.",
    publishedAt: "2026-06-24",
    order: 2,
    category: "브랜드 전략",
    readTime: "6분",
    source: "GitHub Blog",
    sourcePath: "/articles/ko/personal-technical-brand-system.mdx"
  },
  {
    slug: "slackops-agent-architecture-ko",
    lang: "ko",
    title: "SlackOps Agent 아키텍처 정리: 알림을 운영 맥락으로 바꾸기",
    excerpt:
      "AI DevOps Agent가 운영 맥락을 조립하고 액션을 라우팅해 알림부터 대응까지의 시간을 줄이는 구조.",
    publishedAt: "2026-06-24",
    order: 1,
    category: "AI Agent",
    readTime: "7분",
    source: "GitHub Blog",
    sourcePath: "/articles/ko/slackops-agent-architecture-ko.mdx"
  }
];

export function getArticlesByLang(lang) {
  return articles
    .filter(article => article.lang === lang)
    .sort(
      (a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.order - b.order
    );
}

export function getArticleBySlug(lang, slug) {
  return articles.find(
    article => article.lang === lang && article.slug === slug
  );
}
