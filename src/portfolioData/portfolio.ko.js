// 최병민 포트폴리오 한글 버전

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
• 클라우드 마이크로서비스 아키텍처를 전문으로 하는 백엔드 엔지니어
• Java (Spring Boot), Kafka, Redis, PostgreSQL 6년 이상의 실무 경험
• AWS와 Kubernetes (EKS) 기반 분산 시스템 설계 및 운영 전문가
• DevOps 자동화 경험: CI/CD 파이프라인, GitOps, Infrastructure as Code
• 관찰 가능성(Observability), 안정성, 확장 가능한 백엔드 시스템 설계에 집중
• Agentic AI & Automation에 대한 열정
  `,
  resumeLink: "https://www.notion.so/0dab080e9ccf490a8391be50fa01448f",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/men16922",
  linkedin:
    "https://www.linkedin.com/in/%EB%B3%91%EB%AF%BC-%EC%B5%9C-99a192244/",
  gmail: "men16922@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@men16922",
  velog: "https://velog.io/@men16922/posts",
  stackoverflow: "",
  display: true
};

const skillsSection = {
  title: "B/E · 클라우드 · SRE 엔지니어",
  subTitle: "AWS & K8S 기반 클라우드 엔지니어링, Spring & Java B/E Core 개발",
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
          skillName: "AWS (EKS, Lambda, Fargate)",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "AWS SAM / CDK/ CFN",
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
        {skillName: "CloudWatch", fontAwesomeClassname: "fas fa-eye"},
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
      desc: "현대자동차 글로벌 전기차 충전 플랫폼 개발",
      descBullets: [
        "Spring Boot & Kafka 기반 구독/결제/차량/회원 서비스 설계",
        "OAuth2 (HMG ID 2.0) 인증/인가",
        "권역별 AWS 퍼블릭클라우드 구성 (북미, 유럽, 국내)",
        "Observabiity 및 CI/CD 파이프라인 설계"
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
          schoolName: "AWS re:Invent 2025",
          logo: require("../assets/images/reinvent.jpeg"),
          subHeader: "글로벌 클라우드 컨퍼런스",
          duration: "2025년 12월",
          desc: "출장 교육 인원으로 선발되어 참가. Agentic AI(Strands, AgentCore), EKS, 클라우드 아키텍처 세션 수강"
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
  title: "주요 프로젝트",
  subtitle: "주요 작업",
  projects: [
    {
      image: require("../assets/images/brandy-ai.png"),
      projectName: "Brandy — AI 브랜딩 어시스턴트",
      projectDesc: `
Amazon Bedrock을 사용하여 소규모 비즈니스를 위한 엔드투엔드 브랜딩을 자동화하는 지능형 멀티 에이전트 시스템 개발.
Step Functions로 오케스트레이션되는 7개의 Lambda 에이전트로 구성된 서버리스 아키텍처를 설계하여 비즈니스 이름, 간판, 인테리어 컨셉 생성.
Claude 4 Sonnet (추론), Titan Image Generator v2 (디자인), DynamoDB (세션 TTL), S3 (자산 저장소) 통합.
비동기 폴링, 폴백 스코어링, 워크플로우 수준 오류 복구로 복원력 보장.`,
      footerLink: [
        {
          name: "Devpost에서 보기",
          url: "https://devpost.com/software/brandy-ai-branding-assistant-for-signboards-interiors"
        }
      ]
    },
    {
      image: require("../assets/images/coin.jpeg"),
      projectName: "코인 자동매매 에이전트",
      projectDesc: `
    빗썸 현물 시장을 자동으로 분석하고 거래하는 AI 트레이딩 시스템입니다.
    여러 AI 모델의 판단을 종합하고, 사전에 정의된 리스크 규칙을 통과한 경우에만 주문을 실행합니다.
    자동매매(auto)와 예측 전용(predict) 모드를 분리`,
      footerLink: [
        {
          name: "Github repo",
          url: "https://github.com/men16922/coin-ai-system"
        }
      ]
    },
    {
      image: require("../assets/images/hyundaiLogo.png"),
      projectName: "글로벌 전기차 충전 플랫폼 — 현대오토에버",
      projectDesc: `
현대자동차 글로벌 전기차 충전 플랫폼(구독 상품, 회원, 차량, 결제)의 백엔드 아키텍처 및 도메인 설계 주도.
AWS EKS Fargate 기반 MSA에 HMG ID (OAuth2.0) 및 HMG Pay (실시간 빌링) 통합.
ADOT Collector, CloudWatch, Pinpoint를 사용한 분산 추적 및 메트릭 Observability 스택 구축.
글로벌 인프라 구성을 위한 Technical Architect 역할 수행.`,
      footerLink: [
        {
          name: "Notion에서 더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/hyundaiLogo.png"),
      projectName: "인도네시아 전기차 인프라 설계",
      projectDesc: `
현대오토에버 인도네시아의 AMPECO 플랫폼으로의 시스템 마이그레이션 전략 제안 및 제공.
구독, Home/Public 충전, 운영 전환 계획을 포함한 백엔드 아키텍처 설계.`,
      footerLink: [
        {
          name: "Notion에서 더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/bithumb.png"),
      projectName: "배치 모니터링 플랫폼",
      projectDesc: `
FDS, 거래, AML 서비스 전반에 걸친 통합 배치 모니터링 시스템 개발.
다중 DB 소스(MySQL, Oracle) 집계 및 누락 또는 지연된 작업에 대한 Slack 기반 알림 구현.`,
      footerLink: [
        {
          name: "Notion에서 더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/bithumb.png"),
      projectName: "Kafka 기반 로그 알림 시스템",
      projectDesc: `
