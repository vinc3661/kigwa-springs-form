
import type { LetterData } from "../types/letter";

type LetterPreviewProps = {
    letter: LetterData;
};

export function LetterPreview({ letter }: LetterPreviewProps) {
    const formattedDate = letter.date
        ? new Intl.DateTimeFormat("en-KE", {
              dateStyle: "long",
          }).format(new Date(`${letter.date}T00:00:00`))
        : "—";

    return (
        <article className="letter-paper w-full text-[#263442]">
            <header className="border-b-2 border-[#8A9BAA] pb-5">
                <h1 className="text-3xl font-bold tracking-[0.18em] text-[#103B66]">
                    KIGWA SPRINGS LIMITED
                </h1>

                <div className="mt-3 space-y-1 text-xs text-gray-600">
                    <p>P.O. BOX 2375-00900, KIAMBU, KENYA, E.A.</p>
                    <p>Tel: +254 101 628 200</p>
                    <p>Email: pmkinuthia3@yahoo.com</p>
                </div>

                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-[#103B66]">
                    Official Correspondence
                </p>
            </header>

            <div className="mt-10 space-y-3 text-sm">
                <p>
                    <strong className="text-[#103B66]">Date:</strong>{" "}
                    {formattedDate}
                </p>

                <p>
                    <strong className="text-[#103B66]">Your Ref:</strong>{" "}
                    {letter.yourRef || "—"}
                </p>

                <p>
                    <strong className="text-[#103B66]">Our Ref:</strong>{" "}
                    {letter.ourRef || "—"}
                </p>
            </div>

            <div className="mt-12 text-sm leading-7">
                <p>Dear Sir/Madam,</p>

                <div className="mt-6 whitespace-pre-wrap">
                    {letter.content || "Your correspondence content will appear here."}
                </div>

                <div className="mt-10">
                    <p>Yours faithfully,</p>
                    <p className="mt-8 font-semibold">
                        For Kigwa Spring Limited
                    </p>
                </div>
            </div>
        </article>
    );
}
