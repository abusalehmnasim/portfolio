import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#F3ECD7";
const INK = "#1F1F58";
const PINK = "#F45EA0";

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
          padding: 64,
          background: PAPER,
          color: INK,
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative pink halftone dot blob */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: PINK,
            opacity: 0.18,
          }}
        />

        {/* Masthead bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            borderTop: `3px solid ${INK}`,
            borderBottom: `3px solid ${INK}`,
            padding: "12px 0",
            fontSize: 16,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: INK,
          }}
        >
          <span style={{ color: PINK }}>Vol. I</span>
          <span>· Issue 01</span>
          <span style={{ flex: 1 }} />
          <span style={{ color: INK }}>Risograph print · 2026</span>
        </div>

        {/* Headline with offset pink */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              position: "relative",
              fontSize: 110,
              lineHeight: 0.92,
              letterSpacing: -3,
              fontWeight: 700,
              textTransform: "uppercase",
              color: INK,
            }}
          >
            {/* Pink offset duplicate */}
            <span
              style={{
                position: "absolute",
                top: 10,
                left: 12,
                color: PINK,
                zIndex: 0,
              }}
            >
              ABU SALEH M NASIM
            </span>
            <span style={{ position: "relative", zIndex: 1 }}>
              ABU SALEH M NASIM
            </span>
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.4,
              color: INK,
              maxWidth: 980,
              textTransform: "uppercase",
              letterSpacing: 3,
            }}
          >
            BBA Finance · BUP // CA Student · ICAB // Writes · Codes · Reads
            annual reports for fun
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `3px solid ${INK}`,
            paddingTop: 16,
            fontSize: 18,
            color: INK,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span>One paper on SSRN</span>
            <span style={{ color: PINK }}>·</span>
            <span>Two projects on GitHub</span>
            <span style={{ color: PINK }}>·</span>
            <span>Class of 2027</span>
          </div>
          <div
            style={{
              fontWeight: 700,
              padding: "6px 12px",
              border: `3px solid ${INK}`,
              color: PINK,
            }}
          >
            nasimabeer.me
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
