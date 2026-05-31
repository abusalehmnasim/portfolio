import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#FAF7F2",
          color: "#141414",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top — eyebrow + hairline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 16,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#A4231F",
          }}
        >
          <span>Personal Portfolio · Vol. I</span>
          <span
            style={{
              flex: 1,
              height: 1,
              background: "#C8C0B0",
            }}
          />
          <span style={{ color: "#666" }}>Dhaka, BD</span>
        </div>

        {/* Name + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 110,
              lineHeight: 1.02,
              letterSpacing: -2,
              fontWeight: 400,
            }}
          >
            Abu Saleh M Nasim
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: "#3A3A38",
              maxWidth: 980,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            BBA Finance at BUP · CA student at ICAB · sometimes writing,
            sometimes coding.
          </div>
        </div>

        {/* Bottom — meta row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#666",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span>One paper on SSRN</span>
            <span style={{ color: "#A4231F" }}>·</span>
            <span>Two projects on GitHub</span>
            <span style={{ color: "#A4231F" }}>·</span>
            <span>Class of 2027</span>
          </div>
          <div style={{ color: "#141414" }}>nasimabeer.me</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
