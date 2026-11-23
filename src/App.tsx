
import { useState } from "react";
import { LetterForm } from "./components/LetterForm";
import { LetterPreview } from "./components/LetterPreview";
import type { LetterData } from "./types/letter";
import { RiverHeader } from "./components/RiverHeader";

const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

function App() {
    const [letter, setLetter] = useState<LetterData>({
        date: getToday(),
        yourRef: "",
        ourRef: "",
    });

    return (
        <div className="min-h-screen bg-stone-100">
            <RiverHeader />

            <main className="mx-auto grid max-w-7xl gap-8 p-6 lg:grid-cols-2 lg:p-10">

                <section className="rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="mb-6 text-xl font-semibold text-gray-900">
                        Letter Details
                    </h2>

                    <LetterForm
                        letter={letter}
                        onLetterChange={setLetter}
                    />
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
