// Customized developerFolio config for Byung Min Choi

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
  username: "Byung Min Choi (Paul)",
  title: "Hi, I'm Byung Min Choi (Paul)",
  subTitle: `
• Backend Engineer building reliable distributed systems with Java, Spring Boot, Kafka, Redis, and PostgreSQL
• Cloud Architect with hands-on AWS, Kubernetes, serverless, observability, and platform automation experience
• AI Agent Builder focused on Bedrock, multi-agent workflows, DevOps automation, and practical engineering productivity
  `,
  resumeLink:
    "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/men16922",
  linkedin: "www.linkedin.com/in/paul-choi-99a192244/",
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
    "Designing and building distributed backend systems, cloud architecture, and AI agent workflows",
  skills: [
    emoji(
      "⚡ Design and develop distributed backend services using Java, Spring Boot, and microservice architecture"
    ),
    emoji(
      "⚡ Deploy and operate production workloads on AWS and Kubernetes (EKS/ECS on EC2/Fargate)"
    ),
    emoji(
      "⚡ Automate infrastructure and CI/CD pipelines with Terraform, AWS SAM, and GitHub Actions"
    ),
    emoji(
      "⚡ Build and orchestrate serverless architectures — Lambda (multi-agent), API Gateway, DynamoDB, S3, Fargate"
    ),
    emoji(
      "⚡ Implement observability stacks using OpenTelemetry (ADOT), Prometheus, Grafana, and CloudWatch/X-Ray"
    ),
    emoji(
      "⚡ Integrate Generative AI workflows using AWS Bedrock and LangChain for agent-based automation"
    ),
    emoji(
      "⚡ Utilize Claude Code and Kiro for AI-assisted development, design automation, and LLMOps experimentation"
    ),
    emoji(
      "⚡ Optimize reliability, scalability, and cost through AI-driven automation and cloud-native patterns"
    )
  ],
  skillCategories: [
    {
      category: "Backend & Core",
      skills: [
        {skillName: "Java / SpringBoot", fontAwesomeClassname: "fab fa-java"},
        {skillName: "Node.js / Express", fontAwesomeClassname: "fab fa-node"},
        {skillName: "Python", fontAwesomeClassname: "fab fa-python"}
      ]
    },
    {
      category: "Cloud & DevOps",
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
      category: "Data & Messaging",
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
      category: "Frontend",
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
      category: "Core Backend",
      experience: [
        {Stack: "Java / Spring Boot", progressPercentage: "90%"},
        {
          Stack: "System & Service Architecture (MSA / Event-Driven / SaaS)",
          progressPercentage: "85%"
        },
        {
          Stack: "Distributed System Design & Scalability",
          progressPercentage: "80%"
        },
        {Stack: "Python", progressPercentage: "55%"},
        {Stack: "Node.js / Express", progressPercentage: "50%"}
      ]
    },
    {
      category: "Cloud-Native Platform",
      experience: [
        {
          Stack: "AWS / EKS (Cloud-Native Operations)",
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
          Stack: "GitOps & CI/CD Automation (Argo CD / GitHub Actions)",
          progressPercentage: "80%"
        },
        {
          Stack:
            "Serverless Architecture (Lambda, API Gateway, DynamoDB, Fargate)",
          progressPercentage: "75%"
        }
      ]
    },
    {
      category: "Reliability & Observability",
      experience: [
        {
          Stack: "Site Reliability Engineering (SRE)",
          progressPercentage: "75%"
        },
        {
          Stack: "Observability (OpenTelemetry / ADOT / Prometheus / ELK)",
          progressPercentage: "75%"
        }
      ]
    },
    {
      category: "Messaging & Data Layer",
      experience: [
        {Stack: "Kafka / Event-Driven Systems", progressPercentage: "75%"},
        {Stack: "Redis / ElastiCache", progressPercentage: "70%"},
        {
          Stack: "RDBMS / PostgreSQL & MySQL & Oracle",
          progressPercentage: "70%"
        },
        {Stack: "NoSQL / DynamoDB / MongoDB", progressPercentage: "70%"}
      ]
    },
    {
      category: "AI & Automation",
      experience: [
        {
          Stack:
            "LLM Integration (AWS Bedrock / Titan Image Generator / LangChain)",
          progressPercentage: "70%"
        },
        {
          Stack:
            "Agentic AI & DevOps Automation (Multi-Agent / Step Functions)",
          progressPercentage: "70%"
        },
        {
          Stack: "AI-Assisted Development (Claude Code / Kiro)",
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
      role: "Backend Developer / Technical Architect",
      company: "Hyundai AutoEver",
      companylogo: require("../assets/images/hyundaiLogo2.png"),
      date: "2023 – Present",
      desc: "Led backend architecture for Hyundai's global EV charging platform (eMSP), including the unified global app.",
      descBullets: [
        "Designed subscription/payment/vehicle/member services with Spring Boot & Kafka",
        "Integrated OAuth2 (HMG ID 2.0) and HMG Pay 2.0 recurring billing",
        "Built BFF/BFI gateways and deployed services on AWS EKS Fargate",
        "Streamed domain events to MongoDB for analytics via Eventuate Tram",
        "Owned observability and CI/CD pipeline design",
        "Designed and implemented EV DevOps Agent PoC — GenAI-powered operations automation using AWS Bedrock and multi-agent Lambda architecture on Step Functions",
        "Selected as company-sponsored representative to AWS re:Invent 2025; presented HMG cloud architecture recap covering Agentic AI, EKS, and cloud-native patterns"
      ]
    },
    {
      role: "SRE Engineer",
      company: "Bithumb Korea",
      companylogo: require("../assets/images/bithumb.png"),
      date: "2022 – 2023",
      desc: "Improved system reliability and monitoring for high-volume crypto exchange infrastructure.",
      descBullets: [
        "Developed batch monitoring platform with Slack alerting",
        "Built Kafka-based log alerting system with retry logic",
        "Created dashboards for trade/FDS consistency tracking",
        "Migrated secrets to AWS Secrets Manager with Spring integration",
        "Led postmortem culture and SRE dashboard adoption"
      ]
    },
    {
      role: "Backend Developer",
      company: "Danal",
      companylogo: require("../assets/images/Danal.png"),
      date: "2020 – 2022",
      desc: "Developed global/domestic payment APIs and simplified payment solutions for PG platforms.",
      descBullets: [
        "Built Cafe24, LG Pay, Alipay, BOKU, and EXIMBAY payment integrations",
        "Handled recurring billing, cancellation, and refund APIs",
        "Used Spring Boot, Batch, Gateway, JPA/MyBatis across projects",
        "Built centralized ELK-based logging for international services",
        "Collaborated with global vendors on API and system integration"
      ]
    }
  ]
};

const educationInfo = {
  categories: [
    {
      title: "Education",
      items: [
        {
          schoolName: "Handong Global University",
          logo: require("../assets/images/HGU.png"),
          subHeader: "Bachelor of Science in Computer Science",
          duration: "February 2011 - February 2020",
          desc: "Dual B.S. in Computer & Electronic Engineering and Business Economics"
        },
        {
          schoolName: "Machine Learning & Big Data Platform Development",
          logo: require("../assets/images/bigdata.jpg"),
          subHeader: "Big Data · Machine Learning Bootcamp",
          duration: "February 2020 - July 2020",
          desc:
            "Completed intensive training in Java, Spring, Oracle, Python, and R. " +
            "Developed web-based ERP projects using Spring Framework"
        },
        {
          schoolName: "MLOps Pipeline Implementation Workshop",
          logo: require("../assets/images/mlops.png"),
          subHeader: "MLOps · Model Serving",
          duration: "December 2025",
          desc: "Model deployment and serving using MLflow + KServe. Hands-on practice with CI/CD/CT pipeline configuration and monitoring"
        }
      ]
    },
    {
      title: "AWS Workshops",
      items: [
        {
          schoolName: "Architecting & Operations on AWS",
          logo: require("../assets/images/aws.png"),
          subHeader: "AWS Workshops · Jam",
          duration: "2025",
          desc:
            "Cloud Operations on AWS + JAM Operations, Advanced Architecting on AWS with AWS Jam, " +
            "and the AWS development & operations productivity workshop."
        },
        {
          schoolName: "Developing & Data on AWS",
          logo: require("../assets/images/aws.png"),
          subHeader: "AWS Workshops",
          duration: "2025",
          desc:
            "Developing on AWS, Build Modern Applications with AWS NoSQL Databases, " +
            "Data Engineering on AWS, and AWS Technical Essentials."
        },
        {
          schoolName: "Containers & Migration on AWS",
          logo: require("../assets/images/aws.png"),
          subHeader: "AWS Workshops",
          duration: "2025",
          desc:
            "Running Containers on Amazon Elastic Kubernetes Service, Migrating to AWS, " +
            "and AWS Migration Essentials."
        },
        {
          schoolName: "Agentic AI on AWS",
          logo: require("../assets/images/aws.png"),
          subHeader: "AWS Workshops · Bedrock",
          duration: "2025",
          desc: "Agentic AI Foundations and Building Agentic AI with Amazon Bedrock AgentCore."
        }
      ]
    },
    {
      title: "Conference",
      items: [
        {
          schoolName: "AWS re:Invent 2025 — HMG Recap Session",
          logo: require("../assets/images/reinvent.jpeg"),
          subHeader: "Global Cloud Conference · Speaker",
          duration: "December 2025",
          desc: "Selected as company-sponsored attendee and recap session speaker. Presented HMG cloud architecture findings covering Agentic AI (Strands), and cloud-native patterns adopted in Hyundai's global EV platform."
        },
        {
          schoolName: "DevTalk_Around_AI",
          logo: require("../assets/images/hyundaiLogo2.png"),
          subHeader: "AI Technology Conference · Speaker",
          duration: "December 2025",
          desc:
            "Participated as a speaker on the topic of screen development through Figma MCP + GitHub Copilot + IDE integration. " +
            "Led GenAI Growth LAB and showcased ev-agent (EV charging coding agent) at the exhibition"
        },
        {
          schoolName: "AWSKRUG Community",
          logo: require("../assets/images/awskrug.png"),
          subHeader: "AWS Technical Community",
          duration: "June 2025 ~ Present",
          desc: "Continuous participation in AI Engineering, Container, Serverless, and DevOps meetups"
        }
      ]
    },
    {
      title: "Language",
      items: [
        {
          schoolName: "Language & Global Experience",
          logo: require("../assets/images/global.jpg"),
          subHeader: "English & International Experience",
          duration: "2014 - Present",
          desc:
            "OPIC AL certification (2021), Working Holiday in Australia. " +
            "Hyundai Motor Group SPA Score 46 (Expatriate Level)"
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
  subtitle:
    "Representative projects and platform work that define my technical brand",
  projects: [
    {
      image: require("../assets/images/mythos.png"),
      projectName: "Project Mythos",
      projectDesc: `
A single-player sci-fi, loop-based TRPG/CRPG where AI-generated narrative and combat let you build out your own world.`,
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
A self-learning autonomous AI dev agent: a Builder → Reviewer → Verifier loop that learns from its own failures so it stops repeating mistakes.`,
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
An explainable EV-charging agent on Google Cloud — Gemini reasoning, BigQuery analytics, and hybrid routing.`,
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
      projectName: "SlackOps — AI DevOps Agent",
      projectDesc: `
A Slack-native AI DevOps agent on AWS that turns noisy alerts into context, routes actions, and speeds up incident response.`,
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
      projectName: "Hackathon Builds — Brandy and Applied GenAI Prototypes",
      projectDesc: `
Fast end-to-end serverless multi-agent prototypes (Brandy + applied GenAI) on Amazon Bedrock and Step Functions.`,
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
      projectName: "AWS Incident Agent — EV DevOps Agent",
      projectDesc: `
An AWS-native incident agent for EV-charging ops — alert correlation, runbook execution, and cause analysis.`,
      footerLink: [
        {
          name: "Notion Article",
          url: "https://atlantic-andesaurus-8b9.notion.site/9a5c8aaf868f436eaf1c035404335a5e"
        }
      ]
    },
    {
      image: require("../assets/images/hyundaiLogo.png"),
      projectName: "Global eMSP Platform",
      projectDesc: `
A global EV-charging backend (subscription, member, vehicle, payment) on AWS EKS Fargate MSA with Kafka and observability.`,
      footerLink: [
        {
          name: "Related Articles",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/bithumb.png"),
      projectName: "Bithumb — Exchange Reliability & SRE",
      projectDesc: `
SRE for a high-volume crypto exchange — Kafka-based alerting, consistency dashboards, and a postmortem-driven reliability culture.`,
      footerLink: [
        {
          name: "Related Articles",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/Danal.png"),
      projectName: "Danal — Payment Platform APIs",
      projectDesc: `
Global/domestic payment & simplified-payment integrations on Spring Boot (Cafe24, LG Pay, Alipay, BOKU, EXIMBAY).`,
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
  subtitle:
    "Cloud, Kubernetes, and engineering credentials that support the brand story",
  achievementsCards: [
    {
      title: "AWS Certified CloudOps Engineer - Professional",
      subtitle: "Verified by AWS in 2026",
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
      subtitle: "Verified by Google in 2026",
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
      subtitle: "Verified by Google in 2026",
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
      subtitle: "Verified by AWS in 2026",
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
      subtitle: "Verified by AWS in 2026",
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
      subtitle: "Verified by The Linux Foundation in 2026",
      image: require("../assets/images/CKS.png"),
      imageAlt: "CKS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/02e14961-7d3b-4499-8966-ffd861b6de5e"
        }
      ]
    },
    {
      title: "AWS Certified Developer - Associate",
      subtitle: "Verified by AWS in 2025",
      image: require("../assets/images/DVA.png"),
      imageAlt: "DVA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/e580c0aa-cce4-4352-83c6-4eef9e96b2a0"
        }
      ]
    },
    {
      title: "Certified Kubernetes Application Developer (CKAD)",
      subtitle: "Verified by The Linux Foundation in 2025",
      image: require("../assets/images/CKAD.png"),
      imageAlt: "CKAD Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/e4893029-3ec4-40fe-a5bd-8b5979200850"
        }
      ]
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      subtitle: "Verified by The Linux Foundation in 2025",
      image: require("../assets/images/CKA.png"),
      imageAlt: "CKA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/5eed101a-762a-402c-ab20-c71f268d9636"
        }
      ]
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle: "Verified by AWS in 2025",
      image: require("../assets/images/aws_cert.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/72e4e35c-7d5f-4420-99af-03614d6eae2c/linked_in_profile"
        }
      ]
    },
    {
      title: "SQLD (SQL Developer)",
      subtitle: "Issued by Korea Data Agency (한국데이터산업진흥원) in 2022",
      image: require("../assets/images/sqld.png"),
      imageAlt: "SQLD Certificate",
      footerLink: [
        {
          name: "More Info",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f"
        }
      ]
    },
    {
      title: "Hyundai SPA (Speaking Proficiency Assessment) 46",
      subtitle: "Issued by HMG in 2024",
      image: require("../assets/images/HMC.png"),
      imageAlt: "HMG SPA Certificate",
      footerLink: [
        {
          name: "More Info",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f"
        }
      ]
    },
    {
      title: "정보처리기사 (Engineer Information Processing)",
      subtitle: "Issued by HRDK (한국산업인력공단) in 2019",
      image: require("../assets/images/kr_cert.png"),
      imageAlt: "정보처리기사 Certificate",
      footerLink: [
        {
          name: "More Info",
          url: "https://atlantic-andesaurus-8b9.notion.site/d5759f0a36b24bf48c9bc2d2d8590ade"
        }
      ]
    },
    {
      title: "OPIC - AL",
      subtitle: "Issued by ACTFL / YBM in 2021",
      image: require("../assets/images/opic.png"),
      imageAlt: "OPIc Certificate",
      footerLink: [
        {
          name: "More Info",
          url: "https://atlantic-andesaurus-8b9.notion.site/d5759f0a36b24bf48c9bc2d2d8590ade"
        }
      ]
    },
    {
      title: "Hyundai AutoEver Tech Dashboard - Grand Prize",
      subtitle: "2025.06",
      image: require("../assets/images/hyundaiLogo2.png"),
      imageAlt: "Hyundai AutoEver Award",
      footerLink: [
        {
          name: "More Info",
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
    "All writing channels are aggregated here. GitHub MDX is the primary blog, Medium is for global reach, Velog is maintained lightly, and platform community posts stay native to AWS/GCP/Azure.",
  displayMediumBlogs: "false",
  blogs: articleChannels.en,
  display: true
};

const talkSection = {
  title: "Hackathons, Speaking & Community",
  subtitle: emoji(
    "Community presence, conference speaking, and competitive builds that strengthen the portfolio hub"
  ),
  talks: [
    {
      title: "AWS Community Builder",
      subtitle:
        "Public AWS builder profile and community-facing technical presence.",
      slides_url: "https://builder.aws.com/community/%40cbm?tab=badges",
      event_url: "https://www.linkedin.com/in/paul-choi-99a192244/",
      primaryLabel: "Profile",
      secondaryLabel: "LinkedIn",
      date: "Ongoing",
      location: "AWS Community"
    },
    {
      title: "Hackathon Portfolio",
      subtitle:
        "A single surface for hackathon participation, demos, build logs, and results including AWS and GenAI-focused builds.",
      slides_url:
        "https://devpost.com/software/brandy-ai-branding-assistant-for-signboards-interiors",
      event_url: "https://github.com/men16922/slackops-devops-agent",
      primaryLabel: "Demo",
      secondaryLabel: "Code",
      date: "Ongoing",
      location: "Hackathons"
    },
    {
      title: "Speaking & Technical Recaps",
      subtitle:
        "Conference speaking and engineering recap materials spanning AI-assisted development and cloud-native architecture.",
      slides_url:
        "https://atlantic-andesaurus-8b9.notion.site/9a5c8aaf868f436eaf1c035404335a5e",
      event_url: "https://velog.io/@men16922/posts",
      primaryLabel: "Archive",
      secondaryLabel: "Posts",
      date: "Ongoing",
      location: "Community & Events"
    }
  ],
  display: true
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon.",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my latest resume here.",
  display: true
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Feel free to reach out!",
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
