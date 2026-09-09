"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, ZoomIn, ZoomOut } from "lucide-react";

export default function ResumeViewer() {
  const [isFitScreen, setIsFitScreen] = useState(false);
  const resumePdfUrl = "/Vishal%20Resume%2009_09_2026.pdf";
  const downloadFileName = "Vishal_Resume_09_09_2026.pdf";

  return (
    <div className="min-h-screen w-full bg-[#030303] text-foreground relative flex flex-col items-center">
      {/* Dynamic Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Main Resume Display */}
      <main
        className={`relative z-10 w-full flex justify-center items-center ${
          isFitScreen
            ? "md:fixed md:inset-0 md:h-screen md:overflow-hidden p-2 sm:p-4"
            : "min-h-screen py-3 sm:py-6 px-2 sm:px-4 md:px-8 pb-28 md:pb-24"
        }`}
      >
        <div
          className={`w-full flex justify-center items-center ${
            isFitScreen ? "md:h-full md:max-h-screen" : "max-w-4xl"
          }`}
        >
          <img
            src="/resume-preview.png"
            alt="Vishal Resume"
            className={`w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl shadow-purple-950/30 ring-1 ring-white/10 transition-all duration-200 ${
              isFitScreen
                ? "md:max-h-[94vh] md:w-auto md:object-contain"
                : "max-w-full sm:max-w-3xl md:max-w-4xl"
            }`}
            style={{ imageRendering: "auto" }}
            loading="eager"
          />
        </div>
      </main>

      {/* Floating Action Bar / Controls */}
      <nav
        aria-label="Resume actions"
        className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 max-w-[95vw]"
      >
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </Link>

        {/* Desktop-only toggle between Fit to Screen and Full View */}
        <button
          onClick={() => setIsFitScreen(!isFitScreen)}
          className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
          title={isFitScreen ? "Scroll View" : "Fit to Screen"}
        >
          {isFitScreen ? (
            <>
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Full View</span>
            </>
          ) : (
            <>
              <ZoomOut className="w-3.5 h-3.5" />
              <span>Fit Screen</span>
            </>
          )}
        </button>

        <a
          href={resumePdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
          title="View as PDF in new tab"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>View as PDF</span>
        </a>

        <a
          href={resumePdfUrl}
          download={downloadFileName}
          className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-lg shadow-purple-600/30"
          title="Download PDF"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download</span>
        </a>
      </nav>
    </div>
  );
}
