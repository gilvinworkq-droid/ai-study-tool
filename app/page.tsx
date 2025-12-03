// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="w-full max-w-md px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight mb-2">
          AI Study Tool
        </h1>
        <p className="text-sm text-slate-300 mb-6">
          Upload your lecture PDFs, get instant summaries and flashcards.
          Works on desktop and mobile.
        </p>

        <div className="space-y-3">
          <Link
            href="/dashboard"
            className="block w-full rounded-lg bg-emerald-500 py-2.5 text-center text-sm font-medium hover:bg-emerald-400 transition"
          >
            Go to dashboard
          </Link>

          <p className="text-xs text-slate-400 text-center">
            You’ll be asked to sign in with Google the first time.
          </p>
        </div>
      </div>
    </main>
  );
}
