var frase = $(".frase").text();
var numeroDePlavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanhoFrase");

tamanhoFrase.text(numeroDePlavras);