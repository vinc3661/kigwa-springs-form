
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

    const [isGenerating, setIsGenerating] = useState(false);

    const previewRef = useRef<HTMLElement>(null);

    const generatePDF = async (): Promise<File | null> => {
        const element = previewRef.current;

        if (!element) {
            alert("Letter preview could not be found.");
            return null;
        }

        try {
            setIsGenerating(true);

            const canvas = await html2canvas(element, {
                scale: 2,
                backgroundColor: "#ffffff",
                useCORS: true,
            });

            const image = canvas.toDataURL("image/png");

            const pdf = new jsPDF("p", "mm", "a4");

            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();

            const imageHeight =
                (canvas.height * pageWidth) / canvas.width;

            let heightLeft = imageHeight;
            let position = 0;

            pdf.addImage(image, "PNG", 0, position, pageWidth, imageHeight);
            heightLeft -= pageHeight;

            while (heightLeft > 0) {
                position = heightLeft - imageHeight;
                pdf.addPage();
                pdf.addImage(
                    image,
                    "PNG",
                    0,
                    position,
                    pageWidth,
                    imageHeight
                );
                heightLeft -= pageHeight;
            }

            const pdfBlob = pdf.output("blob");

            const filename = `Kigwa-Springs-Letter-${letter.ourRef || "correspondence"}.pdf`;

            return new File([pdfBlob], filename, {
                type: "application/pdf",
            });
        } catch (error) {
            console.error("PDF generation failed:", error);
            alert("Unable to generate PDF. Please try again.");
            return null;
        } finally {
            setIsGenerating(false);
        }
    };

    const handleDownload = async () => {
        const file = await generatePDF();

        if (!file) return;

        const url = URL.createObjectURL(file);
        const link = document.createElement("a");

        link.href = url;
        link.download = file.name;
        link.click();

        URL.revokeObjectURL(url);
    };

    const handleEmail = async () => {
        const file = await generatePDF();

        if (!file) return;

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            try {
                await navigator.share({
                    files: [file],
                    title: "Kigwa Springs Limited Correspondence",
                    text: "Please find the attached correspondence letter.",
                });
            } catch (error) {
                if ((error as Error).name !== "AbortError") {
                    console.error("Sharing failed:", error);
                    alert("Unable to open sharing options. Please download the PDF instead.");
                }
            }
        } else {
            const url = URL.createObjectURL(file);
            const link = document.createElement("a");

            link.href = url;
            link.download = file.name;
            link.click();

            URL.revokeObjectURL(url);

            alert("PDF downloaded. Please attach it manually in your email app.");
        }
    };

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

                        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                            <button
                                type="button"
                                onClick={handleDownload}
                                disabled={isGenerating}
                                className="w-full rounded-xl border border-[#D5DEE6] bg-gradient-to-br from-[#E5EAF0] to-[#D5DEE6] px-5 py-3 text-sm font-semibold text-[#103B66] shadow-[5px_5px_12px_#c5ced8,-5px_-5px_12px_#f0f3f6] disabled:opacity-50 sm:w-auto"
                            >
                                Download PDF
                            </button>

                            <button
                                type="button"
                                onClick={handleEmail}
                                disabled={isGenerating}
                                className="w-full rounded-xl bg-[#103B66] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#071D36] disabled:opacity-50 sm:w-auto"
                            >
                                {isGenerating
                                    ? "Generating..."
                                    : "Download & Email"}
                            </button>

                            <button
                                type="button"
                                onClick={() => window.print()}
                                className="w-full rounded-xl border border-[#D5DEE6] bg-gradient-to-br from-[#E5EAF0] to-[#D5DEE6] px-5 py-3 text-sm font-semibold text-[#103B66] shadow-[5px_5px_12px_#c5ced8,-5px_-5px_12px_#f0f3f6] sm:w-auto"
                            >
                                Print / Save as PDF
                            </button>
                        </div>
                    </div>

                    <LetterPreview
                        letter={letter}
                        previewRef={previewRef}
                    />
                </section>
            </main>
        </div>
    );
}

export default App;
