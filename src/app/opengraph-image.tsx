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
          padding: 72,
          background:
            "linear-gradient(135deg, #0b1220 0%, #111c2f 50%, #1a1147 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Soft gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -160,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(59,130,246,0.55), transparent 60%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -160,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(168,85,247,0.45), transparent 60%)",
            filter: "blur(40px)",
          }}
        />

        {/* Top row: brand + status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                color: "white",
                fontSize: 22,
                fontWeight: 800,
              }}
            >
              AN
            </div>
            <span style={{ opacity: 0.92 }}>{siteConfig.shortName}</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 18px",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.08)",
              fontSize: 18,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 9999,
                background: "#34d399",
              }}
            />
            Available for opportunities
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Abu Saleh M Nasim</span>
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            Finance Undergraduate · Chartered Accountancy Student · Data Analyst
            · Researcher
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
            fontSize: 20,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <div style={{ display: "flex", gap: 28 }}>
            <span>BUP · BBA Finance</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>ICAB · CA Certificate Level</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>Dhaka, BD</span>
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            abusalehmnasim.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
