import getJSON from "./json.js";

document.addEventListener("DOMContentLoaded", function() {
    const main = document.querySelector(".main");
    const cartao = document.createElement("div");
    let conteudoFilmes = JSON.parse(
        getJSON("https://rafaelescalfoni.github.io/desenv_web/filmes.json")
    );

    for (let i = 0; i < conteudoFilmes.length; i++) {
        let classificacao = conteudoFilmes[i].classificacao;
        let elenco = conteudoFilmes[i].elenco;
        let img = conteudoFilmes[i].figura;
        let generos = conteudoFilmes[i].generos;
        let resumo = conteudoFilmes[i].resumo;
        let titulo = conteudoFilmes[i].titulo;
        let titulosSemelhantes = conteudoFilmes[i].titulosSemelhantes;

        if (titulosSemelhantes.length == 1) {
            cartao.innerHTML = `
            <div class="mainCartao">
            <div class="mainSec">
              <section class="topMainConteudo">
                          <img class="topMainCartaoImg" src="${img}" alt="">
                          <h2>${titulo}</h2>
                          <p>${generos}</p>
                          <p><h3>Elenco</h3>${elenco}</p>
                        </section>
                        <section class="classif">
                          <p class="age${i}">${classificacao}</p> 
                        </section>
                      </div>
                      <section>
                        <p>${resumo}</p>
                      </section>
                      <h3>Titulos Semelhantes</h3>

      <h3>Titulos Semelhantes</h3>
      <div class="FilmesSemelhantes">
      <div class="mainCartaoImagensSemelhantes">
        <img src="${conteudoFilmes[titulosSemelhantes[0] - 1].figura}" alt="">
      </div>
      </div>
    </div>
        `;
        } else {
            if (titulosSemelhantes.length == 2) {
                cartao.innerHTML = `
                <div class="mainCartao">
      <div class="mainSec">
        <section class="topMainConteudo">
                    <img class="topMainCartaoImg" src="${img}" alt="">
                    <h2>${titulo}</h2>
                    <p>${generos}</p>
                    <p><h3>Elenco</h3>${elenco}</p>
                  </section>
                  <section class="classif">
                    <p class="age${i}">${classificacao}</p> 
                  </section>
                </div>
                <section>
                  <p>${resumo}</p>
                </section>
                <h3>Titulos Semelhantes</h3>

      <div class="FilmesSemelhantes">
      <div class="mainCartaoImagensSemelhantes">
        <img src="${conteudoFilmes[titulosSemelhantes[0] - 1].figura}" alt="">
        </div>
        <div class="mainCartaoImagensSemelhantes">
        <img src="${conteudoFilmes[titulosSemelhantes[1] - 1].figura}" alt="">
        </div>
      </div>
    </div>
        `;
            } else {
                if (titulosSemelhantes.length == 3) {
                    cartao.innerHTML = `
                    <div class="mainCartao">
      <div class="mainSec">
        <section class="topMainConteudo">
          <img class="topMainCartaoImg" src="${img}" alt="">
          <h2>${titulo}</h2>
          <p>${generos}</p>
          <p><h3>Elenco</h3>${elenco}</p>
        </section>
        <section class="classif">
          <p class="age${i}">${classificacao}</p> 
        </section>
      </div>
      <section>
        <p>${resumo}</p>
      </section>
      
      <h3>Titulos Semelhantes</h3>
      <div class="FilmesSemelhantes">
      <div class="mainCartaoImagensSemelhantes">
        <img src="${conteudoFilmes[titulosSemelhantes[0] - 1].figura}" alt="">
        </div>
        <div class="mainCartaoImagensSemelhantes">
        <img src="${conteudoFilmes[titulosSemelhantes[1] - 1].figura}" alt="">
        </div>
        <div class="mainCartaoImagensSemelhantes">
        <img src="${conteudoFilmes[titulosSemelhantes[2] - 1].figura}" alt="">
        </div>
        </div>
        </div>
        `;
                } else {
                    cartao.innerHTML = `
                    <div class="mainCartao">
      <div class="mainSec">
        <section class="topMainConteudo">
          <img class="topMainCartaoImg" src="${img}" alt="">
          <h2>${titulo}</h2>
          <p>${generos}</p>
          <p><h3>Elenco</h3>${elenco}</p>
        </section>
        <section class="classif">
          <p class="age${i}">${classificacao}</p> 
        </section>
      </div>
      <section>
        <p>${resumo}</p>
      </section>
    `;
                }
            }
        }

        main.innerHTML += cartao.innerHTML;

        let idadePermitida = document.querySelector(`.age${i}`);
        let numeroIdadePermitida = document.querySelector(`.age${i}`).textContent;
        numeroIdadePermitida = parseInt(document.querySelector(`.age${i}`).textContent);

        if (numeroIdadePermitida >= 18) {
            idadePermitida.classList.add('classificacao18');
        }
        if ((numeroIdadePermitida > 15) & (numeroIdadePermitida < 17)) {
            idadePermitida.classList.add('classificacao16');
        }
        if (numeroIdadePermitida <= 15) {
            idadePermitida.classList.add('classificacaoLivre');
        }
        if (numeroIdadePermitida <= 12) {
            idadePermitida.textContent = `Livre`;
        }
    }
});