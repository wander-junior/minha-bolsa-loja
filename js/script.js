// Carousel

new SimpleSlide({
    slide: "promocao", // nome do atributo data-slide="principal"
    nav: true, // se deve ou não mostrar a navegação
    auto: true, // se o slide deve passar automaticamente
    time: 5000, // tempo de transição dos slides
    pauseOnHover: true // pausa a transição automática
  })

// Input Masks

VMasker(document.querySelector(".cep")).maskPattern("99.999-999")
VMasker(document.querySelector(".cpf")).maskPattern("999.999.999-99")

// Troca de imagens em produtos

function trocaImagem(){
  icone = document.getElementById("icone1")
  principal = document.getElementsByClassName("imagem-principal")
  tmp = principal[0].innerHTML
  principal[0].innerHTML = icone.innerHTML
  icone.innerHTML = tmp
}

function trocaImagem2(){
  icone = document.getElementById("icone2")
  principal = document.getElementsByClassName("imagem-principal")
  tmp = principal[0].innerHTML
  principal[0].innerHTML = icone.innerHTML
  icone.innerHTML = tmp
}