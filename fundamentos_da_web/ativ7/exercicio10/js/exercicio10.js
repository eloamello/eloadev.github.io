function codificar() {
    let texto = document.getElementById("frase").value;
    let textoArray = texto.toLowerCase().split("");
    for (let i = 0; i < textoArray.length; i++) {
        textoArray[i] = trocaLetra(textoArray[i]);
    }
    let result = textoArray.join("");
    document.body.innerHTML += "<br>" + result;
}

function trocaLetra(letra) {
    switch (letra) {
        case "t":
            return "p";
        case "p":
            return "t";
        case "e":
            return "o";
        case "o":
            return "e";
        case "n":
            return "l";
        case "l":
            return "n";
        case "i":
            return "a";
        case "a":
            return "i";
        case "s":
            return "r";
        case "r":
            return "s";
        default:
            return letra;
    }
}
