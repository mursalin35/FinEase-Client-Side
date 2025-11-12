import React, { useEffect, useState } from "react";

const LoadingSpinner = ({ size = 72, message = "Loading..." }) => {
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(darkQuery.matches);
    const listener = (e) => setIsDark(e.matches);
    darkQuery.addEventListener("change", listener);
    return () => darkQuery.removeEventListener("change", listener);
  }, []);

  const ringSize = size;
  const dotSize = Math.max(8, Math.round(size * 0.14));
  const textSize = Math.max(12, Math.round(size * 0.18));

  const haloBg = isDark
    ? "rgba(30,30,40,0.9)" // dark mode halo around F
    : "rgba(255,255,255,0.86)"; // light mode halo

  const textColor = isDark ? "#EDEBFF" : "#555565";
  const subTextColor = isDark ? "#B0B3C6" : "#6B6B82";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="flex flex-col items-center justify-center gap-4"
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: ringSize, height: ringSize }}
      >
        <div
          aria-hidden="true"
          className="rounded-full animate-spin"
          style={{
            width: ringSize,
            height: ringSize,
            padding: Math.max(6, Math.round(ringSize * 0.1)),
            background:
              "conic-gradient(from 180deg at 50% 50%, #632EE3, #4CB5AE, #632EE3)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 40%), black calc(100% - 39%))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 40%), black calc(100% - 39%))",
            boxShadow: "0 8px 30px rgba(99,46,227,0.12)",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute rounded-full flex items-center justify-center"
          style={{
            width: Math.round(ringSize * 0.58),
            height: Math.round(ringSize * 0.58),
            background: haloBg,
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: isDark
              ? "1px solid rgba(140,123,255,0.15)"
              : "1px solid rgba(99,46,227,0.06)",
          }}
        >
          <div className="relative" style={{ width: "100%", height: "100%" }}>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: Math.round(ringSize * 0.28),
                height: Math.round(ringSize * 0.28),
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(135deg, rgba(140,123,255,0.95), rgba(0,209,178,0.95))",
                color: "white",
                fontWeight: 700,
                fontSize: Math.max(10, Math.round(textSize * 0.8)),
                boxShadow: "0 6px 18px rgba(140,123,255,0.25)",
              }}
            >
              F
            </div>

            <div
              aria-hidden="true"
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: "50%",
                top: Math.round(ringSize * 0.03),
                width: dotSize,
                height: dotSize,
                borderRadius: "9999px",
                background: "#8C7BFF",
                boxShadow: "0 6px 18px rgba(140,123,255,0.25)",
                animation:
                  "pulse 1.6s infinite ease-in-out, orbit 2.4s linear infinite",
                transformOrigin: `${Math.round(ringSize * 0.5)}px ${Math.round(
                  ringSize * 0.5
                )}px`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <p
          className="font-semibold"
          style={{ color: textColor, fontSize: textSize }}
        >
          {message}
        </p>
        <p
          className="text-sm mt-1"
          style={{ color: subTextColor, fontSize: Math.max(11, textSize - 4) }}
        >
          Please wait a moment...
        </p>
      </div>

      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateY(0); }
          100% { transform: rotate(360deg) translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.7); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
