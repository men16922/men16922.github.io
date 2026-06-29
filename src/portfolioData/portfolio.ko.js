// 최병민 포트폴리오 한글 버전

import {articleChannels} from "../content/articles";
import emoji from "react-easy-emoji";
import splashAnimation from "../assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: false
};

const greeting = {
  username: "최병민 (Paul)",
  title: "안녕하세요, 최병민입니다",
  subTitle: `
• Java, Spring Boot, Kafka, Redis, RDB 기반 분산 시스템을 만드는 백엔드 엔지니어
• AWS, Kubernetes, 서버리스, Observability, 플랫폼 자동화를 실무로 다뤄 온 클라우드 아키텍트
• Bedrock, 멀티 에이전트 워크플로우, DevOps 자동화에 집중하는 AI Agent Builder
  `,
  resumeLink: "https://www.notion.so/0dab080e9ccf490a8391be50fa01448f",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/men16922",
  linkedin: "www.linkedin.com/in/paul-choi-99a192244",
  gmail: "men16922@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@men16922",
  velog: "https://velog.io/@men16922/posts",
  stackoverflow: "",
  display: true
};

const skillsSection = {
  title: "BACKEND · CLOUD · AI AGENT",
  subTitle:
    "분산 백엔드, 클라우드 아키텍처, AI Agent 시스템을 설계하고 구현합니다",
  skills: [
    emoji(
      "⚡ Java, Spring Boot, 마이크로서비스 아키텍처 기반 분산 백엔드 서비스 설계 및 개발"
    ),
    emoji(
      "⚡ AWS와 Kubernetes (EKS on EC2/Fargate) 환경에서 프로덕션 워크로드 배포 및 운영"
    ),
    emoji(
      "⚡ CloudFormation, AWS SAM, GitHub Actions로 인프라 및 CI/CD 파이프라인 자동화"
    ),
    emoji(
      "⚡ 서버리스 아키텍처 구축 및 오케스트레이션 — Lambda (multi-agent), API Gateway, DynamoDB, S3, Fargate"
    ),
    emoji(
      "⚡ OpenTelemetry (ADOT), Prometheus, Grafana, CloudWatch를 활용한 Observability 스택 구현"
    ),
    emoji(
      "⚡ AWS Bedrock과 LangChain 기반 에이전트 자동화를 위한 Generative AI 워크플로우 통합"
    ),
    emoji(
      "⚡ Claude Code와 Kiro를 활용한 AI 지원 개발, 디자인 자동화, LLMOps 실험, MLOps 실습"
    )
  ],
  skillCategories: [
    {
      category: "Core B/E",
      skills: [
        {skillName: "Java / SpringBoot", fontAwesomeClassname: "fab fa-java"},
        {skillName: "Node.js / Express", fontAwesomeClassname: "fab fa-node"},
        {skillName: "Python", fontAwesomeClassname: "fab fa-python"}
      ]
    },
    {
      category: "클라우드 & DevOps",
      skills: [
        {
          skillName: "AWS (EKS, ECS, Lambda, Fargate)",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "GCP (GKE, Cloud Run, BigQuery)",
          fontAwesomeClassname: "fab fa-google"
        },
        {
          skillName: "AWS SAM / CDK / CFN",
          fontAwesomeClassname: "fas fa-code-branch"
        },
        {
          skillName: "GitHub Actions / Argo CD",
          fontAwesomeClassname: "fab fa-github"
        },
        {
          skillName: "Docker / Kubernetes",
          fontAwesomeClassname: "fab fa-docker"
        },
        {skillName: "Helm / Kustomize", fontAwesomeClassname: "fas fa-toolbox"}
      ]
    },
    {
      category: "AI & Automation",
      skills: [
        {skillName: "AWS Bedrock", fontAwesomeClassname: "fab fa-aws"},
        {
          skillName: "Claude Code / Kiro",
          fontAwesomeClassname: "fas fa-brain"
        },
        {skillName: "LangChain", fontAwesomeClassname: "fas fa-link"}
      ]
    },
    {
      category: "Observability",
      skills: [
        {
          skillName: "OpenTelemetry / ADOT",
          fontAwesomeClassname: "fas fa-chart-line"
        },
        {
          skillName: "Prometheus / Grafana",
          fontAwesomeClassname: "fas fa-chart-area"
        },
        {skillName: "CloudWatch / X-Ray", fontAwesomeClassname: "fas fa-eye"},
        {skillName: "ELK / OpenSearch", fontAwesomeClassname: "fas fa-search"}
      ]
    },
    {
      category: "데이터 & 메시징",
      skills: [
        {skillName: "Kafka", fontAwesomeClassname: "fas fa-stream"},
        {
          skillName: "Redis / DynamoDB",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          skillName: "PostgreSQL / MySQL / MongoDB",
          fontAwesomeClassname: "fas fa-database"
        }
      ]
    },
    {
      category: "프론트엔드",
      skills: [
        {skillName: "React", fontAwesomeClassname: "fab fa-react"},
        {skillName: "Streamlit", fontAwesomeClassname: "fas fa-chart-bar"}
      ]
    }
  ],
  display: true
};

