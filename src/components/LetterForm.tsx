
import { useState, type FormEvent } from "react";

type LetterData = {
    date: string;
    yourRef: string;
    ourRef: string;
};

type LetterFormProps = {
    onSubmitLetter: (letter: LetterData) => void;
};


const getToday = (): string => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

export function LetterForm({ onSubmitLetter }: LetterFormProps) {

    const [letter, setLetter] = useState<LetterData>({
        date: getToday(),
        yourRef: "",
        ourRef: "",
    });

    const handleChange = (
        field: keyof LetterData,
        value: string
    ) => {
        setLetter((previousLetter) => ({
            ...previousLetter,
            [field]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitLetter(letter);
    };

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    value={letter.date}
                    onChange={(e) =>
                        handleChange("date", e.currentTarget.value)
                    }
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
                    onChange={(e) =>
                        handleChange("yourRef", e.currentTarget.value)
                    }
                />
            </div>

            <div>
                <label htmlFor="ourRef">Our Reference</label>
                <input
                    id="ourRef"
                    type="text"
                    placeholder="Enter Kigwa Springs reference"
                    value={letter.ourRef}
                    onChange={(e) =>
                        handleChange("ourRef", e.currentTarget.value)
                    }
                />
            </div>

            <button type="submit">
                Generate Letter
            </button>

        </form>
    );
}
