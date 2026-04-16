const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");



const noTexts = [
    "Grazie per essere stata al gioco, cliccami di nuovo ahah",
    "Ah quindi mi stai ascoltando davvero? Cliccami",
    "No vabbè ora incredibile che funziona, riprova",
    "Ok ok ti piace davvero stare al gioco... vediamo (ancora)",
    "Ultimissima volta",
    "Grazie amore mio, è stato un piacere... puoi cliccare l'altro"
];

let index = 0;
let sizeMultiplier = 1;

noBtn.addEventListener("click", () => {

    // Cambia testo
    if (index < noTexts.length) {
        noBtn.textContent = noTexts[index];
        index++;
    } else {
        noBtn.textContent = "Vabbè ora basta, clicca l'altro";
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

const buttonsDiv = document.querySelector(".buttons");

let finished = false;

yesBtn.addEventListener("click", () => {
    if (index === 0) {
        question.textContent = "Subito Eccerto? Prova a cliccare sul no";
    } else {
        if (finished) return;

        finished = true;
        question.textContent = "Ci mancherebbe che dicessi no eh";
        yesBtn.style.display = "none";
        const video = document.createElement("video");
        video.src = "video.mov";
        video.controls = true;
        video.autoplay = true;
        video.style.maxWidth = "80%";

        document.querySelector(".buttons").appendChild(video);
    }
});