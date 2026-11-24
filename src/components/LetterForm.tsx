
import type { LetterData } from "../types/letter";

type LetterFormProps = {
    letter: LetterData;
    onLetterChange: (letter: LetterData) => void;
};

export function LetterForm({ letter, onLetterChange }: LetterFormProps) {
    const handleChange = (field: keyof LetterData, value: string) => {
        onLetterChange({
            ...letter,
            [field]: value,
        });
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    value={letter.date}
                    onChange={(e) => handleChange("date", e.currentTarget.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="yourRef">Your Reference</label>
                <input
                    id="yourRef"
                    type="text"
                    placeholder="Enter recipient's reference"
                    value={letter.yourRef}
                    onChange={(e) => handleChange("yourRef", e.currentTarget.value)}
                />
            </div>

            <div>
                <label htmlFor="ourRef">Our Reference</label>
                <input
                    id="ourRef"
                    type="text"
                    placeholder="Enter Kigwa Springs reference"
                    value={letter.ourRef}
                    onChange={(e) => handleChange("ourRef", e.currentTarget.value)}
                />
            </div>

            <div>
                <label htmlFor="content">Correspondence Content</label>
                <textarea
                    id="content"
                    rows={10}
                    placeholder="Write the body of your letter here..."
                    value={letter.content}
                    onChange={(e) => handleChange("content", e.currentTarget.value)}
                    className="mt-2 w-full rounded-md border border-stone-300 bg-white p-3 text-sm leading-6 outline-none focus:border-[#103B66] focus:ring-2 focus:ring-[#103B66]/10"
                />
            </div>
        </form>
    );
}
