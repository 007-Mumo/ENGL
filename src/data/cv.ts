export const profile = {
  name: "Lynne Kitonyi Kyalo",
  wordmark: "LYNNE KITONYI KYALO",
  eyebrow: "Electrical & Electronic Engineering",
  headline: ["Curious Mind.", "Grounded Soul.", "Engineering a Better Tomorrow."],
  intro:
    "I'm Lynne Kitonyi Kyalo, an Electrical and Electronic Engineering professional with experience in industrial asset care, ATM hardware maintenance, and electrical installations. I enjoy solving problems, learning continuously, and bringing people together through technology and community engagement.",
  location: "Nairobi, Kenya",
  cvPath: "/LYNNE KITONYI KYALO CV.pdf",
  footerStatement: "Rooted in purpose. Growing with every opportunity.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export interface ExperienceItem {
  org: string;
  role: string;
  period: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    org: "East African Breweries Limited (EABL)",
    role: "Asset Care Intern",
    period: "July 2025 – September 2025",
    points: [
      "Maintenance, replacement, and testing of machine devices on packaging lines to support production continuity.",
      "Machine operation and assistance with troubleshooting equipment breakdowns.",
      "Permit audits and safety incident SAC reporting.",
    ],
  },
  {
    org: "NCR Kenya Ltd",
    role: "ATM Repair Attaché",
    period: "August 2023 – September 2023",
    points: [
      "Repairing ATM hardware and identifying technical malfunctions.",
      "Testing ATM operation and debugging errors to restore equipment functionality.",
    ],
  },
  {
    org: "University of Nairobi",
    role: "Internal Attachment",
    period: "June 2023 – July 2023",
    points: [
      "Installation of domestic electrical wiring systems.",
      "Electrical design and billing.",
      "Cable installation and connection of electrical fixtures.",
    ],
  },
];

export interface LeadershipItem {
  org: string;
  role: string;
  period: string;
  points: string[];
}

export const leadership: LeadershipItem[] = [
  {
    org: "IEEE Women in Engineering — University of Nairobi",
    role: "Chairperson",
    period: "2025–2026",
    points: [],
  },
  {
    org: "IEEE Robotics and Automation Society — University of Nairobi",
    role: "Vice Chairperson",
    period: "2024–2025",
    points: [],
  },
  {
    org: "Engineering Students Association",
    role: "Media and Marketing Lead",
    period: "2023–2024",
    points: ["Involved in ESA Tech Week 2.0 and Tech Week 3.0."],
  },
  {
    org: "Loreto High School Limuru",
    role: "Dormitory, Laboratory and Special Rooms Captain",
    period: "2016–2019",
    points: [],
  },
];

export const skills = {
  professional: [
    "Innovation",
    "Effective listening and communication",
    "English and Kiswahili communication",
    "Time management and organisation",
    "Flexibility and adaptability",
    "Computer literacy",
  ],
  technical: [
    "Industrial equipment maintenance and testing",
    "Machine troubleshooting",
    "ATM hardware repair",
    "Electrical wiring installation",
    "Electrical design and billing",
    "Equipment testing and fault identification",
    "Safety permit audits and incident reporting",
  ],
};

export interface EducationItem {
  school: string;
  period: string;
  credential: string;
  detail: string;
}

export const education: EducationItem[] = [
  {
    school: "University of Nairobi",
    period: "2021–2026",
    credential: "Bachelor of Science in Electrical and Electronic Engineering",
    detail: "First Class Honours",
  },
  {
    school: "Loreto High School Limuru",
    period: "2016–2019",
    credential: "Kenya Certificate of Secondary Education",
    detail: "Mean Grade A−",
  },
  {
    school: "Mutungoni Academy",
    period: "2008–2015",
    credential: "Kenya Certificate of Primary Education",
    detail: "Average Marks 417",
  },
];

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export const certifications: CertificationItem[] = [
  {
    title: "Taifa Teule Leadership Experience (TLX)",
    issuer: "Taifa Teule",
    year: "2026",
  },
  {
    title: "IEEE University of Nairobi Internet of Things",
    issuer: "IEEE University of Nairobi",
    year: "2024",
  },
  {
    title: "UNESCO 03 Plus Certified Peer Counsellor",
    issuer: "UNESCO",
    year: "2024",
  },
  {
    title: "Certified Professional Mediator",
    issuer: "Karl Mediation and Arbitration Centre",
    year: "2023",
  },
];

export const interests = [
  { label: "Event planning" },
  { label: "Travelling" },
  { label: "Outreach programmes" },
  { label: "Community cleanups" },
];

export const contactInfo = {
  email: "lynnekitonyi@gmail.com",
  phone: "+254 793 598 994",
  location: "Nairobi, Kenya",
};
