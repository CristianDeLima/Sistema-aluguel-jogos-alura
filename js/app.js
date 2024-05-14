function alterarStatus(id) {
    let jogo = document.getElementById("game-" + id);
    let imagem = jogo.querySelector(".dashboard__item__img");
    let botao = jogo.querySelector(".dashboard__item__button");
    
    if (imagem.classList.contains("dashboard__item__img--rented")) {
        botao.classList.remove("dashboard__item__button--return");
        imagem.classList.remove("dashboard__item__img--rented");
        jogo.querySelector("a").innerHTML = "Alugar";
    } else {
        botao.classList.add("dashboard__item__button--return");
        imagem.classList.add("dashboard__item__img--rented");
        jogo.querySelector("a").innerHTML = "Devolver";
    }
}