import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { siteConfig, publication } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Abu Saleh M Nasim",
    "Finance Portfolio",
    "Chartered Accountancy",
    "BUP",
    "ICAB",
    "Data Analyst",
    "Financial Modeling",
    "Policy Research",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    creator: "@abusalehmnasim",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1220" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  jobTitle: "Finance Undergraduate & Chartered Accountancy Student",
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Bangladesh University of Professionals",
    },
    {
      "@type": "EducationalOrganization",
      name: "Institute of Chartered Accountants of Bangladesh",
    },
  ],
  sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
};

const publicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: publication.subtitle
    ? `${publication.title}: ${publication.subtitle}`
    : publication.title,
  name: publication.title,
  alternativeHeadline: publication.subtitle,
  abstract: publication.abstract,
  datePublished: publication.postedDate,
  dateCreated: publication.writtenDate,
  author: publication.authors.map((name) => ({
    "@type": "Person",
    name,
    url: siteConfig.url,
  })),
  keywords: publication.keywords.join(", "),
  url: publication.url,
  sameAs: [publication.url, publication.doiUrl],
  isPartOf: { "@type": "Periodical", name: publication.venue },
  publisher: {
    "@type": "Organization",
    name: "Social Science Research Network",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={inter.variable}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(publicationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