const techStack = {
  viewSkillBars: true,
  experienceCategories: [
    {
      category: "Core 백엔드",
      experience: [
        {Stack: "Java / Spring Boot", progressPercentage: "90%"},
        {
          Stack: "시스템 & 서비스 아키텍처 (MSA / Event-Driven / SaaS)",
          progressPercentage: "85%"
        },
        {
          Stack: "Scalable Distributed System Design",
          progressPercentage: "80%"
        },
        {Stack: "Python", progressPercentage: "55%"},
        {Stack: "Node.js / Express", progressPercentage: "50%"}
      ]
    },
    {
      category: "클라우드 네이티브 플랫폼",
      experience: [
        {
          Stack: "AWS / EKS (클라우드 네이티브 운영)",
          progressPercentage: "80%"
        },
        {
          Stack: "GCP / GKE (Associate Cloud Engineer)",
          progressPercentage: "65%"
        },
        {
          Stack: "Infrastructure as Code (Terraform / AWS SAM / CDK)",
          progressPercentage: "80%"
        },
        {
          Stack: "GitOps & CI/CD 자동화 (Argo CD / GitHub Actions)",
          progressPercentage: "80%"
        },
        {
          Stack: "서버리스 아키텍처 (Lambda, API Gateway, DynamoDB, Fargate)",
          progressPercentage: "75%"
        }
      ]
    },
    {
      category: "SRE & Observability",
      experience: [
        {
          Stack: "Site Reliability Engineering (SRE)",
          progressPercentage: "75%"
        },
        {
          Stack: "관찰 가능성 (OpenTelemetry / ADOT / Prometheus / ELK)",
          progressPercentage: "75%"
        }
      ]
    },
    {
      category: "Messaging & Data",
      experience: [
        {Stack: "Kafka / 이벤트 기반 시스템", progressPercentage: "75%"},
        {Stack: "Redis / ElastiCache", progressPercentage: "70%"},
        {
          Stack: "RDBMS / PostgreSQL & MySQL & Oracle",
          progressPercentage: "70%"
        },
        {Stack: "NoSQL / DynamoDB / MongoDB", progressPercentage: "70%"}
      ]
    },
    {
      category: "AI & 자동화",
      experience: [
        {
          Stack: "LLM 통합 (AWS Bedrock / Titan Image Generator / LangChain)",
          progressPercentage: "70%"
        },
        {
          Stack: "Agentic AI & DevOps 자동화 (Strands Agents / AWS Lambda)",
          progressPercentage: "70%"
        },
        {
          Stack: "AI 지원 개발 (Claude Code / Kiro)",
          progressPercentage: "65%"
        }
      ]
    }
  ]
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "백엔드 개발자 / Technical Architect",
      company: "현대오토에버",
      companylogo: require("../assets/images/hyundaiLogo2.png"),
      date: "2023 – 현재",
      desc: "글로벌 통합 앱을 포함한 현대자동차 글로벌 전기차 충전 플랫폼(eMSP)의 백엔드 아키텍처를 주도했습니다.",
      descBullets: [
        "Spring Boot & Kafka 기반 구독/결제/차량/회원 서비스 설계",
        "OAuth2 (HMG ID 2.0) 및 HMG Pay 2.0 정기 결제 연동",
        "BFF/BFI 게이트웨이 구축 및 AWS EKS Fargate 환경 배포",
        "Eventuate Tram 기반 도메인 이벤트를 MongoDB로 적재해 분석 파이프라인 구성",
        "Observability 및 CI/CD 파이프라인 설계 주도",
        "AWS 기반 EV DevOps Agent PoC 설계 및 구현 - Strands Agents와 AWS Lambda를 활용해 장애 원인 분석 자동화",
        "AWS re:Invent 2025 회사 대표 참가자로 선발되어 Agentic AI, EKS, 클라우드 네이티브 패턴 기반 HMG 클라우드 아키텍처 리캡 세션 발표"
      ]
    },
    {
      role: "SRE 엔지니어",
      company: "빗썸코리아",
      companylogo: require("../assets/images/bithumb.png"),
      date: "2022 – 2023",
      desc: "대용량 암호화폐 거래소 인프라의 시스템 안정성 및 모니터링 개선",
      descBullets: [
        "Slack 알림 기능을 갖춘 배치 모니터링 플랫폼 개발",
        "재시도 로직을 갖춘 Kafka 기반 로그 알림 시스템 구축",
        "거래/FDS 일관성 추적 대시보드 생성",
        "Spring 통합을 통한 AWS Secrets Manager로 시크릿 마이그레이션",
        "사후 분석 문화 및 SRE 대시보드 도입 주도"
      ]
    },
    {
      role: "백엔드 개발자",
      company: "다날",
      companylogo: require("../assets/images/Danal.png"),
      date: "2020 – 2022",
      desc: "PG 플랫폼을 위한 글로벌/국내 결제 API 및 간편 결제 솔루션 개발",
      descBullets: [
        "Cafe24, LG Pay, Alipay, BOKU, EXIMBAY 결제 연동 구축",
        "정기 결제, 취소, 환불 API 처리",
        "프로젝트 전반에 Spring Boot, Batch, Gateway, JPA/MyBatis 사용",
        "국제 서비스용 ELK 기반 중앙화 로깅 구축",
        "API 및 시스템 통합을 위한 글로벌 벤더와의 협업"
      ]
    }
  ]
};

