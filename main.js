var neg = 0;
var ita = 0;
var sub = 0;

function negrito () {
    if (neg == 0){
        neg = 1;
        document.getElementById('folha').style.fontWeight = "bold";
    } 
    else{
        neg = 0;
        document.getElementById('folha').style.fontWeight = "normal";
    }        
}

function sublinhado () {
    if (sub == 0){
        sub = 1;
        document.getElementById('folha').style.textDecoration = "underline";
    } 
    else{
        sub = 0;
        document.getElementById('folha').style.textDecoration = "none";
    }        
}

function italico () {
    if (ita == 0){
        ita = 1;
        document.getElementById('folha').style.fontStyle = "italic";
    } 
    else{
        ita = 0;
        document.getElementById('folha').style.fontStyle = "normal";
    }        
}

document.getElementById('botao_negrito').onclick = negrito;
document.getElementById('botao_italico').onclick = italico;
document.getElementById('botao_sublinhado').onclick = sublinhado;

function mostrar_texto () {
    var texto = document.getElementById('folha').value;
    document.getElementById('texto_mostrado').innerHTML = texto;
}

document.getElementById('botao_salvar').onclick = mostrar_texto;

