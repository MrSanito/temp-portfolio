import type { Metadata } from "next";
import ResumeViewer from "./ResumeViewer";

export const metadata: Metadata = {
  title: "Resume | Vishal (MrSanito)",
  description: "View Vishal's (MrSanito) resume — Backend Engineer and AI/ML enthusiast.",
};

export default function ResumePage() {
  return <ResumeViewer />;
}