const educationInfo = {
  categories: [
    {
      title: "교육",
      items: [
        {
          schoolName: "한동대학교",
          logo: require("../assets/images/HGU.png"),
          subHeader: "컴퓨터공학 학사",
          duration: "2011년 2월 - 2020년 2월",
          desc: "컴퓨터전자공학 및 경영경제학 복수 전공"
        },
        {
          schoolName: "머신러닝 기반 빅데이터 플랫폼 개발 전문가 양성과정",
          logo: require("../assets/images/bigdata.jpg"),
          subHeader: "빅데이터 · 머신러닝 전문 교육",
          duration: "2020년 2월 - 2020년 7월",
          desc:
            "Java, Spring, Oracle, Python, R 기반 교육 이수. " +
            "Spring Framework를 활용한 웹 기반 ERP 프로젝트 수행"
        },
        {
          schoolName: "MLOps 파이프라인 구현 실습",
          logo: require("../assets/images/mlops.png"),
          subHeader: "MLOps · 모델 서빙",
          duration: "2025년 12월",
          desc: "MLflow + KServe 기반 모델 배포 및 서빙. CI/CD/CT 파이프라인 구성과 모니터링 실습"
        }
      ]
    },
    {
      title: "AWS Workshops",
      items: [
        {
          schoolName: "Architecting & Operations on AWS",
          logo: require("../assets/images/aws.png"),
          subHeader: "AWS 워크샵 · Jam",
          duration: "2025년",
          desc:
            "Cloud Operations on AWS + JAM Operations, Advanced Architecting on AWS with AWS Jam, " +
            "AWS 개발·운영 생산성 향상 워크샵 수료."
        },
        {
          schoolName: "Developing & Data on AWS",
          logo: require("../assets/images/aws.png"),
          subHeader: "AWS 워크샵",
          duration: "2025년",
          desc:
            "Developing on AWS, Build Modern Applications with AWS NoSQL Databases, " +
            "Data Engineering on AWS, AWS Technical Essentials 수료."
        },
        {
          schoolName: "Containers & Migration on AWS",
          logo: require("../assets/images/aws.png"),
          subHeader: "AWS 워크샵",
          duration: "2025년",
          desc:
            "Running Containers on Amazon Elastic Kubernetes Service, Migrating to AWS, " +
            "AWS Migration Essentials 수료."
        },
        {
          schoolName: "Agentic AI on AWS",
          logo: require("../assets/images/aws.png"),
          subHeader: "AWS 워크샵 · Bedrock",
          duration: "2025년",
          desc: "Agentic AI Foundations, Building Agentic AI with Amazon Bedrock AgentCore 수료."
        }
      ]
    },
    {
      title: "컨퍼런스",
      items: [
        {
          schoolName: "AWS re:Invent 2025 - HMG 리캡 세션",
          logo: require("../assets/images/reinvent.jpeg"),
          subHeader: "글로벌 클라우드 컨퍼런스 · 발표",
          duration: "2025년 12월",
          desc: "회사 지원 참가자이자 리캡 세션 발표자로 선발. 현대차 그룹 글로벌 EV 플랫폼에 적용 가능한 Agentic AI(Strands), 클라우드 네이티브 아키텍처 인사이트를 발표"
        },
        {
          schoolName: "DevTalk_Around_AI",
          logo: require("../assets/images/hyundaiLogo2.png"),
          subHeader: "AI 기술 컨퍼런스 · 발표",
          duration: "2025년 12월",
          desc:
            "Figma MCP + GitHub Copilot + IDE 연계를 통한 화면 개발 사례를 주제로 연사자로 참여. " +
            "GenAI 성장 LAB 리드로 ev-agent(전기차 충전 코딩 에이전트)를 전시회에 출품하고 시연"
        },
        {
          schoolName: "AWSKRUG 소모임",
          logo: require("../assets/images/awskrug.png"),
          subHeader: "AWS 기술 커뮤니티",
          duration: "2025년 6월 ~ 현재",
          desc: "AI Engineering, Container, Serverless, DevOps 소모임 지속 참여"
        }
      ]
    },
    {
      title: "어학",
      items: [
        {
          schoolName: "Language & Global Experience",
          logo: require("../assets/images/global.jpg"),
          subHeader: "영어 및 해외 경험",
          duration: "2014년 - 현재",
          desc:
            "OPIC AL 취득(2021), 호주 워킹홀리데이 경험. " +
            "현대자동차그룹 SPA 46점(주재원 Level)"
        }
      ]
    }
  ],
  display: true
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

const bigProjects = {
  title: "Projects",
  subtitle: "기술 브랜딩의 중심이 되는 대표 프로젝트",
  projects: [
    {
      image: require("../assets/images/mythos.png"),
      projectName: "Project Mythos",
      projectDesc: `
세계:접속은 AI가 만들어내는 서사와 전투를 반복하며 자신만의 세계를 완성해 가는 1인용 SF 루프형 TRPG/CRPG입니다.`,
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/men16922/MythOS"
        }
      ]
    },
    {
      image: require("../assets/images/nexxa.png"),
      projectName: "Nexxa",
      projectDesc: `
스스로의 실패에서 학습하는 자율 AI 개발 에이전트 — Builder → Reviewer → Verifier 루프로 같은 실수를 반복하지 않습니다.`,
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/men16922/Nexxa"
        }
      ]
    },
    {
      image: require("../assets/images/gcp.png"),
      projectName: "EV Charging Agent — Google Cloud",
      projectDesc: `
Gemini·BigQuery·하이브리드 라우팅을 결합한 Google Cloud 기반 설명 가능 EV 충전 에이전트.`,
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/men16922/EV-Charge-Agent"
        },
        {
          name: "Related Articles",
          url: "https://medium.com/@men16922/building-an-explainable-ev-charging-agent-on-google-cloud-gemini-bigquery-and-hybrid-routing-6c84ff5d95c2"
        }
      ]
    },
    {
      image: require("../assets/images/aws.png"),
      projectName: "SlackOps - AI DevOps Agent",
      projectDesc: `
노이즈 많은 장애 알림을 맥락으로 바꾸고 액션을 라우팅해 대응 속도를 높이는 Slack 기반 AI DevOps 에이전트.`,
      footerLink: [
        {
          name: "Demo / Devpost",
          url: "https://devpost.com/software/slackops-one-agent-two-control-planes?ref_content=my-projects-tab&ref_feature=my_projects"
        },
        {
          name: "Related Articles",
          url: "https://builder.aws.com/content/3FXdExAw4SeFqYwNKMfK7Qo1xBf/building-a-safe-event-driven-devops-agent-with-aws-lambda-and-amazon-dynamodb"
        }
      ]
    },
    {
      image: require("../assets/images/aws.png"),
      projectName: "Hackathon Builds - Brandy와 Applied GenAI Prototype",
      projectDesc: `
Amazon Bedrock·Step Functions 기반 서버리스 멀티 에이전트 프로토타입(Brandy 등)을 빠르게 구현.`,
      footerLink: [
        {
          name: "Demo / Devpost",
          url: "https://devpost.com/software/brandy-ai-branding-assistant-for-signboards-interiors"
        },
        {
          name: "GitHub",
          url: "https://github.com/men16922/brandy-serverless"
        }
      ]
    },
    {
      image: require("../assets/images/hyundaiLogo.png"),
      projectName: "AWS Incident Agent - EV DevOps Agent",
      projectDesc: `
알림 상관관계 분석·런북 실행·원인 분석을 수행하는 AWS 네이티브 EV 운영 인시던트 에이전트.`,
      footerLink: [
        {
          name: "Notion Article",
          url: "https://atlantic-andesaurus-8b9.notion.site/9a5c8aaf868f436eaf1c035404335a5e"
        }
      ]
    },
    {
      image: require("../assets/images/hyundaiLogo.png"),
      projectName: "글로벌 eMSP 플랫폼",
      projectDesc: `
구독·회원·차량·결제 도메인을 아우르는 글로벌 EV 충전 백엔드 — AWS EKS Fargate MSA, Kafka, Observability.`,
      footerLink: [
        {
          name: "Related Articles",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/bithumb.png"),
      projectName: "Bithumb — 거래소 신뢰성 & SRE",
      projectDesc: `
대규모 암호화폐 거래소 SRE — Kafka 기반 알림, 정합성 대시보드, 포스트모템 신뢰성 문화.`,
      footerLink: [
        {
          name: "Related Articles",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/Danal.png"),
      projectName: "Danal — 결제 플랫폼 API",
      projectDesc: `
Spring Boot 기반 국내외 결제·간편결제 연동 (Cafe24, LG Pay, Alipay, BOKU, EXIMBAY).`,
      footerLink: [
        {
          name: "Related Articles",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "기술 브랜드를 뒷받침하는 클라우드·쿠버네티스·엔지니어링 자격",
  achievementsCards: [
    {
      title: "AWS Certified CloudOps Engineer - Professional",
      subtitle: "AWS에서 2026년 인증",
      image: require("../assets/images/SAP.png"),
      imageAlt: "GenAI Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/6f5c6fa5-7250-437f-90cc-11ba2db5d902"
        }
      ]
    },
    {
      title: "Google Cloud Generative AI Leader",
      subtitle: "Google에서 2026년 인증",
      image: require("../assets/images/GenAI_Leader.png"),
      imageAlt: "GenAI Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/c131644d-c698-4155-9801-f950421736a8/public_url"
        }
      ]
    },
    {
      title: "Google Cloud Associate Cloud Engineer",
      subtitle: "Google에서 2026년 인증",
      image: require("../assets/images/GCP_ACE.png"),
      imageAlt: "ACE Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/c325bfa7-8ca3-46af-b131-be8e76bb1726"
        }
      ]
    },
    {
      title: "AWS Certified CloudOps Engineer - Associate",
      subtitle: "AWS에서 2026년 인증",
      image: require("../assets/images/COA.png"),
      imageAlt: "COA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/492da4e2-a907-4122-968d-94a2735f02a8"
        }
      ]
    },
    {
      title: "AWS Certified AI Practitioner",
      subtitle: "AWS에서 2026년 인증",
      image: require("../assets/images/ai-practitioner.png"),
      imageAlt: "AIF Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/d54e935d-199c-4d93-88ec-6daf64827a53"
        }
      ]
    },
    {
      title: "Certified Kubernetes Security Specialist (CKS)",
      subtitle: "The Linux Foundation에서 2026년 인증",
      image: require("../assets/images/CKS.png"),
      imageAlt: "CKS Logo",
      footerLink: [
        {
          name: "자격증",
          url: "https://www.credly.com/badges/02e14961-7d3b-4499-8966-ffd861b6de5e"
        }
      ]
    },
    {
      title: "AWS Certified Developer - Associate",
      subtitle: "AWS에서 2025년 인증",
      image: require("../assets/images/DVA.png"),
      imageAlt: "DVA Logo",
      footerLink: [
        {
          name: "자격증",
          url: "https://www.credly.com/badges/e580c0aa-cce4-4352-83c6-4eef9e96b2a0"
        }
      ]
    },
    {
      title: "Certified Kubernetes Application Developer (CKAD)",
      subtitle: "The Linux Foundation에서 2025년 인증",
      image: require("../assets/images/CKAD.png"),
      imageAlt: "CKAD Logo",
      footerLink: [
        {
          name: "자격증",
          url: "https://www.credly.com/badges/e4893029-3ec4-40fe-a5bd-8b5979200850"
        }
      ]
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      subtitle: "The Linux Foundation에서 2025년 인증",
      image: require("../assets/images/CKA.png"),
      imageAlt: "CKA Logo",
      footerLink: [
        {
          name: "자격증",
          url: "https://www.credly.com/badges/5eed101a-762a-402c-ab20-c71f268d9636"
        }
      ]
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle: "AWS에서 2025년 인증",
      image: require("../assets/images/aws_cert.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "자격증",
          url: "https://www.credly.com/badges/72e4e35c-7d5f-4420-99af-03614d6eae2c/linked_in_profile"
        }
      ]
    },
    {
      title: "SQLD (SQL 개발자)",
      subtitle: "한국데이터산업진흥원에서 2022년 발급",
      image: require("../assets/images/sqld.png"),
      imageAlt: "SQLD Certificate",
      footerLink: [
        {
          name: "더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f"
        }
      ]
    },
    {
      title: "현대 SPA (Speaking Proficiency Assessment) 46",
      subtitle: "HMG에서 2024년 발급",
      image: require("../assets/images/HMC.png"),
      imageAlt: "SQLD Certificate",
      footerLink: [
        {
          name: "더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f"
        }
      ]
    },
    {
      title: "정보처리기사",
      subtitle: "한국산업인력공단에서 2019년 발급",
      image: require("../assets/images/kr_cert.png"),
      imageAlt: "정보처리기사 Certificate",
      footerLink: [
        {
          name: "더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/d5759f0a36b24bf48c9bc2d2d8590ade"
        }
      ]
    },
    {
      title: "OPIC - AL",
      subtitle: "ACTFL / YBM에서 2021년 발급",
      image: require("../assets/images/opic.png"),
      imageAlt: "OPIc Certificate",
      footerLink: [
        {
          name: "더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/d5759f0a36b24bf48c9bc2d2d8590ade"
        }
      ]
    },
    {
      title: "현대오토에버 기술대시보드 - 최우수상 수상",
      subtitle: "2025.06",
      image: require("../assets/images/hyundaiLogo2.png"),
      imageAlt: "OPIc Certificate",
      footerLink: [
        {
          name: "더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/d5759f0a36b24bf48c9bc2d2d8590ade"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Articles",
  subtitle:
    "모든 글 채널을 여기서 집계합니다. GitHub MDX를 메인 블로그로 두고, Medium은 글로벌 홍보, Velog는 최소 운영, AWS/GCP/Azure 커뮤니티 글은 각 플랫폼에 직접 발행합니다.",
  displayMediumBlogs: "false",
  blogs: articleChannels.ko,
  display: true
};

const talkSection = {
  title: "Hackathons, Speaking & Community",
  subtitle: emoji(
    "커뮤니티 활동, 발표, 해커톤 출품을 포트폴리오 허브에 연결합니다"
  ),
  talks: [
    {
      title: "AWS Community Builder",
      subtitle:
        "AWS Builder 프로필과 커뮤니티 기반 기술 활동을 확인할 수 있는 공개 진입점입니다.",
      slides_url: "https://builder.aws.com/community/%40cbm?tab=badges",
      event_url: "https://www.linkedin.com/in/paul-choi-99a192244/",
      primaryLabel: "Profile",
      secondaryLabel: "LinkedIn",
      date: "진행 중",
      location: "AWS Community"
    },
    {
      title: "Hackathon Portfolio",
      subtitle:
        "AWS 및 GenAI 중심 해커톤 프로젝트, 데모, 결과물을 한 곳에서 보여주는 허브입니다.",
      slides_url:
        "https://devpost.com/software/brandy-ai-branding-assistant-for-signboards-interiors",
      event_url: "https://github.com/men16922/slackops-devops-agent",
      primaryLabel: "Demo",
      secondaryLabel: "Code",
      date: "진행 중",
      location: "Hackathons"
    },
    {
      title: "Speaking & Technical Recaps",
      subtitle:
        "AI 보조 개발, 클라우드 네이티브 아키텍처, 엔지니어링 학습 기록을 묶어 보여줍니다.",
      slides_url:
        "https://atlantic-andesaurus-8b9.notion.site/9a5c8aaf868f436eaf1c035404335a5e",
      event_url: "https://velog.io/@men16922/posts",
      primaryLabel: "Archive",
      secondaryLabel: "Posts",
      date: "진행 중",
      location: "Community & Events"
    }
  ],
  display: true
};

const podcastSection = {
  title: emoji("팟캐스트 🎙️"),
  subtitle: "곧 공개 예정",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "이력서",
  subtitle: "최신 이력서를 다운로드하세요",
  display: true
};

const contactInfo = {
  title: "연락처",
  subtitle: "언제든지 연락주세요!",
  number: "+82-10-4602-1692",
  email_address: "men16922@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
