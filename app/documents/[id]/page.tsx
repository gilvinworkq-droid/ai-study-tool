// app/documents/[id]/page.tsx
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ id: string }>;
  };
  
  export default async function DocumentPage({ params }: Props) {
    const { id } = await params; // 🔥 FIX HERE
  
    return (
      <main className="py-4 space-y-4">
        <h1 className="text-lg font-semibold">Document #{id}</h1>
  
        <div className="flex gap-2 text-xs">
          <button className="rounded-full bg-slate-800 px-3 py-1 border border-slate-800">
            Summary
          </button>
          <button className="rounded-full bg-slate-800 px-3 py-1 border border-slate-800">
            Flashcards
          </button>
          <button className="rounded-full bg-slate-800 px-3 py-1 border border-slate-800">
            Quiz
          </button>
          <button className="rounded-full bg-slate-800 px-3 py-1 border border-slate-800">
            Chat
          </button>
        </div>
      </main>
    );
  }
  
