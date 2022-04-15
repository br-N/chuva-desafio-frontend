$(document).foundation()

function verMais() { 
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("resumo-more");
    var btnMoreText = document.getElementById("resumo-click-more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnMoreText.innerHTML = "ver mais";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnMoreText.innerHTML = "ver menos";
        moreText.style.display = "inline";
    }
}