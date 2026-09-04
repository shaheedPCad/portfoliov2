export type Experience = {
  company: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  period: string;
};

// Employment history and impact summarized from base_resume.pdf.
export const profile: { github: string; resume: string; experience: Experience[] } = {
  github: "https://github.com/shaheedPCad",
  resume: "/resume.pdf",
  experience: [
    {
      company: "Proofpoint",
      title: "DevOps Engineer Intern",
      period: "Jun — Aug 2026",
      description:
        "Rebuilt integration test infrastructure with containerized services on Kubernetes, cutting annual AWS spend by nearly $100K. Automated builds and deployments with Terraform and Helm, reducing Jenkins build time by 45 minutes and eliminating per-run VM provisioning.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Helm", "Jenkins"],
    },
    {
      company: "FluidAI",
      title: "Software Engineer Intern",
      period: "Sep — Dec 2025",
      description:
        "Shipped 15+ production features supporting a $2M hospital contract. Built an event-driven detection pipeline that reduced clinician response time by 60%, and optimized MySQL schemas and indexes to keep queries under 500 ms across 16M records.",
      technologies: ["Next.js", "C#", "ASP.NET Core", "MySQL", "Azure"],
    },
    {
      company: "All Equip Repair & Service Ltd.",
      title: "Software Engineer Intern",
      period: "Jan — May 2025",
      description:
        "Solely developed a workforce platform that replaced an $8K-per-month HR system, saving $96K annually. Built an attendance extraction pipeline that generated configurable timesheets and payslips, saving HR 16 hours each week.",
      technologies: ["TypeScript", "MongoDB", "Python", "SQL"],
    },
    {
      company: "Soilbrain Inc.",
      title: "Software Engineer Intern",
      period: "May — Aug 2024",
      description:
        "Built an IoT ingestion pipeline with health monitoring and automated alerts, reducing manual intervention by 90% across 50K+ daily readings. Optimized C++ microcontroller algorithms to improve data accuracy by 35% and reduce latency by 40% across 10M+ monthly data points.",
      technologies: ["Python", "AWS Lambda", "C++", "IoT"],
    },
  ],
};
