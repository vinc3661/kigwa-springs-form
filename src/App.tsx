
import { useState } from "react";
import { LetterForm } from "./components/LetterForm";
import { LetterPreview } from "./components/LetterPreview";
import type { LetterData } from "./types/letter";

function App() {
    const [letter, setLetter] = useState<LetterData | null>(null);

    return (
        <div className="min-h-screen bg-stone-100">
            <header className="bg-[#10231e] px-6 py-12 text-center text-white">
                <p className="mb-2 text-sm uppercase tracking-[0.4em] text-emerald-200">
                    Official Correspondence
                </p>
                <h1 className="text-4xl font-semibold tracking-widest">
                    KIGWA SPRINGS
                </h1>
                <p className="mt-3 text-sm text-stone-300">
                    Correspondence Management
                </p>
            </header>

            <main className="mx-auto grid max-w-7xl gap-8 p-6 lg:grid-cols-2 lg:p-10">
                <section className="rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="mb-6 text-xl font-semibold text-gray-900">
                        Letter Details
                    </h2>

                    <LetterForm onSubmitLetter={setLetter} />
                </section>

                <section>
                    <h2 className="mb-6 text-xl font-semibold text-gray-900">
                        Document Preview
                    </h2>

                    <LetterPreview letter={letter} />
                </section>
            </main>
        </div>
    );
}

export default App;
