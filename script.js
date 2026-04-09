const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");

const noTexts = [
    "Sei sicura? 🥺",
    "Ma davvero?",
    "Dai non fare così 😢",
    "Ci rimango male 💔",
    "Ultima possibilità 😭",
    "Ok sto piangendo 😭😭"
];

let index = 0;
let sizeMultiplier = 1;

noBtn.addEventListener("mouseover", () => {

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.transition = "all 0.1s";
});

yesBtn.addEventListener("click", () => {
    if (index === 0) {
        // Se clicca "sì" subito, mostra il messaggio e invita a giocare
        question.textContent = "però se clicchi subito di sì il gioco è già finito, clicca su no";
        index = 0; // Reset per permettere di giocare
    } else {
        // Dopo aver cliccato "no" almeno una volta
        question.textContent = "Sapevo che avresti detto sì 😍";

        // puoi cambiare tutto il contenuto dopo il click
        document.querySelector(".buttons").innerHTML = `
            <p>Preparati per una sorpresa 💌</p>
        `;
    }
});