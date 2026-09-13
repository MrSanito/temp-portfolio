"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, ZoomIn, ZoomOut } from "lucide-react";

export default function ResumeViewer() {
  const [isFitScreen, setIsFitScreen] = useState(false);
  const resumePdfUrl = "/Vishal%20Resume%2009_09_2026.pdf";
  const downloadFileName = "Vishal_Resume_09_09_2026.pdf";

  return ( 
    <div className="min-h-screen w-full bg-[#030303] text-foreground relative flex flex-col items-center justify-start overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">
      {/* Dynamic Background Pattern */}  
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Main Resume Display */}
      <main
        className={`relative z-10 w-full flex flex-col items-center justify-center transition-all duration-300 ${
          isFitScreen
            ? "fixed inset-0 h-screen w-full p-3 sm:p-6 pt-3 pb-24 sm:pb-24 overflow-hidden"
            : "min-h-screen pt-4 sm:pt-8 md:pt-10 px-3 sm:px-6 md:px-8 pb-32"
        }`}
      >
        <div
          className={`w-full flex items-center justify-center transition-all duration-300 ${
            isFitScreen ? "h-full max-h-full" : "max-w-4xl"
          }`}
        >
          <img
            src="/resume-preview.png"
            alt="Vishal Resume"
            className={`rounded-xl sm:rounded-2xl shadow-2xl shadow-purple-950/40 ring-1 ring-white/10 transition-all duration-300 bg-white ${
              isFitScreen
                ? "max-h-[calc(100vh-6.5rem)] max-w-[95vw] md:max-w-[90vw] w-auto h-auto object-contain"
                : "w-full h-auto max-w-full sm:max-w-3xl md:max-w-4xl"
            }`}
            style={{ imageRendering: "auto" }}
            loading="eager"
          />
        </div>
      </main>

      {/* Floating Action Bar / Controls */}
      <nav
        aria-label="Resume actions"
        className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 max-w-[95vw]"
      >
        <Link
          href="/"
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-all whitespace-nowrap"
        >
          <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
          <span>Back</span>
        </Link>

        {/* Toggle between Fit to Screen and Scroll View */}
        <button
          onClick={() => setIsFitScreen(!isFitScreen)}
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-all whitespace-nowrap"
          title={isFitScreen ? "Scroll View" : "Fit to Screen"}
        >
          {isFitScreen ? (
            <>
              <ZoomIn className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Scroll View</span>
              <span className="sm:hidden">Full</span>
            </>
          ) : (
            <>
              <ZoomOut className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Fit Screen</span>
              <span className="sm:hidden">Fit</span>
            </>
          )}
        </button>

        <a
          href={resumePdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-all whitespace-nowrap"
          title="View as PDF in new tab"
        >
          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          <span className="hidden sm:inline">View PDF</span>
          <span className="sm:hidden">PDF</span>
        </a>

        <a
          href={resumePdfUrl}
          download={downloadFileName}
          className="flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-lg shadow-purple-600/30 whitespace-nowrap"
          title="Download PDF"
        >
          <Download className="w-3.5 h-3.5 shrink-0" />
          <span>Download</span>
        </a>
      </nav>
    </div>
  );
}
