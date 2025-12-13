// 3. MockInterviewTimer.jsx
import type React from "react"

const MockInterviewTimer: React.FC = () => {
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
      aria-label="Mock interview timer interface"
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
        <div style={{ padding: "7.355px 8.826px", height: "100%", boxSizing: "border-box", overflow: "hidden" }}>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: "9.562px", lineHeight: "14.711px", color: "hsl(var(--muted-foreground))" }}>
            <p>Mock: TCS (3hr)</p>
            <p>Mock: Accenture (2hr)</p>
            <p>Mock: Wipro (90min)</p>
            <p>Mock: Infosys (2hr)</p>
            <p>Mock: Cognizant (2.5hr)</p>
            <p>Mock: Capgemini (1.5hr)</p>
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
        <div style={{ padding: "9.488px", height: "100%", boxSizing: "border-box", position: "relative", overflow: "hidden" }} className="bg-card border border-border">
          <div style={{ position: "absolute", left: 0, right: 0, width: "100%", top: "47.67px", height: "33.118px", background: "hsl(var(--foreground) / 0.08)", zIndex: 1 }} />
          <div style={{ position: "absolute", left: 0, right: 0, width: "100%", top: "80.791px", height: "45.465px", background: "var(--ai-highlight-primary)", zIndex: 1 }} />
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10.279px", lineHeight: "15.814px", letterSpacing: "-0.3163px", color: "var(--ai-text-color)", width: "100%", maxWidth: "320px", position: "relative", zIndex: 2, margin: 0 }}>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 600 }}>⏱️ TCS Mock</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>02:45 remaining</p>
            <p style={{ margin: "8px 0", whiteSpace: "pre-wrap", fontWeight: 600 }}>📱 Accenture Mock</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>01:58 remaining</p>
            <p style={{ margin: "8px 0", whiteSpace: "pre-wrap", fontWeight: 600 }}>💻 Wipro Mock</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>01:32 remaining</p>
            <p style={{ margin: "8px 0", whiteSpace: "pre-wrap", fontWeight: 600 }}>🔧 Infosys Mock</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>01:42 remaining</p>
            <p style={{ margin: "8px 0", whiteSpace: "pre-wrap", fontWeight: 600 }}>🛠️ Cognizant Mock</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>02:10 remaining</p>
            <p style={{ margin: "8px 0", whiteSpace: "pre-wrap", fontWeight: 600 }}>⚡ Capgemini Mock</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>01:18 remaining</p>
          </div>
          <button style={{ position: "absolute", top: "calc(50% + 29.745px)", right: "20px", transform: "translateY(-50%)", zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center", gap: "3.953px", background: "var(--ai-primary-color)", color: "var(--ai-text-dark)", border: "none", cursor: "pointer", fontWeight: 500, padding: "3.163px 6.326px", borderRadius: "5.535px", fontSize: "10.279px" }}>
            <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500 }}>Start Mock</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MockInterviewTimer
