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

noBtn.addEventListener("click", () => {

    // Cambia testo
    if (index < noTexts.length) {
        noBtn.textContent = noTexts[index];
        index++;
    } else {
        noBtn.textContent = "Ok hai vinto 😭";
    }

    // Sposta il bottone random nello schermo (mobile friendly)
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // Rendi il bottone Sì sempre più grande
    sizeMultiplier += 0.25;
    yesBtn.style.transform = `scale(${sizeMultiplier})`;
});

yesBtn.addEventListener("click", () => {
    if (index === 0) {
        question.textContent = "Eh no 😏 devi almeno provare a dire no";
    } else {
        question.textContent = "Sapevo che avresti detto sì 😍";

        document.querySelector(".buttons").innerHTML = `
            <p>Preparati per una sorpresa 💌</p>
        `;
    }
});