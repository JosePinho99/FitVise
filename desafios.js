let current = 200;

function addPoints(points) {
    let text = document.getElementById("text");
    current += points;
    text.textContent = `You have ${current} points!`
}