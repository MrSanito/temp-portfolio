import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishal (MrSanito) | Backend & AI/ML Engineer",
  description: "Portfolio of Vishal (MrSanito), a Backend Engineer and AI/ML enthusiast. Explore projects like Quiz Master Turbo and SoloBuild.",
  keywords: ["Vishal", "MrSanito", "Zynito", "Backend Engineer", "AI/ML Engineer", "Portfolio", "Full Stack Developer", "Quiz Master Turbo", "SoloBuild"],
  authors: [{ name: "Vishal", url: "https://zynito.in" }],
  creator: "Vishal",
  publisher: "Vishal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zynito.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Vishal (MrSanito) | Backend & AI/ML Engineer",
    description: "Portfolio of Vishal (MrSanito), a Backend Engineer and AI/ML enthusiast.",
    url: 'https://zynito.in',
    siteName: 'Vishal Portfolio',
    images: [
      {
        url: '/project-portfolio.png',
        width: 1200,
        height: 630,
        alt: 'Vishal Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vishal (MrSanito) | Backend & AI/ML Engineer",
    description: "Portfolio of Vishal (MrSanito), a Backend Engineer and AI/ML enthusiast.",
    images: ['/project-portfolio.png'],
  },
  verification: {
    google: "kGg9dVXDQIDfsG4ViiNYTmSywWLRcsjH8Odq42Kibbw",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vishal",
    "alternateName": ["MrSanito", "Zynito"],
    "url": "https://zynito.in",
    "image": "https://wallpapers-clan.com/wp-content/uploads/2023/02/jujutsu-kaisen-gojo-satoru-pfp-1.jpg",
    "sameAs": [
      "https://github.com/MrSanito",
    ],
    "jobTitle": "Backend Engineer",
    "description": "Backend Engineer and AI/ML Engineer (learning), building accessible, pixel-perfect, performant web experiences."
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vb5mbbh8dv");
          `}
        </Script>
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F03QTJ0W3Q"
          strategy="afterInteractive"
        />
        
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-F03QTJ0W3Q');
          `}
        </Script>

        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
