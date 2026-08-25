const portfolioData = {
  name: "Rajeev Singh",
  title: "SDET / Software Test Engineer",
  location: "Gurugram, India",
  experienceYears: "2+ years",
  summary: "SDET / Software Test Engineer with 2+ years of experience in UI, API and mobile automation, backend validation, CI/CD and software quality engineering. I design reusable automation frameworks, validate business-critical workflows, and help teams ship reliable digital products with strong regression coverage.",
  education: [
    { degree: "B.Tech in Computer ()", institute: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow, India", dates: "Jul 2020 – Aug 2024" },
    { degree: "Intermediate (Science Stream)", institute: "SVM, Lucknow, India", dates: "Jun 2018 – May 2020" }
  ],
  clients: [
    { name: "Denso", relation: "UI and mobile automation support" },
    { name: "TG Minda", relation: "Site and application support" },
    { name: "Havells", relation: "Client environment support" },
    { name: "Jaguar", relation: "Client environment support" }
  ],
  experience: [
    {
      company: "Future Algorithm Pvt Ltd",
      role: "SDET / Software Test Engineer",
      duration: "9 months",
      location: "Gurugram",
      bullets: [
        "Built and maintained UI, API and mobile automation using Selenium, Appium, REST Assured, Java and TestNG.",
        "Designed Page Object Model frameworks and integrated them with Jenkins CI/CD pipelines.",
        "Performed functional, regression, cross-browser and API testing across web and mobile application workflows.",
        "Validated backend data flow, service response integrity and distributed system interactions using SQL, Redis and MQTT checks.",
        "Tracked defects in JIRA and collaborated with developers in Agile/Scrum delivery cycles."
      ]
    },
    {
      company: "ReacoiLife",
      role: "SDET Trainee",
      duration: "6 months",
      location: "Noida",
      bullets: [
        "Executed manual, automation and API testing across web applications and service workflows.",
        "Developed Selenium WebDriver, Java, TestNG and Cucumber automation suites to cover regression scenarios.",
        "Used REST Assured to validate API responses, status codes and payload correctness.",
        "Integrated test execution into Jenkins for continuous quality validation.",
        "Supported cross-browser testing, defect tracking and release-readiness checks."
      ]
    }
  ],
  skillGroups: [
    {
      title: "Programming",
      items: ["Java", "JavaScript", "SQL", "HTML", "CSS"]
    },
    {
      title: "Automation",
      items: ["Selenium WebDriver", "TestNG", "Cucumber BDD", "Appium", "REST Assured", "Testim", "POM"]
    },
    {
      title: "Tools",
      items: ["Postman", "JIRA", "Zephyr", "Bugzilla", "Git", "GitHub", "Jenkins", "Maven", "VS Code", "Eclipse", "Android Studio"]
    },
    {
      title: "Cloud / DevOps",
      items: ["AWS", "Kubernetes"]
    },
    {
      title: "Testing",
      items: ["Manual Testing", "UI Automation", "API Testing", "Mobile Testing", "Database Testing", "Regression Testing", "Cross-Browser Testing", "Agile/Scrum"]
    }
  ],
  projects: [
    {
      title: "Digimach — End-to-End Test Automation Framework",
      client: "Digimach",
      role: "Automation Framework Architect",
      type: "End-to-End Automation | Web | Desktop | API | Messaging | Database",
      period: "12/2025 – Present",
      description: "Designed a framework from scratch covering Web UI, Desktop UI, API, Messaging, Redis and PostgreSQL validation to support end-to-end automation and release confidence.",
      responsibilities: [
        "Built end-to-end automation across Web UI, Desktop UI, API and messaging layers.",
        "Automated web workflows using Java + Selenium and desktop workflows using Appium.",
        "Integrated REST Assured, MQTT and database validation to verify end-to-end data flow.",
        "Planned Jenkins CI/CD execution for scheduled regression and faster defect isolation."
      ],
      stack: ["Java", "Selenium", "Appium", "REST Assured", "MQTT", "Redis", "PostgreSQL", "Jenkins", "TestNG", "API Automation", "Database Validation"]
    },
    {
      title: "PCR System — UI Automation Framework",
      client: "Denso",
      role: "Automation Engineer",
      type: "UI Automation",
      period: "10/2025 – Present",
      description: "Designed and developed a Selenium WebDriver automation framework with Java and TestNG, implementing BDD-based workflows for request creation, approval flows and validations.",
      responsibilities: [
        "Developed a reusable Selenium Java framework with TestNG structure.",
        "Implemented BDD using Cucumber for readable business-flow automation.",
        "Automated request creation, approval and validation scenarios.",
        "Applied Page Object Model for maintainability and reusability.",
        "Integrated Jenkins automation and executed suites in AWS environments.",
        "Generated logs and reports for defect analysis and debugging."
      ],
      stack: ["Selenium", "Java", "TestNG", "Cucumber", "BDD", "Page Object Model", "Jenkins", "AWS"]
    },
    {
      title: "Denso — API & Mobile Automation Framework",
      client: "Denso",
      role: "Automation Framework Developer",
      type: "API Automation + Mobile Automation",
      period: "Ongoing",
      description: "Designed and maintained reusable API and mobile automation frameworks using Java, REST Assured, Appium and TestNG, with scalable architecture for efficient execution and validation.",
      responsibilities: [
        "Built reusable API automation frameworks for functional, negative and validation scenarios.",
        "Automated status-code, payload and business-rule validation checks.",
        "Developed Appium-based mobile automation for login workflows and end-to-end Android scenarios.",
        "Used Page Object Model patterns for maintainable mobile test design.",
        "Executed API and mobile validation with data-driven architecture and reusable test methods."
      ],
      stack: ["REST Assured", "Java", "TestNG", "API validation", "Functional testing", "Negative testing", "Data-driven testing", "Response validation", "Business-rule validation", "Appium", "Android Studio", "Page Object Model", "Android devices/emulators", "End-to-end mobile scenarios"]
    }
  ],
  architecture: [
    "Frontend: responsive portfolio built with HTML, CSS and JavaScript",
    "Backend: Node.js + Express API service",
    "Database: PostgreSQL-ready schema support",
    "Automation: Java, Selenium, Appium, REST Assured and POM",
    "CI/CD: Jenkins-based automation execution",
    "Cloud: AWS and container-oriented testing setup",
    "Quality process: functional, regression, UI, API and mobile validation"
  ]
};

window.portfolioData = portfolioData;