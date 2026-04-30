const question = document.getElementById("question");
const continueBtn = document.getElementById("yesBtn");
const buttonsDiv = document.getElementById("buttons");

// 🔥 CONFIGURAZIONE (CAMBIA QUI)
const steps = [
    {
        text: "Forse non te ne accorgi, ma ogni giorno cerco di fare lo stesso cioè trovare modi per farti sentire bene, al sicuro, bella e veramente amata. Non so se lo faccio sempre giusto, ma quelle saranno per sempre le mie intenzioni.",
        unlock: new Date("2026-04-30T17:55:00")
    },
    {
        text: "Giorno 2: Ok, vedo che sei curiosa...",
        unlock: new Date("2026-04-25T18:00:00")
    },
    {
        text: "Giorno 3: A questo punto sei dentro al gioco 😌",
        unlock: new Date("2026-04-27T12:00:00")
    },
    {
        text: "Giorno 4: Ultimo livello...",
        unlock: new Date("2026-04-29T20:00:00"),
        video: "video.mov"
    }
];

// 🔒 Stato salvato
let currentStep = parseInt(localStorage.getItem("step")) || 0;

// ⏱ Funzione tempo rimanente
function getTimeRemaining(target) {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) return null;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    return `${hours}h ${minutes}m`;
}

// 🎬 Mostra contenuto
function render() {
    const now = new Date();

    if (currentStep >= steps.length) {
        question.textContent = "Fine 😌";
        continueBtn.style.display = "none";
        return;
    }

    const step = steps[currentStep];

    if (now >= step.unlock) {
        question.textContent = step.text;
        continueBtn.style.display = "inline-block";
    } else {
        const timeLeft = getTimeRemaining(step.unlock);
        question.textContent = `Non ancora... torna tra ${timeLeft}`;
        continueBtn.style.display = "none";
    }
}

// 👉 Click continua
continueBtn.addEventListener("click", () => {
    const step = steps[currentStep];

    // Se ha video → mostra video finale
    if (step.video) {
        continueBtn.style.display = "none";
        const video = document.createElement("video");
        video.src = step.video;
        video.controls = true;
        video.autoplay = true;
        video.style.maxWidth = "100%";
        buttonsDiv.appendChild(video);
    }

    currentStep++;
    localStorage.setItem("step", currentStep);
    render();
});

// 🔁 Aggiorna ogni minuto
setInterval(render, 60000);

// Avvio
render();