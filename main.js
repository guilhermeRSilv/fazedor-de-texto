var neg = 0;
var ita = 0;
var sub = 0;
var folha_escrita = document.getElementById('folha');

function negrito () {
    if (neg == 0){
        neg = 1;
        // document.getElementById('folha').style.fontWeight = "bold";
        folha_escrita.value += "<b></b>";
    } 
    else{
        neg = 0;
        folha_escrita.style.fontWeight = "normal";
    }      

    console.log(folha_escrita.value.length);
    var posicao = folha_escrita.value.length;
    folha_escrita.focus();
    folha_escrita.selectionStart = folha_escrita.selectionEnd = posicao - 4;
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

