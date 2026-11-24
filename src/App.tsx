
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
        content: "",
    });

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <div className="print:hidden">
                <RiverHeader />
            </div>

            <main className="mx-auto grid max-w-7xl gap-10 p-6 lg:grid-cols-2 lg:gap-12 lg:p-10">
                <section className="min-w-0 p-2 print:hidden">
                    <div className="mb-7 border-b border-[#D5DEE6] pb-4">
                        <h2 className="text-lg font-bold tracking-[0.1em] text-[#103B66]">
                            LETTER DETAILS
                        </h2>
                        <p className="mt-1 text-sm text-[#64748B]">
                            Enter and edit your correspondence
                        </p>
                    </div>

                    <LetterForm
                        letter={letter}
                        onLetterChange={setLetter}
                    />
                </section>

                <section className="min-w-0 p-2">
                    <div className="mb-7 border-b border-[#D5DEE6] pb-4 print:hidden">
                        <h2 className="text-lg font-bold tracking-[0.1em] text-[#103B66]">
                            DOCUMENT PREVIEW
                        </h2>
                        <p className="mt-1 text-sm text-[#64748B]">
                            Review your generated letter
                        </p>
                    </div>

<div className="mb-5 flex min-w-0 flex-col gap-4 print:hidden sm:flex-row sm:items-center sm:justify-between">
    <div className="min-w-0 text-sm">
        <span className="text-[#64748B]">
            Correspondence enquiries:{" "}
        </span>

        <a
            href="mailto:kigwaspringslimited@gmail.com"
            className="break-all font-medium text-[#103B66] underline decoration-[#8A9BAA] underline-offset-4 transition-colors hover:text-[#071D36]"
        >
            kigwaspringslimited@gmail.com
        </a>
    </div>

    <button
        type="button"
        onClick={() => window.print()}
        className="w-full rounded-xl border border-[#D5DEE6] bg-gradient-to-br from-[#E5EAF0] to-[#D5DEE6] px-6 py-3 text-sm font-semibold tracking-wide text-[#103B66] shadow-[5px_5px_12px_#c5ced8,-5px_-5px_12px_#f0f3f6] transition-all duration-300 hover:shadow-[2px_2px_6px_#c5ced8,-2px_-2px_6px_#f0f3f6] active:shadow-inner sm:w-auto sm:shrink-0"
    >
        Print / Save as PDF
    </button>
</div>


                    <LetterPreview letter={letter} />
                </section>
            </main>
        </div>
    );
}

export default App;
