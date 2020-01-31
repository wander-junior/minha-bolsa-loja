new SimpleSlide({
    slide: "promocao", // nome do atributo data-slide="principal"
    nav: true, // se deve ou não mostrar a navegação
    auto: true, // se o slide deve passar automaticamente
    time: 5000, // tempo de transição dos slides
    pauseOnHover: true // pausa a transição automática
  });

VMasker(document.querySelector(".cep")).maskPattern("99.999-999");
VMasker(document.querySelector(".cpf")).maskPattern("999.999.999-99");