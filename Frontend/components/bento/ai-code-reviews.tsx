// 1. CompanyPrepDashboard.jsx
import type React from "react"

const CompanyPrepDashboard: React.FC = () => {
  const themeVars = {
    "--ai-primary-color": "#00ff88",
    "--ai-background-color": "#000000",
    "--ai-text-color": "#ffffff",
    "--ai-text-dark": "#000000",
    "--ai-border-color": "rgba(255,255,255,0.1)",
    "--ai-border-main": "rgba(255,255,255,0.05)",
    "--ai-highlight-primary": "rgba(0,255,136,0.12)",
    "--ai-highlight-header": "rgba(0,255,136,0.2)",
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "transparent",
        ...themeVars,
      } as React.CSSProperties}
      role="img"
      aria-label="Company dashboard showing 50+ companies with question counts"
    >
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%) scale(0.9)",
          width: "340px",
          height: "205.949px",
          background: "linear-gradient(180deg, var(--ai-background-color) 0%, transparent 100%)",
          opacity: 0.6,
          borderRadius: "8.826px",
          border: "0.791px solid var(--ai-border-color)",
          overflow: "hidden",
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          className="border rounded-lg bg-card"
          style={{
            padding: "7.355px 8.826px",
            height: "100%",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "9.562px",
              lineHeight: "14.711px",
              letterSpacing: "-0.2942px",
              color: "hsl(var(--muted-foreground))",
              width: "100%",
              maxWidth: "320px",
              margin: 0,
            }}
          >
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>TCS (450+ Questions)</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>Accenture (380+)</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>Wipro (320+)</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>Infosys (290+)</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>Cognizant (260+)</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>Capgemini (220+)</p>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "51.336px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "340px",
          height: "221.395px",
          background: "var(--ai-background-color)",
          backdropFilter: "blur(16px)",
          borderRadius: "9.488px",
          border: "1px solid var(--ai-border-main)",
          overflow: "hidden",
        }}
      >
        <div
          className="bg-card border border-border"
          style={{
            padding: "9.488px",
            height: "100%",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              width: "100%",
              top: "47.67px",
              height: "33.118px",
              background: "hsl(var(--foreground) / 0.08)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              width: "100%",
              top: "80.791px",
              height: "45.465px",
              background: "var(--ai-highlight-primary)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "10.279px",
              lineHeight: "15.814px",
              letterSpacing: "-0.3163px",
              color: "var(--ai-text-color)",
              width: "100%",
              maxWidth: "320px",
              position: "relative",
              zIndex: 2,
              margin: 0,
            }}
          >
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 600 }}>🏢 TCS</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>450+ Questions</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 600 }}>📱 Accenture</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>380+ Questions</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 600 }}>💻 Wipro</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>320+ Questions</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 600 }}>🔧 Infosys</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>290+ Questions</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 600 }}>🛠️ Cognizant</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>260+ Questions</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 600 }}>⚡ Capgemini</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>220+ Questions</p>
          </div>
          <button
            style={{
              position: "absolute",
              top: "calc(50% + 29.745px)",
              right: "20px",
              transform: "translateY(-50%)",
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3.953px",
              background: "var(--ai-primary-color)",
              color: "var(--ai-text-dark)",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              padding: "3.163px 6.326px",
              borderRadius: "5.535px",
              fontSize: "10.279px",
              lineHeight: "15.814px",
              letterSpacing: "-0.3163px",
            }}
          >
            <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500 }}>
              Prep Now
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CompanyPrepDashboard
