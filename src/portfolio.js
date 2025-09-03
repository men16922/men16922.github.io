// Customized developerFolio config for Byung Min Choi

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

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
• Backend Engineer with 5+ years of experience building scalable microservices
• Proficient in Java, Spring Boot, Kafka, Redis, and PostgreSQL
• Cloud-native architect with production experience on AWS and Kubernetes (EKS)
• Strong focus on DevOps practices: CI/CD, Infrastructure as Code (Terraform)
• Passionate about system design, observability, and platform reliability
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
  stackoverflow: "",
  display: true
};

const skillsSection = {
  title: "BACKEND/PLATFORM ENGINEER",
  subTitle: "BACKEND ENGINEER FOCUSED ON CLOUD-NATIVE, SCALABLE SYSTEMS",
  skills: [
    emoji(
      "⚡ Develop scalable backend services with Java, Spring Boot, and microservices architecture"
    ),
    emoji(
      "⚡ Deploy and manage production-grade workloads on AWS + EKS EC2/Fargate"
    ),
    emoji("⚡ Automate infrastructure using Terraform and GitHub Actions")
  ],
  softwareSkills: [
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "Oracle", fontAwesomeClassname: "fas fa-circle"},
    {skillName: "MySQL/ PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Redis", fontAwesomeClassname: "fas fa-memory"},
    {skillName: "Kafka", fontAwesomeClassname: "fas fa-stream"},
    {skillName: "ELK Stack", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "Linux", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"}
  ],
  display: true
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Java / Spring Boot", progressPercentage: "85%"},
    {Stack: "Microservices Architecture (MSA)", progressPercentage: "80%"},
    {Stack: "Site Reliable Engineering", progressPercentage: "75%"},
    {Stack: "RDBMS", progressPercentage: "70%"},
    {Stack: "System Architecture", progressPercentage: "75%"},
    {Stack: "AWS / EKS", progressPercentage: "70%"},
    {Stack: "Observability", progressPercentage: "60%"},
    {Stack: "Redis", progressPercentage: "70%"},
    {Stack: "kafka", progressPercentage: "70%"}
  ]
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Backend Developer / Technical Architect",
      company: "Hyundai AutoEver",
      companylogo: require("./assets/images/hyundaiLogo2.png"),
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
      companylogo: require("./assets/images/bithumb.png"),
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
      companylogo: require("./assets/images/Danal.png"),
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
  schools: [
    {
      schoolName: "Handong Global University",
      logo: require("./assets/images/HGU.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "February 2011 - February 2020",
      desc: "Dual B.S. in Computer & Electronic Engineering and Business Economics"
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
      image: require("./assets/images/hyundaiLogo.png"),
      projectName: "Global eMSP Platform (Hyundai AutoEver)",
      projectDesc:
        "Led backend architecture and implementation of Hyundai’s global EV charging platform. Built subscription, member, vehicle, and payment domains with microservice architecture. Integrated HMG ID (OAuth2.0) and HMG Pay (real-time billing), and deployed services on AWS EKS Fargate. As a Technical Architect, designed observability stack using ADOT Collector, CloudWatch, and X-Ray to enable tracing, metrics, and log correlation across Fargate workloads.",
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("./assets/images/hyundaiLogo.png"),
      projectName: "Indonesia EV Infrastructure Design",
      projectDesc:
        "Proposed migration strategy to AMPECO platform for Indonesia EV charging market. Delivered architectural design covering subscription, home/public charging, and backend system transition. Delivered directly to Hyundai AutoEver Indonesia.",
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("./assets/images/bithumb.png"),
      projectName: "Batch Monitoring Platform",
      projectDesc:
        "Developed a unified batch monitoring system covering critical services (FDS, trading, assets, AML). Integrated multi-DB sources (MySQL, Oracle) and provided Slack-based real-time alerts for missed, failed, or delayed batch executions.",
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("./assets/images/bithumb.png"),
      projectName: "Kafka-based Log Alerting System",
      projectDesc:
        "Built a log monitoring system using AWS MSK (Kafka) to detect prefix-based error patterns and trigger alert notifications. Implemented custom alert DB with retry logic for fault tolerance.",
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("./assets/images/bithumb.png"),
      projectName: "SecretsManager Integration",
      projectDesc:
        "Migrated internal credential management to AWS Secrets Manager across AWS and IDC environments. Created a custom Spring Boot library supporting Spring 2.x to 3.x for VPC/region setting standardization.",
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("./assets/images/bithumb.png"),
      projectName: "Proxy Access Log Aggregation",
      projectDesc:
        "Implemented real-time access log collection and analysis from gateway proxy servers. Used Kafka + MongoDB TimeSeries for ingestion and MySQL for dashboard aggregation, providing host-level success rate metrics.",
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("./assets/images/bithumb.png"),
      projectName: "Monitoring Console Development",
      projectDesc:
        "Developed frontend React-based dashboard for alert settings (Kafka lag, batch jobs), and Spring Security-based OTP/IP login controls. Built modular UI using Antd + Tailwind with scope-aware access management.",
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("./assets/images/Danal.png"),
      projectName: "Cafe24 PG Platform",
      projectDesc:
        "Developed payment, deposit, and shipping APIs for Cafe24 PG system. Delivered batch services for bulk invoice registration and status updates using Spring Boot, MyBatis, and Thymeleaf.",
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("./assets/images/Danal.png"),
      projectName: "LG Pay & BOKU Simplified Payment",
      projectDesc:
        "Integrated LG Pay and BOKU payment gateways including method registration, payment, refund, and status sync. Developed caching and batch systems (e.g. exchange rate) using Spring Batch and Spring Cache.",
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("./assets/images/Danal.png"),
      projectName: "Global Payment Gateway API",
      projectDesc:
        "Built unified overseas payment APIs via Spring Cloud Gateway. Supported 1-time and recurring flows, routing, and filter logic. Collaborated with global providers (Alipay, EXIMBAY, Cybersource) for full-cycle payment integration.",
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("./assets/images/Danal.png"),
      projectName: "Alipay & Cybersource Integration",
      projectDesc:
        "Implemented authentication, recurring billing, refund, and merchant registration APIs for Alipay and Visa Cybersource. Delivered Hosted Checkout + REST API flows and maintained direct communication with payment providers.",
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("./assets/images/Danal.png"),
      projectName: "UnionPay Prepaid Ops",
      projectDesc:
        "Maintained and improved SMS-based and tokenless UnionPay prepaid payment service. Conducted API analysis, system design, and coordinated outsourced vendors.",
      footerLink: [
        {
          name: "More on Notion",
          url: "https://atlantic-andesaurus-8b9.notion.site/0dab080e9ccf490a8391be50fa01448f?pvs=4"
        }
      ]
    },
    {
      image: require("./assets/images/Danal.png"),
      projectName: "ELK-based Logging System",
      projectDesc:
        "Built centralized logging system for overseas payment flows using Filebeat, Logstash, Elasticsearch, and Kibana. Visualized metrics like hourly success/failure rate on custom dashboards.",
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
      title: "Certified Kubernetes Application Developer (CKAD)",
      subtitle: "Verified by The Linux Foundation in 2025",
      image: require("./assets/images/CKAD.png"),
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
      image: require("./assets/images/CKA.png"),
      imageAlt: "CKA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/5eed101a-762a-402c-ab20-c71f268d9636"
        }
      ]
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle: "Verified by AWS in 2025",
      image: require("./assets/images/aws_cert.png"),
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
      image: require("./assets/images/sqld.png"),
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
      image: require("./assets/images/HMC.png"),
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
      image: require("./assets/images/kr_cert.png"),
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
      image: require("./assets/images/opic.png"),
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
