var frase = $(".frase").text();
var numeroDePlavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanhoFrase");

tamanhoFrase.text(numeroDePlavras);

var campo = $(".campo-digitacao");
campo.on("input", function(){
    var conteudo      = campo   .val();
    var qtdPalavras   = conteudo.split(/\s+/).length - 1;
    var qtdCaracteres = conteudo.length;

    $("#contador-palavras")  .text(qtdPalavras);
    $("#contador-caracteres").text(qtdCaracteres);
});

campo.on("focus", function(){
    console.log("Estou digitando!");
});