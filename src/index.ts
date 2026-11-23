
@import "tailwindcss";

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: #1f2937;
}

input {
    display: block;
    width: 100%;
    margin-top: 8px;
    padding: 12px;
    border: 1px solid #d6d3d1;
    border-radius: 6px;
    outline: none;
}

input:focus {
    border-color: #047857;
    box-shadow: 0 0 0 2px rgb(4 120 87 / 10%);
}

form {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

form label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #374151;
}

form button {
    padding: 13px 20px;
    border: none;
    border-radius: 6px;
    background: #14532d;
    color: white;
    font-weight: 600;
    cursor: pointer;
}

form button:hover {
    background: #166534;
}

@media print {
    body {
        background: white;
    }

    .letter-paper {
        width: 210mm;
        max-width: none;
        min-height: 297mm;
        margin: 0;
        padding: 20mm;
        box-shadow: none;
    }
}
