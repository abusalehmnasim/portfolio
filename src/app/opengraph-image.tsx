import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#08100A";
const FG = "#E4E9E4";
const PHOSPHOR = "#4AFF88";
const AMBER = "#FFBE3D";
const DIM = "#5F6B65";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 56,
          background: BG,
          color: FG,
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Status bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 14,
            borderBottom: `1px solid #1B2B22`,
            fontSize: 16,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <span style={{ color: PHOSPHOR }}>NASIM-TERM</span>
            <span style={{ color: DIM }}>v2.06</span>
            <span style={{ color: PHOSPHOR }}>● Online</span>
          </div>
          <div style={{ display: "flex", gap: 18, color: DIM }}>
            <span>Dhaka 22:08:14</span>
            <span style={{ color: FG, border: `1px solid ${DIM}`, padding: "4px 8px" }}>
              ⌘K
            </span>
          </div>
        </div>

        {/* Prompt line */}
        <div
          style={{
            marginTop: 36,
            fontSize: 20,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: DIM,
            display: "flex",
            gap: 6,
          }}
        >
          <span style={{ color: PHOSPHOR }}>guest@nasim-term</span>
          <span>:</span>
          <span style={{ color: AMBER }}>~/portfolio</span>
          <span>$ ./run.sh</span>
        </div>

        {/* Big name */}
        <div
          style={{
            marginTop: 24,
            fontSize: 110,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 0.95,
            color: FG,
            display: "flex",
            alignItems: "center",
          }}
        >
          ABU SALEH M NASIM
          <span
            style={{
              marginLeft: 12,
              color: PHOSPHOR,
              fontSize: 110,
              lineHeight: 0.95,
            }}
          >
            ▌
          </span>
        </div>

        {/* Subline */}
        <div
          style={{
            marginTop: 30,
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: FG,
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <span>
            <span style={{ color: PHOSPHOR }}>[role]</span> BBA Finance · BUP
          </span>
          <span>
            <span style={{ color: PHOSPHOR }}>[cert]</span> CA · ICAB
          </span>
          <span>
            <span style={{ color: PHOSPHOR }}>[status]</span>{" "}
            <span style={{ color: AMBER }}>2026 internship</span>
          </span>
        </div>

        {/* Footer / ticker */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid #1B2B22`,
            paddingTop: 14,
            fontSize: 17,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: DIM,
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span>DSEX <span style={{ color: PHOSPHOR }}>▲ 0.84%</span></span>
            <span>BATBC <span style={{ color: PHOSPHOR }}>▲ 1.12%</span></span>
            <span>GP <span style={{ color: "#FF5A60" }}>▼ 0.42%</span></span>
          </div>
          <div
            style={{
              color: FG,
              border: `1px solid ${PHOSPHOR}`,
              padding: "6px 12px",
              fontWeight: 700,
            }}
          >
            <span style={{ color: PHOSPHOR }}>{">"}</span> nasimabeer.me
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
