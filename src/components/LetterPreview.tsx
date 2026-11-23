
import type { LetterData } from "../types/letter";

type LetterPreviewProps = {
    letter: LetterData | null;
};

export function LetterPreview({ letter }: LetterPreviewProps) {
    const formattedDate = letter?.date
        ? new Intl.DateTimeFormat("en-KE", {
              dateStyle: "long",
          }).format(new Date(`${letter.date}T00:00:00`))
        : "Date will appear here";

    return (
        <article className="letter-paper mx-auto min-h-[700px] max-w-[650px] bg-white p-10 shadow-lg">
            <div className="border-b-2 border-emerald-800 pb-6">
                <h2 className="text-2xl font-bold tracking-widest text-emerald-900">
                    KIGWA SPRINGS
                </h2>
                <p className="mt-2 text-xs uppercase tracking-wider text-gray-500">
                    Official Correspondence
                </p>
            </div>

            <div className="mt-8 space-y-3 text-sm text-gray-700">
                <p>
                    <strong>Date:</strong>{" "}
                    {formattedDate}
                </p>

                <p>
                    <strong>Your Ref:</strong>{" "}
                    {letter?.yourRef || "—"}
                </p>

                <p>
                    <strong>Our Ref:</strong>{" "}
                    {letter?.ourRef || "—"}
                </p>
            </div>

            <div className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-400">
                Your correspondence content will appear here.
            </div>
        </article>
    );
}
