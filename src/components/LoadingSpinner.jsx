import React from "react";

/**
 * FinEaseLoader
 * Props:
 *  - size: number (pixels) default: 72
 *  - message: string (optional) default: "Loading..."
 *
 * Usage:
 *  <FinEaseLoader size={96} message="Preparing dashboard..." />
 */
const LoadingSpinner = ({ size = 72, message = "Loading..." }) => {
  const ringSize = size;
  const dotSize = Math.max(8, Math.round(size * 0.14));
  const textSize = Math.max(12, Math.round(size * 0.18));

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="flex flex-col items-center justify-center gap-4"
    >
      {/* Spinner container */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: ringSize, height: ringSize }}
      >
        {/* Rotating gradient ring */}
        <div
          aria-hidden="true"
          className="rounded-full animate-spin"
          style={{
            width: ringSize,
            height: ringSize,
            padding: Math.max(6, Math.round(ringSize * 0.10)),
            background:
              "conic-gradient(from 180deg at 50% 50%, #632EE3, #4CB5AE, #632EE3)",
            // mask to produce ring (hollow center)
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 40%), black calc(100% - 39%))",
            mask:
              "radial-gradient(farthest-side, transparent calc(100% - 40%), black calc(100% - 39%))",
            // subtle shadow
            boxShadow: "0 8px 30px rgba(99,46,227,0.12)",
          }}
        />

        {/* Inner frosted card (glass) */}
        <div
          aria-hidden="true"
          className="absolute rounded-full flex items-center justify-center"
          style={{
            width: Math.round(ringSize * 0.58),
            height: Math.round(ringSize * 0.58),
            background: "rgba(255,255,255,0.86)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(99,46,227,0.06)",
          }}
        >
          {/* Pulsing dot that travels around (visual anchor) */}
          <div
            aria-hidden="true"
            className="relative"
            style={{ width: "100%", height: "100%" }}
          >
            {/* center icon / small logo mark */}
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
                  "linear-gradient(135deg, rgba(99,46,227,0.95), rgba(76,181,174,0.95))",
                color: "white",
                fontWeight: 700,
                // fontFamily: "Inter, Poppins, sans-serif",
                fontSize: Math.max(10, Math.round(textSize * 0.8)),
                boxShadow: "0 6px 18px rgba(99,46,227,0.14)",
              }}
            >
              {/* small mark — letter F */}
              F
            </div>

            {/* animated orbiting dot (pure CSS animation using keyframes below) */}
            <div
              aria-hidden="true"
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                // position at top center of inner circle and will orbit by rotating its parent
                left: "50%",
                top: Math.round(ringSize * 0.03),
                width: dotSize,
                height: dotSize,
                borderRadius: "9999px",
                background: "#632EE3",
                boxShadow: "0 6px 18px rgba(99,46,227,0.25)",
                animation: "pulse 1.6s infinite ease-in-out, orbit 2.4s linear infinite",
                transformOrigin: `${Math.round(ringSize * 0.5)}px ${Math.round(
                  ringSize * 0.5
                )}px`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Accessible label */}
      <div className="text-center">
        <p
          className="font-semibold"
          style={{
            color: "#1F1F2E",
            fontSize: textSize,
            // fontFamily: "Inter, Poppins, sans-serif",
          }}
        >
          {message}
        </p>
        <p
          className="text-sm mt-1"
          style={{ color: "#6B6B82", fontSize: Math.max(11, textSize - 4) }}
        >
          Please wait a moment...
        </p>
      </div>

      {/* Inline keyframes for orbit and pulse */}
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateY(0); }
          100% { transform: rotate(360deg) translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.7); opacity: 0.6; }
        }
        /* Make the inner orbiting dot actually orbit by rotating its grandparent.
           We rotate the entire inner relative container to create orbit effect */
        .glass-orbit {
          animation: orbit 2.4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;



