// Customized developerFolio config for Byung Min Choi

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
• Backend Engineer specializing in cloud-native microservice architecture
• 5+ years of hands-on experience with Java (Spring Boot), Kafka, Redis, and PostgreSQL
• Proven expertise in designing and operating distributed systems on AWS and Kubernetes (EKS)
• Experienced in DevOps automation: CI/CD pipelines, GitOps, and Infrastructure as Code
• Focused on observability, reliability, and scalable backend system design
• Passionate about bridging backend engineering with AI-driven cloud automation
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
  title: "BACKEND · PLATFORM · AI ENGINEER",
  subTitle:
    "Engineering Reliable, AI-Integrated Cloud-Native Systems on AWS and Kubernetes",
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
      desc: "Led backend architecture for Hyundai’s global EV charging platform (eMSP), including Indonesia deployment and unified global app.",
      descBullets: [
        "Designed subscription/payment/vehicle/member services with Spring Boot & Kafka",
        "Integrated OAuth2 (HMG ID 2.0) and HMG Pay 2.0 recurring billing",
        "Built BFF/BFI gateways and deployed services on AWS EKS Fargate",
        "Streamed domain events to MongoDB for analytics via Eventuate Tram",
        "Owned observability and CI/CD pipeline design"
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
          schoolName: "AWS Cloud & Platform Engineering Training",
          logo: require("../assets/images/aws.jpeg"),
          subHeader: "AWS Cloud · SRE · DevOps Advanced Training",
          duration: "June 2025 - September 2025",
          desc:
            "Completed Cloud Operations on AWS, Developing on AWS, EKS, Migration, and Advanced Architecting courses. " +
            "Hands-on practice with Serverless, Lambda, API Gateway, DynamoDB, EKS Auto Mode, Observability, and cost optimization"
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
      title: "Conference",
      items: [
        {
          schoolName: "AWS re:Invent 2025",
          logo: require("../assets/images/reinvent.jpeg"),
          subHeader: "Global Cloud Conference",
          duration: "December 2025",
          desc: "Selected as a company-sponsored attendee. Attended sessions on Agentic AI (Strands, AgentCore), EKS, and cloud architecture"
        },
        {
          schoolName: "DataDog Hands-on Workshop",
          logo: require("../assets/images/datadog.png"),
          subHeader: "Observability Workshop",
          duration: "June 2025",
          desc: "Hands-on practice with Datadog-based metrics, logs, trace collection, and incident analysis"
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
  title: "Key Projects",
  subtitle: "SIGNIFICANT WORK I'VE LED OR CONTRIBUTED TO",
  projects: [
    {
      image: require("../assets/images/brandy-ai.png"),
      projectName: "Brandy — AI Branding Assistant",
      projectDesc: `
Developed an intelligent multi-agent system that automates end-to-end branding for small businesses using Amazon Bedrock.
Designed a serverless architecture with 7 Lambda agents orchestrated via Step Functions to generate business names, signboards, and interior concepts.
Integrated Claude 4 Sonnet (reasoning), Titan Image Generator v2 (designs), DynamoDB (session TTL), and S3 for asset storage.
Ensured resilience with async polling, fallback scoring, and workflow-level error recovery.`,
      footerLink: [
        {
          name: "View on Devpost",
          url: "https://devpost.com/software/brandy-ai-branding-assistant-for-signboards-interiors"
        }
      ]
    },
    {
      image: require("../assets/images/hyundaiLogo.png"),
      projectName: "Global eMSP Platform — Hyundai AutoEver",
      projectDesc: `
Led backend architecture and domain design for Hyundai’s global EV charging platform (subscription, member, vehicle, payment).
Integrated HMG ID (OAuth2.0) and HMG Pay (real-time billing) with MSA on AWS EKS Fargate.
Established observability stack with ADOT Collector, CloudWatch, and X-Ray for distributed tracing and metrics correlation.
Served as Technical Architect overseeing reliability, scalability, and release governance.`,
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/hyundaiLogo.png"),
      projectName: "Indonesia EV Infrastructure Design",
      projectDesc: `
Proposed and delivered a system migration strategy for Hyundai AutoEver Indonesia to the AMPECO platform.
Designed backend architecture covering subscription, home/public charging, and operational transition plans.`,
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/bithumb.png"),
      projectName: "Batch Monitoring Platform",
      projectDesc: `
Developed an integrated batch monitoring system across FDS, trading, and AML services.
Aggregated multi-DB sources (MySQL, Oracle) and implemented Slack-based alerts for missed or delayed jobs.`,
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/bithumb.png"),
      projectName: "Kafka-based Log Alerting System",
      projectDesc: `
Implemented real-time log alerting using AWS MSK (Kafka).
Developed prefix-based error pattern detection and retryable alert delivery pipeline for high reliability.`,
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/bithumb.png"),
      projectName: "Secrets Manager Integration",
      projectDesc: `
Migrated credential management from legacy storage to AWS Secrets Manager across hybrid (AWS + IDC) environments.
Developed a custom Spring Boot library compatible with 2.x–3.x for standardized VPC and region configurations.`,
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/bithumb.png"),
      projectName: "Proxy Access Log Aggregation",
      projectDesc: `
Built a log aggregation pipeline using Kafka and MongoDB TimeSeries for proxy access data.
Delivered MySQL-based dashboards showing host-level metrics and success rates.`,
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/bithumb.png"),
      projectName: "Monitoring Console Dashboard",
      projectDesc: `
Developed React-based internal monitoring console with alert configuration for Kafka lag and batch jobs.
Implemented Spring Security-based OTP/IP login and modular Ant Design + Tailwind UI components.`,
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/Danal.png"),
      projectName: "Cafe24 Payment Gateway Platform",
      projectDesc: `
Developed payment, deposit, and shipping APIs for the Cafe24 PG platform.
Implemented batch services for bulk invoice registration using Spring Boot, MyBatis, and Thymeleaf.`,
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/Danal.png"),
      projectName: "LG Pay & BOKU Simplified Payments",
      projectDesc: `
Integrated LG Pay and BOKU payment gateways, including card registration, payment, and refund flows.
Developed caching and batch systems (exchange rates, transaction sync) using Spring Batch and Spring Cache.`,
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/Danal.png"),
      projectName: "Global Payment Gateway API",
      projectDesc: `
Built unified international payment APIs using Spring Cloud Gateway.
Supported one-time and recurring transactions, and collaborated with Alipay, EXIMBAY, and Cybersource for full-cycle integration.`,
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/Danal.png"),
      projectName: "Alipay & Cybersource Integration",
      projectDesc: `
Implemented authentication, recurring billing, refund, and merchant onboarding APIs for Alipay and Visa Cybersource.
Delivered both hosted checkout and REST-based payment flows.`,
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/Danal.png"),
      projectName: "UnionPay Prepaid Service",
      projectDesc: `
Maintained and enhanced UnionPay prepaid payment system (SMS-based, tokenless).
Analyzed APIs, improved reliability, and coordinated with external vendors.`,
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("../assets/images/Danal.png"),
      projectName: "ELK-based Logging System",
      projectDesc: `
Built centralized log management for overseas payment services using Filebeat, Logstash, Elasticsearch, and Kibana.
Provided custom dashboards tracking success/failure metrics by time and region.`,
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Certifications & Awards 🏆"),
  subtitle: "Certifications and achievements",
  achievementsCards: [
    {
      title: "Certified Kubernetes Security Specialist (CKS)",
      subtitle: "Verified by The Linux Foundation in 2025",
      image: require("../assets/images/CKS.png"),
      imageAlt: "CKS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/02e14961-7d3b-4499-8966-ffd861b6de5e"
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
          url: "https://www.credly.com/earner/earned/badge/e580c0aa-cce4-4352-83c6-4eef9e96b2a0"
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
          url: "https://atlantic-andesaurus-8b9.notion.site/d5759f0a36b24bf48c9bc2d2d8590ade"
        }
      ]
    },
    {
      title: "Hyundai SPA (Speaking Proficiency Assessment) 46",
      subtitle: "Issued by HMG in 2024",
      image: require("../assets/images/HMC.png"),
      imageAlt: "SQLD Certificate",
      footerLink: [
        {
          name: "More Info",
          url: "https://atlantic-andesaurus-8b9.notion.site/d5759f0a36b24bf48c9bc2d2d8590ade"
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
    }
  ],
  display: true
};

const blogSection = {
  title: "Technical Writings",
  subtitle: "A few articles I've written about backend systems and DevOps",
  displayMediumBlogs: "true",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Studies",
  subtitle: emoji("Engineering, Architecture, DevOps – Curated by Me"),
  talks: [
    {
      title: "Engineering Knowledge Base",
      subtitle:
        "Notion-based technical archive: Java, Spring, DevOps, System Design",
      slides_url:
        "https://atlantic-andesaurus-8b9.notion.site/9a5c8aaf868f436eaf1c035404335a5e",
      event_url:
        "https://atlantic-andesaurus-8b9.notion.site/9a5c8aaf868f436eaf1c035404335a5e",
      date: "Ongoing",
      location: "Notion Workspace"
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
