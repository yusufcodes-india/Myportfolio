export interface ProjectItem {
  id: string;
  name: string;
  displayTitle: string;
  repoUrl: string;
  summary: string;
  problemStatement: string;
  verifiedFeatures: string[];
  techStack: string[];
  category: string;
  architectureHighlight: {
    type: string;
    description: string;
  };
  liveDemoUrl: string | null;
  statusNote: string;
}

export interface FocusArea {
  title: string;
  label: string;
  description: string;
  approach: string;
  skills: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    pronouns: string;
    role: string;
    headline: string;
    heroIntroduction: string;
    aboutStory: string;
    education: {
      institution: string;
      year: string;
      focus: string;
    };
    email: string;
    githubUsername: string;
    githubUrl: string;
    codeforces: {
      handle: string;
      profileUrl: string;
      verifiedSnapshot: {
        rating: number;
        maxRating: number;
        rank: string;
        maxRank: string;
        snapshotDate: string;
      };
    };
  };
  focusAreas: FocusArea[];
  projects: ProjectItem[];
  meta: {
    siteTitle: string;
    siteDescription: string;
    keywords: string[];
    siteUrl: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Yusuf Tarwala",
    pronouns: "he/him",
    role: "CS Student & Python Developer",
    headline: "Learning deeply. Building curiously.",
    heroIntroduction:
      "I’m Yusuf, a first-year Computer Science student at Newton School of Technology. I’m building with Python, sharpening my DSA skills, and exploring wherever curiosity takes me.",
    aboutStory:
      "I like figuring out how things work—and then trying to build them myself. Right now, I’m learning through Python projects, data structures and algorithms, and competitive programming. I’m an aspiring jack of all trades, with a growing foundation in computer science and a curiosity that keeps expanding.",
    education: {
      institution: "Newton School of Technology",
      year: "First-year Computer Science student",
      focus: "Computer Science & Engineering fundamentals",
    },
    email: "yusufcode8752@gmail.com",
    githubUsername: "yusufcodes-india",
    githubUrl: "https://github.com/yusufcodes-india",
    codeforces: {
      handle: "YusufNST",
      profileUrl: "https://codeforces.com/profile/YusufNST",
      verifiedSnapshot: {
        rating: 789,
        maxRating: 789,
        rank: "Newbie",
        maxRank: "Newbie",
        snapshotDate: "October 2026",
      },
    },
  },
  focusAreas: [
    {
      title: "Python",
      label: "Language & Practical Projects",
      description:
        "Learning through Python projects, scripting, and modular application development.",
      approach:
        "Focusing on readable syntax, object-oriented concepts, and understanding practical backend workflows through hands-on implementation.",
      skills: ["Python", "Scripting", "OOP Fundamentals", "Logic Design"],
    },
    {
      title: "Data Structures & Algorithms",
      label: "Foundational Problem Solving",
      description:
        "Strengthening computational thinking and core algorithmic problem-solving foundations.",
      approach:
        "Analyzing time and space complexity, exploring fundamental data structures, and practicing pattern recognition across common algorithmic problems.",
      skills: ["Arrays & Strings", "Hashing", "Sorting & Searching", "Recursion", "Complexity Analysis"],
    },
    {
      title: "Competitive Programming",
      label: "Structured Practice",
      description:
        "Practicing structured, algorithmic thinking under strict time constraints.",
      approach:
        "Regular contest participation and post-contest upsolving on Codeforces to sharpen speed, edge-case identification, and logical precision.",
      skills: ["Codeforces", "Problem Analysis", "Edge-Case Handling", "Algorithmic Precision"],
    },
  ],
  projects: [
    {
      id: "newton-extention",
      name: "newton-extention",
      displayTitle: "NST Reminder Extension",
      repoUrl: "https://github.com/yusufcodes-india/newton-extention",
      summary:
        "A local-first browser companion extension for the Newton School student portal, providing automated tracking for coursework, attendance, and Question of the Day.",
      problemStatement:
        "Students need to monitor varied coursework components—such as minimum attendance thresholds, assignments, and upcoming contests—without relying on manual note-taking or third-party servers.",
      verifiedFeatures: [
        "Local-first direct sync: Interfaces directly with student portal endpoints using existing browser session credentials, keeping data private.",
        "Comprehensive dashboard popup: Displays per-subject attendance percentages, quizzes, assignments, contests, and daily QOTD status.",
        "Customizable user controls: Configurable daily digest notifications (e.g. 21:00), minimum attendance threshold warnings (e.g. 75%), lead times, and portal theme switcher.",
      ],
      techStack: [
        "JavaScript (ES Modules)",
        "Chrome Extension API (Manifest V3)",
        "HTML5",
        "CSS3",
      ],
      category: "Browser Extension / Local-First Tool",
      architectureHighlight: {
        type: "Local-First Client Architecture",
        description:
          "Runs entirely in-browser using Chrome Extension MV3 background service workers and storage alarms; communicates strictly between client and portal API.",
      },
      liveDemoUrl: null,
      statusNote: "Local-first Chrome / Opera extension (installable via unpacked extension bundle).",
    },
    {
      id: "shibaam",
      name: "shibaam",
      displayTitle: "SHIBAAM Collection – Portal System",
      repoUrl: "https://github.com/yusufcodes-india/shibaam",
      summary:
        "A complete web-based management portal system developed for an apparel business to coordinate tailoring orders, client measurements, and workshop operations.",
      problemStatement:
        "Small garment enterprises often face high operational complexity tracking custom orders, measurements, and delivery statuses, yet need a solution without ongoing server maintenance fees.",
      verifiedFeatures: [
        "Eight-module operations dashboard: Centralized interfaces for job tracking, customer records, workshop artisans, measurements, deliveries, and queries.",
        "Serverless database via Apps Script: Utilizes Google Sheets as a relational datastore and Google Apps Script as a REST API for CRUD operations.",
        "Customer portal & production utilities: Customer order status lookup, video shopping booking, A5 print formatting, PDF generation via html2pdf, and pre-filled WhatsApp status updates.",
      ],
      techStack: [
        "JavaScript",
        "Google Apps Script",
        "Google Sheets API",
        "HTML5",
        "CSS3",
        "html2pdf.js",
      ],
      category: "Full-Stack Web Portal / Low-Overhead Architecture",
      architectureHighlight: {
        type: "Serverless Sheets-Backed Workflow",
        description:
          "Frontend clients make authenticated REST requests to Google Apps Script Web App endpoints, storing structured operational data inside Google Sheets.",
      },
      liveDemoUrl: null,
      statusNote: "Production operational portal built for apparel business management.",
    },
  ],
  meta: {
    siteTitle: "Yusuf Tarwala — CS Student & Python Developer",
    siteDescription:
      "Personal portfolio of Yusuf Tarwala, first-year Computer Science student at Newton School of Technology. Exploring Python, Data Structures & Algorithms, and Competitive Programming.",
    keywords: [
      "Yusuf Tarwala",
      "Computer Science Student",
      "Newton School of Technology",
      "Python Developer",
      "Data Structures and Algorithms",
      "Competitive Programming",
      "YusufNST",
      "NST Reminder",
      "Portfolio",
    ],
    siteUrl: "https://yusufcodes-india.github.io",
  },
};
