export interface Metric {
  label: string;
  value: string;
  subtext?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  metrics: Metric[];
  description: string[];
  skills: string[];
}

export const experienceData: Experience[] = [
  {
    id: "solobuild-ai",
    role: "Founding Developer",
    company: "SoloBuild AI",
    location: "Remote",
    period: "April 2026 – Present",
    current: true,
    metrics: [
      {
        value: "1,000+",
        label: "Daily Calls Handled",
        subtext: "Automated live audio streams"
      },
      {
        value: "<800ms",
        label: "Voice Latency",
        subtext: "End-to-end response time"
      },
      {
        value: "50,000+",
        label: "Minutes / Month",
        subtext: "Processed via SIP trunks"
      },
      {
        value: "99.9%",
        label: "System Uptime",
        subtext: "Production SLA reliability"
      }
    ],
    description: [
      "Architected and scaled SoloBuild AI's real-time voice infrastructure, handling 1,000+ live calls daily across automated enterprise inbound/outbound voice agents.",
      "Engineered low-latency voice pipelines with LiveKit, Pipecat, Gemini Live API, and Deepgram, reducing conversational latency to under 800ms.",
      "Built the voice.solobuildai.com telephony orchestration platform, slashing client integration from 2 weeks to under 24 hours (1-day plug-and-play onboarding).",
      "Processed 50,000+ conversation minutes monthly across Twilio, Plivo, and Vobiz SIP trunks with 99.9% uptime and zero audio packet loss.",
      "Hardened authentication security using DPoP (Demonstrating Proof-of-Possession) token rotation and strict RBAC, eliminating 100% of credential replay attack vectors."
    ],
    skills: [
      "AI Voice Agents",
      "LiveKit",
      "Pipecat",
      "Gemini Live API",
      "Deepgram",
      "Twilio / Telephony",
      "WebSockets",
      "DPoP Auth",
      "Next.js",
      "TypeScript",
      "PostgreSQL"
    ]
  }
];
