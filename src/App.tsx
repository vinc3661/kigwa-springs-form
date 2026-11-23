
import { useState } from "react";
import { LetterForm } from "./components/LetterForm";
import { LetterPreview } from "./components/LetterPreview";
import type { LetterData } from "./types/letter";
import { RiverHeader } from "./components/RiverHeader";

function App() {
    const [letter, setLetter] = useState<LetterData | null>(null);

    return (
        <div className="min-h-screen bg-stone-100">
          <RiverHeader />
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
