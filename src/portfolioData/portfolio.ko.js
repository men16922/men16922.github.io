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
• 채용 담당자, 엔지니어, AWS Community, 해커톤 심사위원이 한 번에 볼 수 있는 기술 허브를 구축 중
• AI 보조 개발과 클라우드 네이티브 아키텍처를 주제로 한 컨퍼런스 발표 경험 (AWS re:Invent 2025, DevTalk_Around_AI)
  `,
  resumeLink: "https://www.notion.so/0dab080e9ccf490a8391be50fa01448f",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/men16922",
  linkedin:
    "www.linkedin.com/in/paul-choi-99a192244",
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
      "⚡ Java, Spring Boot, 마이크로서비스 아키텍처를 활용한 분산 백엔드 서비스 설계 및 개발"
    ),
    emoji(
      "⚡ AWS와 Kubernetes (EKS on EC2/Fargate) 환경에서 프로덕션 워크로드 배포 및 운영"
    ),
    emoji(
      "⚡ CloudFormation, AWS SAM, GitHub Actions를 활용한 인프라 및 CI/CD 파이프라인 자동화"
    ),
    emoji(
      "⚡ 서버리스 아키텍처 구축 및 오케스트레이션 — Lambda (multi-agent), API Gateway, DynamoDB, S3, Fargate"
    ),
    emoji(
      "⚡ OpenTelemetry (ADOT), Prometheus, Grafana, CloudWatch를 활용한 Observability 스택 구현"
    ),
    emoji(
      "⚡ AWS Bedrock과 LangChain을 활용한 에이전트 기반 자동화를 위한 Generative AI 워크플로우 통합"
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
      desc: "인도네시아 배포와 글로벌 통합 앱을 포함한 현대자동차 글로벌 전기차 충전 플랫폼(eMSP)의 백엔드 아키텍처를 주도했습니다.",
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
          schoolName: "AWS Cloud & Platform Engineering Training",
          logo: require("../assets/images/aws.jpeg"),
          subHeader: "AWS 클라우드 · SRE · DevOps 심화 교육",
          duration: "2025년 6월 - 2025년 9월",
          desc:
            "Cloud Operations on AWS, Developing on AWS, EKS, Migration, Advanced Architecting 과정 수료. " +
            "Serverless, Lambda, API Gateway, DynamoDB, EKS Auto Mode, Observability, 비용 최적화 실습"
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
          schoolName: "AICO Seoul 2025",
          logo: require("../assets/images/aico.JPG"),
          subHeader: "AI 컨퍼런스",
          duration: "2025년 11월",
          desc: "Microsoft AI 및 Copilot 중심 세션 참석, 엔터프라이즈 AI 활용 사례 학습"
        },
        {
          schoolName: "CNCF Community 2025",
          logo: require("../assets/images/cncf.png"),
          subHeader: "클라우드 네이티브 커뮤니티",
          duration: "2025년 9월",
          desc: "DevSecOps 및 Kubernetes 환경에서 MCP 기반 AI Agent 적용 사례 공유"
        },
        {
          schoolName: "DataDog Hands-on Workshop",
          logo: require("../assets/images/datadog.png"),
          subHeader: "Observability 실습",
          duration: "2025년 6월",
          desc: "Datadog 기반 메트릭·로그·트레이스 수집 및 장애 분석 실습"
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
      image: require("../assets/images/aws.png"),
      projectName: "SlackOps - AI DevOps Agent",
      projectDesc: `
Problem: ChatOps 환경에서 장애 알림이 많고, 분석과 대응까지 시간이 오래 걸립니다.
Architecture: Slack + AWS + agent workflow 기반으로 장애 맥락 파악, 액션 라우팅, 대응 속도 향상을 목표로 설계했습니다.
Tech Stack: AWS, Lambda, Bedrock, GitHub Actions, observability tooling.
Artifacts: GitHub 소스와 향후 아티클/데모로 연결되는 대표 허브 프로젝트입니다.`,
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/men16922/slackops-devops-agent"
        },
        {
          name: "Related Articles",
          url: "https://medium.com/@men16922"
        }
      ]
    },
    {
      image: require("../assets/images/brandy-ai.png"),
      projectName: "Hackathon Builds - Brandy와 Applied GenAI Prototype",
      projectDesc: `
Problem: 제한된 시간 안에 제품 기획, 아키텍처, 구현, 데모까지 끝내야 하는 해커톤 환경에 대응합니다.
Architecture: 멀티 에이전트 서버리스 워크플로우와 비동기 폴링, 폴백 처리, 오류 복구를 포함한 구조입니다.
Tech Stack: Amazon Bedrock, Step Functions, Lambda, DynamoDB, S3.
Artifacts: 공개 Devpost와 향후 포트폴리오 글/데모로 연결됩니다.`,
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
Problem: 전기차 충전 플랫폼 운영 이슈에 대해 더 빠른 분석과 재현 가능한 대응 체계가 필요합니다.
Architecture: AWS 네이티브 agent workflow로 알림 상관관계 분석, 런북 실행, 원인 분석 리포팅을 수행합니다.
Tech Stack: AWS Lambda, Step Functions, Bedrock, observability integration.
Artifacts: 실무 PoC이자 포트폴리오의 핵심 아키텍처 스토리입니다.`,
      footerLink: [
        {
          name: "Architecture Notes",
          url: "https://builder.aws.com/community/%40cbm?tab=badges"
        }
      ]
    },
    {
      image: require("../assets/images/hyundaiLogo.png"),
      projectName: "글로벌 eMSP 플랫폼",
      projectDesc: `
Problem: 글로벌 전기차 충전 서비스의 구독/회원/차량/결제 도메인을 안정적으로 운영할 수 있는 플랫폼이 필요합니다.
Architecture: AWS EKS Fargate 기반 MSA, 도메인 이벤트, BFF/BFI 게이트웨이, Observability 스택을 설계했습니다.
Tech Stack: Spring Boot, Kafka, MongoDB, ADOT, CloudWatch, X-Ray.
Artifacts: 채용 담당자와 기술 면접관 모두에게 설명 가능한 대표 실무 프로젝트입니다.`,
      footerLink: [
        {
          name: "Related Articles",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/coin.jpeg"),
      projectName: "Applied AI Systems",
      projectDesc: `
AI 트레이딩 실험, MLOps 학습, 기타 applied system 프로젝트를 포함합니다.
플래그십 프로젝트 외에도 AI·자동화·데이터 워크플로우 전반을 꾸준히 구현해 왔다는 점을 보여주는 보강 섹션입니다.`,
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/men16922/coin-ai-system"
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
      slides_url:
        "https://builder.aws.com/community/%40cbm?tab=badges",
      event_url:
        "https://www.linkedin.com/in/paul-choi-99a192244/",
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
