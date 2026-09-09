export interface PullRequest {
  id: string;
  prNumber: number;
  title: string;
  description: string;
  prUrl: string;
  status: "merged" | "open";
  techStack: string[];
}

export interface RepoContributionGroup {
  id: string;
  repo: string;
  repoName: string;
  repoOwner: string;
  repoUrl: string;
  description: string;
  role: string;
  pullRequests: PullRequest[];
}

export const repoContributionsData: RepoContributionGroup[] = [
  {
    id: "corsair",
    repo: "corsairdev/corsair",
    repoName: "corsair",
    repoOwner: "corsairdev",
    repoUrl: "https://github.com/corsairdev/corsair",
    description: "Universal integrations platform & developer automation framework connecting APIs, CRMs, and cloud services.",
    role: "Open Source Contributor • 4 Pull Requests (3 Merged, 1 In Review)",
    pullRequests: [
      {
        id: "corsair-instagram",
        prNumber: 1062,
        title: "feat(instagram): add Instagram plugin (full API surface — 36 ops)",
        description: "Implemented complete Instagram integration plugin covering 36 operations including media publishing, user profile management, comments moderation, and performance insights.",
        prUrl: "https://github.com/corsairdev/corsair/pull/1062",
        status: "merged",
        techStack: ["TypeScript", "REST API", "OAuth2", "Node.js"],
      },
      {
        id: "corsair-attio",
        prNumber: 845,
        title: "feat(attio): add Attio integration plugin",
        description: "Built the comprehensive Attio CRM integration plugin enabling programmatic CRM records management, attributes querying, and workflow automations.",
        prUrl: "https://github.com/corsairdev/corsair/pull/845",
        status: "merged",
        techStack: ["TypeScript", "CRM", "API Integration"],
      },
      {
        id: "corsair-dadataru",
        prNumber: 1039,
        title: "feat(dadataru): add DaData.ru integration plugin",
        description: "Created standardized DaData data enrichment plugin for automated address validation, company registry querying, and entity verifications.",
        prUrl: "https://github.com/corsairdev/corsair/pull/1039",
        status: "merged",
        techStack: ["TypeScript", "Microservices", "Data Enrichment"],
      },
      {
        id: "corsair-xero",
        prNumber: 1675,
        title: "feat(xero): implement complete xero integration plugin",
        description: "Building enterprise accounting workflows connecting invoices, bank transactions, and customer contacts via the official Xero API.",
        prUrl: "https://github.com/corsairdev/corsair/pull/1675",
        status: "open",
        techStack: ["TypeScript", "FinTech", "Accounting API"],
      },
    ],
  },
  {
    id: "job-auto-apply",
    repo: "Anshul439/job-auto-apply",
    repoName: "job-auto-apply",
    repoOwner: "Anshul439",
    repoUrl: "https://github.com/Anshul439/job-auto-apply",
    description: "Automated candidate application bot streamlining multi-platform job applications across Instahyre and tech portals.",
    role: "Open Source Contributor • 1 Pull Request (Merged)",
    pullRequests: [
      {
        id: "job-auto-apply-instahyre",
        prNumber: 2,
        title: "fix(instahyre): support 'View job »' button and btn-interested class",
        description: "Fixed selector regression on Instahyre job listings where automation halted on page 1, restoring smooth continuous multi-page auto-apply pipelines.",
        prUrl: "https://github.com/Anshul439/job-auto-apply/pull/2",
        status: "merged",
        techStack: ["Python", "Automation", "Web Scraping"],
      },
    ],
  },
];
