import { FormEvent, useEffect, useMemo, useState } from "react";

type PasswordGateProps = {
  onAuthenticated: () => void;
};

export default function PasswordGate({ onAuthenticated }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const expected = useMemo(() => import.meta.env.VITE_IDEATION_PASSWORD as string | undefined, []);

  useEffect(() => {
    const authed = localStorage.getItem("ideation_authed") === "1";
    if (authed) onAuthenticated();
  }, [onAuthenticated]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!expected) {
      setError("Password not configured");
      return;
    }
    if (password === expected) {
      localStorage.setItem("ideation_authed", "1");
      setError("");
      onAuthenticated();
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="mx-auto max-w-lg px-4 pt-28 pb-12 min-h-screen">
      {/* Client Details Card */}
      <div className="mb-8 rounded-xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-lg bg-white p-2 flex items-center justify-center">
              <img 
                src="https://www.rssterling.ca/wp-content/uploads/2023/07/insignia-_small.png" 
                alt="RS Sterling Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-white mb-1">Sterling Fire Protection Inc.</h2>
            <p className="text-sm text-neutral-400 mb-3">Client: Scott Sushynski</p>
            <a 
              href="https://www.rssterling.ca/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
            >
              <span>View current website</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Password Form */}
      <div className="rounded-xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm p-6">
        <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Enter Password</h1>
        <p className="text-sm text-neutral-300 mb-6">This page is private and unlisted.</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-neutral-600 bg-neutral-800 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-md bg-white px-3 py-2.5 text-black font-medium hover:bg-neutral-100 transition-colors"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}


