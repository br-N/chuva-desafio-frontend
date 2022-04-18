$(document).foundation()

function verMais() { 
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("resumo-more");
    var btnMoreText = document.getElementById("resumo-click-more");

    if (dots.style.display == "none"){
        dots.style.display = "inline";
        btnMoreText.innerHTML = "ver mais";
        moreText.style.display = "none";
    }else{
        dots.style.display = "none";
        btnMoreText.innerHTML = "ver menos";
        moreText.style.display = "inline";
    }
}

function criarTopico() {
    var antes = document.getElementById("discus-default");
    var criarTopico = document.getElementById("topic-forms");

    if(criarTopico.style.display == "none"){
        criarTopico.style.display = "block";
        antes.style.display = "none";
    }else{
        criarTopico.style.display = "none";
        antes.style.display = "block";
    }
}

function enviarTopico() {
    var antes = document.getElementById("topic-forms");
    var feedback = document.getElementById("topic-envio");

    if(feedback.style.display == "none"){
        feedback.style.display = "block";
        antes.style.display = "none";
    }else{
        feedback.style.display = "none";
        antes.style.display = "block";
    }
}

function outroTopico() {
    var antes = document.getElementById("topic-envio");
    var outroTopico = document.getElementById("topic-forms");

    if(outroTopico.style.display == "none"){
        outroTopico.style.display = "block";
        antes.style.display = "none";
    }else{
        outroTopico.style.display = "none";
        antes.style.display = "block";
    }
}

function favoritar() {
    var btnFav = document.getElementById("lat-fav-btn");

    if(btnFav.style.backgroundColor == "rgb(237, 120, 57)"){
        btnFav.style.backgroundColor = "#7c2503";
    }else{
        btnFav.style.backgroundColor = "#ED7839";
    }
}

var clicks = 1
function gostar() {
    clicks += 1;
    document.getElementById("likes").innerHTML = clicks + "&nbsp;likes";
}

var clicks2 = 4
function gostar2() {
    clicks2 += 1;
    document.getElementById("likes2").innerHTML = clicks2 + "&nbsp;likes";
}

function verRespostas() {
    var respostas = document.getElementById("pergunta-respostas");

    if(respostas.style.display == "none"){
        respostas.style.display = "block";
    }else{
        respostas.style.display = "none";
    }
}