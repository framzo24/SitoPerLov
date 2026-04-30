
const question = document.getElementById("question");

// 🔥 CONFIGURA QUI
const unlockTime = new Date(Date.now() + 60000);
const finalText = "Forse non te ne accorgi, ma ogni giorno cerco di fare lo stesso cioè trovare modi per farti sentire bene, al sicuro, bella e veramente amata. Non so se lo faccio sempre giusto, ma quelle saranno per sempre le mie intenzioni 💖";

// ⏱ format tempo
function getTimeRemaining(target) {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) return null;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return `${hours}h ${minutes}m ${seconds}s`;
}

// 🔁 render
function render() {
    const timeLeft = getTimeRemaining(unlockTime);

    if (timeLeft) {
        question.textContent = `Torna tra ${timeLeft} ⏳`;
    } else {
        question.textContent = finalText;
    }
}

// aggiorna ogni secondo (più figo)
setInterval(render, 1000);

// avvio
render();