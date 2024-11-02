function classificacaoSenha() {
    let senha = document.getElementById("senha").value;

    let numeros = /([0-9])/;
    let alfabeto = /([a-zA-Z])/;
    let alfabetoMaiusculas = /([A-Z])/;
    let chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<,.])/;
    if (senha.length < 6) {
        document.body.innerHTML +=
            "<span style='color:purple'> <br> Senha inválida, insira no mínimo 6 caracteres. </span>";
    } else if (
        senha.match(numeros) &&
        senha.match(alfabeto) &&
        senha.match(alfabetoMaiusculas) &&
        senha.match(chEspeciais)
    ) {
        document.body.innerHTML +=
            "<span style='color:green'> <br> Senha forte. </span>";
    } else if (
        senha.match(numeros) &&
        senha.match(alfabeto) &&
        senha.match(alfabetoMaiusculas)
    ) {
        document.body.innerHTML +=
            "<span style='color:orange'> <br> Senha média, insira pelo menos 1 caracter especial. </span>";
    } else if (senha.match(alfabeto) && senha.match(alfabetoMaiusculas)) {
        document.body.innerHTML +=
            "<span style='color:red'> <br> Senha fraca, insira números e caracteres especiais. </span>";
    } else if (senha.match(alfabetoMaiusculas)) {
        document.body.innerHTML +=
            "<span style='color:red'> <br> Senha muito fraca, insira números, caracteres especiais e letras minúsculas. </span>";
    } else if (senha.match(alfabeto)) {
        document.body.innerHTML +=
            "<span style='color:red'> <br> Senha muito fraca, insira números, caracteres especiais e letras maiúsculas. </span>";
    }
}