AWS MSK (Kafka)를 사용한 실시간 로그 알림 구현.
높은 안정성을 위한 프리픽스 기반 오류 패턴 감지 및 재시도 가능한 알림 전달 파이프라인 개발.`,
      footerLink: [
        {
          name: "Notion에서 더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/bithumb.png"),
      projectName: "Secrets Manager 통합",
      projectDesc: `
하이브리드 (AWS + IDC) 환경 전반에 걸쳐 레거시 저장소에서 AWS Secrets Manager로 자격 증명 관리 마이그레이션.
표준화된 VPC 및 리전 구성을 위해 2.x-3.x와 호환되는 사용자 정의 Spring Boot 라이브러리 개발.`,
      footerLink: [
        {
          name: "Notion에서 더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/bithumb.png"),
      projectName: "프록시 액세스 로그 집계",
      projectDesc: `
프록시 액세스 데이터를 위한 Kafka 및 MongoDB TimeSeries를 사용한 로그 집계 파이프라인 구축.
호스트 레벨 메트릭 및 성공률을 보여주는 MySQL 기반 대시보드 제공.`,
      footerLink: [
        {
          name: "Notion에서 더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/bithumb.png"),
      projectName: "모니터링 콘솔 대시보드",
      projectDesc: `
Kafka 지연 및 배치 작업에 대한 알림 구성을 갖춘 React 기반 내부 모니터링 콘솔 개발.
Spring Security 기반 OTP/IP 로그인 및 모듈형 Ant Design + Tailwind UI 컴포넌트 구현.`,
      footerLink: [
        {
          name: "Notion에서 더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/Danal.png"),
      projectName: "Cafe24 결제 게이트웨이 플랫폼",
      projectDesc: `
Cafe24 PG 플랫폼을 위한 결제, 입금, 배송 API 개발.
Spring Boot, MyBatis, Thymeleaf를 사용한 대량 청구서 등록을 위한 배치 서비스 구현.`,
      footerLink: [
        {
          name: "Notion에서 더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/Danal.png"),
      projectName: "LG Pay & BOKU 간편 결제",
      projectDesc: `
카드 등록, 결제, 환불 플로우를 포함한 LG Pay 및 BOKU 결제 게이트웨이 통합.
Spring Batch 및 Spring Cache를 사용한 캐싱 및 배치 시스템(환율, 거래 동기화) 개발.`,
      footerLink: [
        {
          name: "Notion에서 더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/Danal.png"),
      projectName: "글로벌 결제 게이트웨이 API",
      projectDesc: `
Spring Cloud Gateway를 사용한 통합 국제 결제 API 구축.
일회성 및 정기 거래 지원, Alipay, EXIMBAY, Cybersource와의 전체 주기 통합 협업.`,
      footerLink: [
        {
          name: "Notion에서 더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/Danal.png"),
      projectName: "Alipay & Cybersource 통합",
      projectDesc: `
Alipay 및 Visa Cybersource를 위한 인증, 정기 결제, 환불, 가맹점 온보딩 API 구현.
호스팅된 체크아웃 및 REST 기반 결제 플로우 모두 제공.`,
      footerLink: [
        {
          name: "Notion에서 더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/Danal.png"),
      projectName: "UnionPay 선불 서비스",
      projectDesc: `
UnionPay 선불 결제 시스템 유지보수 및 개선.
API 분석, 안정성 개선, 외부 벤더와의 조율.`,
      footerLink: [
        {
          name: "Notion에서 더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/Danal.png"),
      projectName: "ELK 기반 로깅 시스템",
      projectDesc: `
Filebeat, Logstash, Elasticsearch, Kibana를 사용한 해외 결제 서비스용 중앙화 로그 관리 구축.
시간 및 지역별 성공/실패 메트릭을 추적하는 커스텀 대시보드 제공.`,
      footerLink: [
        {
          name: "Notion에서 더보기",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("자격증 & 수상 🏆"),
  subtitle: "Achievement",
  achievementsCards: [
    {
      title: "AWS Certified AI Practitioner",
      subtitle: "AWS에서 2026년 인증",
      image: require("../assets/images/ai-practitioner.png"),
      imageAlt: "AIF Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/d54e935d-199c-4d93-88ec-6daf64827a53"
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
          url: "https://www.credly.com/earner/earned/badge/02e14961-7d3b-4499-8966-ffd861b6de5e"
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
          url: "https://www.credly.com/earner/earned/badge/e580c0aa-cce4-4352-83c6-4eef9e96b2a0"
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
          url: "https://atlantic-andesaurus-8b9.notion.site/d5759f0a36b24bf48c9bc2d2d8590ade"
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
          url: "https://atlantic-andesaurus-8b9.notion.site/d5759f0a36b24bf48c9bc2d2d8590ade"
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
          url: "#"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "기술 블로그",
  subtitle: "백엔드 시스템 및 DevOps에 관한 글",
  displayMediumBlogs: "true",
  blogs: [],
  display: false
};

const talkSection = {
  title: "학습 자료",
  subtitle: emoji("엔지니어링, 아키텍처, DevOps, AI"),
  talks: [
    {
      title: "지식 기반",
      subtitle: "Notion  기술 아카이브: Java, Spring, DevOps, 시스템 설계",
      slides_url:
        "https://atlantic-andesaurus-8b9.notion.site/9a5c8aaf868f436eaf1c035404335a5e",
      event_url:
        "https://atlantic-andesaurus-8b9.notion.site/9a5c8aaf868f436eaf1c035404335a5e",
      date: "진행 중",
      location: "Notion 워크스페이스"
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
