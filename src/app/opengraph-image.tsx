import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#FFFFFF";
const FG = "#0F172A";
const MUTED = "#475569";
const ACCENT = "#1E3A8A";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: BG,
          color: FG,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 10,
              background: ACCENT,
              color: "#FFFFFF",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            AN
          </div>
          <span style={{ fontSize: 22, fontWeight: 600, color: FG }}>
            {siteConfig.shortName}
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 14px",
              alignSelf: "flex-start",
              borderRadius: 6,
              background: "rgba(30, 58, 138, 0.10)",
              color: ACCENT,
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Available for 2026 internships
          </div>
          <div
            style={{
              fontSize: 86,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: FG,
            }}
          >
            Abu Saleh M Nasim
          </div>
          <div
            style={{
              fontSize: 28,
              color: MUTED,
              lineHeight: 1.4,
              maxWidth: 980,
            }}
          >
            BBA Finance at BUP · CA student at ICAB · Data analytics, research
            and Bangladeshi capital markets.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 24,
            borderTop: "1px solid #E2E8F0",
            fontSize: 18,
            color: MUTED,
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span>One paper on SSRN</span>
            <span style={{ color: ACCENT }}>·</span>
            <span>Two projects on GitHub</span>
            <span style={{ color: ACCENT }}>·</span>
            <span>Class of 2027</span>
          </div>
          <div style={{ color: FG, fontWeight: 600 }}>nasimabeer.me</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
