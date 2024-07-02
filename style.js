document.getElementById("colorbtn").addEventListener("click", function() {
    document.body.style.background = `linear-gradient(to right, ${RandomColor()}, ${RandomColor()})`;
});

function RandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + letters[Math.floor(Math.random() * 16)];
    }
    return color;
}