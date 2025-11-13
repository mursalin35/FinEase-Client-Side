import React from "react";
import { Link, useNavigate } from "react-router";

export default function NotFound() {
  document.title="NotFound"
  const navigate = useNavigate();

  // fallback gradient in case CSS variable is missing
  const fallbackGradient = "linear-gradient(135deg, #632ee3 0%, #00b8b0 100%)";
  const gradient =
    typeof window !== "undefined" &&
    getComputedStyle(document.documentElement).getPropertyValue(
      "--gradient-primary"
    )
      ? getComputedStyle(document.documentElement).getPropertyValue(
          "--gradient-primary"
        )
      : fallbackGradient;

  return (
    <main
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "var(--color-base-100)" }}
      aria-labelledby="notfound-heading"
    >
      <div className="max-w-5xl w-full grid grid-cols-12 gap-10 items-center">
        {/* Left: Illustration + subtle glass */}
        <div className="col-span-7 hidden lg:flex items-center justify-center">
          <div
            className="glass-card w-[720px] p-10 rounded-2xl shadow-2xl"
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              boxShadow: "var(--glass-shadow)",
            }}
            aria-hidden="true"
          >
            <div className="flex items-center gap-6">
              <div
                className="w-40 h-40 rounded-xl flex items-center justify-center"
                style={{
                  background: gradient,
                  boxShadow: "0 10px 30px rgba(99,46,227,0.18)",
                }}
              >
                {/* subtle icon */}
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 12h6l3 8 3-16 3 8h6"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="text-left">
                <h3
                  className="text-4xl font-semibold"
                  style={{ color: "var(--color-neutral)" }}
                >
                  Oops — page not found
                </h3>
                <p className="mt-3 text-lg text-neutral/70 max-w-md">
                  The page you’re looking for doesn’t exist or has been moved.
                  Maybe the URL is mistyped or the resource was removed.
                </p>

                <ul className="mt-6 grid gap-2 text-sm text-neutral/70">
                  <li>• Check the URL for typos</li>
                  <li>• Use the navigation to find what you need</li>
                  <li>• If you think this is an error, contact support</li>
                </ul>
              </div>
            </div>

            {/* small stats / helpful links */}
            <div className="mt-8 flex gap-4 items-center">
              <div className="px-4 py-3 rounded-lg bg-white/6 border border-white/8">
                <p className="text-xs text-neutral/60">Total Transactions</p>
                <p
                  className="font-semibold text-lg"
                  style={{ color: "var(--color-neutral)" }}
                >
                  1,248
                </p>
              </div>
              <div className="px-4 py-3 rounded-lg bg-white/6 border border-white/8">
                <p className="text-xs text-neutral/60">Monthly Income</p>
                <p
                  className="font-semibold text-lg"
                  style={{ color: "var(--color-neutral)" }}
                >
                  $6,420
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Action Card */}
        <div className="col-span-12 lg:col-span-5 flex items-center">
          <section
            className="w-full p-8 rounded-2xl glass-card"
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              boxShadow: "var(--glass-shadow)",
            }}
            aria-labelledby="action-heading"
          >
            <header className="flex items-center justify-between">
              <div>
                <h1
                  id="action-heading"
                  className="text-3xl font-bold"
                  style={{ color: "var(--color-neutral)" }}
                >
                  404
                </h1>
                <p className="text-sm mt-1 text-neutral/70">
                  This route could not be found
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs uppercase text-neutral/60">FinEase</p>
                <p className="text-sm text-neutral/50">Personal Finance</p>
              </div>
            </header>

            <div className="mt-6">
              <p className="text-neutral/70 mb-6">
                No worries — you can go back to the dashboard or search for
                transactions from the nav.
              </p>

              <div className="flex gap-3">
                <button
                  type="button"
                  className="btn btn-sm btn-ghost"
                  onClick={() => navigate(-1)}
                  aria-label="Go back"
                >
                  Go back
                </button>

                <Link
                  to="/"
                  className="btn btn-sm"
                  style={{
                    background: "var(--gradient-primary)",
                    border: "none",
                    color: "white",
                    boxShadow: "0 8px 28px rgba(99,46,227,0.18)",
                  }}
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>

            <hr className="my-6 border-neutral/10" />

            <div className="flex items-center justify-between text-sm text-neutral/60">
              <div>
                <p>Need help?</p>
                <a href="mailto:hello@finease.app" className="underline">
                  Contact support
                </a>
              </div>

              <div className="text-right">
                <p className="text-xs">Or try</p>
                <Link to="/transactions" className="text-sm underline">
                  View Transactions
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
