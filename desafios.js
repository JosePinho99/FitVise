let current = 200;

function addPoints(points) {
    let text = document.getElementById("text");
    current += points;
    text.textContent = `Tens ${current} pontos!`
}