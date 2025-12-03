// app/dashboard/page.tsx
// Later we'll wire this to Supabase; for now it's just structure.

export default function DashboardPage() {
    // TEMP fake data – replace with Supabase query later
    const docs = [
      { id: "1", title: "Thermodynamics Lecture 1" },
      { id: "2", title: "Korean Grammar - Particles" },
    ];
  
    return (
      <main className="py-4">
        <h1 className="text-xl font-semibold mb-3">Your materials</h1>
  
        {/* Upload placeholder – will be hooked to Supabase Storage */}
        <div className="mb-4 rounded-lg border border-dashed border-slate-700 p-4 text-sm">
          <p className="mb-2 font-medium">Upload PDF (coming soon)</p>
          <p className="text-xs text-slate-400">
            This will let you select a PDF from your device and send it to
            Supabase Storage.
          </p>
        </div>
  
        <div className="space-y-2">
          {docs.map((doc) => (
            <a
              key={doc.id}
              href={`/documents/${doc.id}`}
              className="block rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm hover:border-emerald-500"
            >
              {doc.title}
            </a>
          ))}
        </div>
      </main>
    );
  }
  