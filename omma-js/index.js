/* Variaveis para mudar a cor das letras no prompt */
var red, blue, reset;
red = "\u001b[31m";
blue = "\u001b[34m";
reset = "\u001b[0m";

/* Inicio dos Exercícios */

const nomeEmpresa = "Omma - o seu site de receitas";
console.log(nomeEmpresa);

const listaReceitas = [
  {
    codigo: 1,
    titulo: "Moqueca de atum",
    ingredientes: ["1 peixe", "1 pitada de sal", "5 batatas"],
    instrucaoPreparo: "Cozinhar pra que? Vai cru mesmo!",
    linkVideo: "www.moqueca.com",
    veganaSimNao: false,
  },
];

function cadastrarReceita(
  codigo,
  titulo,
  ingredientes,
  instrucaoPreparo,
  linkVideo,
  veganaSimNao
) {
  const novaReceita = {
    codigo,
    titulo,
    ingredientes,
    instrucaoPreparo,
    linkVideo,
    veganaSimNao,
  };
  listaReceitas.push(novaReceita);

  console.log("Receita de ", titulo, " cadastrada com sucesso");
}

cadastrarReceita(
  2,
  "Risoto de Sardinha",
  ["Sardinha", "Sal", "Pimenta"],
  "Taca-le pau nessa cozinha",
  "www.pirao.com",
  true
);

cadastrarReceita(
  3,
  "Farofa de pimenta",
  ["Azeite", "Sal", "Pimenta", "Farinha"],
  "Se vira ai guri! Mexe tudo que vai",
  "www.farofa.com",
  false
);

cadastrarReceita(
  4,
  "Moqueca de Sardinha",
  ["50 Sardinha", "1 Pitada de Sal", "50 Pimenta"],
  "Assiste a Ana Maria Braga e vai com fé",
  "www.farofa.com",
  false
);

cadastrarReceita(
  5,
  "Panqueca americana",
  ["3 ovos", "5 xicaras de farinha", "3 xicara de oleo"],
  "Essa só sendo americano pra fazer .. desiste Master chef",
  "www.panqueca.com",
  false
);

cadastrarReceita(
  6,
  "Panqueca americana 2",
  ["3 ovos", "5 xicaras de farinha", "3 xicara de oleo"],
  "Essa só sendo americano pra fazer .. desiste Master chef",
  "www.panqueca.com",
  false
);

cadastrarReceita(
  7,
  "Galinhada mineira",
  ["1 peito de frango", "4 cenouras", "1 kg de arroz"],
  "Essa só sendo mineiro pra fazer .. desiste Master chef",
  "www.galinhada.com",
  true
);

/* Exibir receitas */

function exibirReceitas() {
  for (let i = 0; i < listaReceitas.length; i++) {
    console.log("__________________________________________________ \n");
    console.log("Receita de: ", listaReceitas[i].titulo);
    console.log("Ingredientes: ", listaReceitas[i].ingredientes);
    console.log("Receita vegana: ", listaReceitas[i].veganaSimNao);
  }
}

exibirReceitas();

/* Delete de receitas utilizando iteção aprendida inicialmente */

function deletarReceita(idProcurado) {
  let achou = 0;
  let i = 0;
  while (i < listaReceitas.length && achou == 0) {
    if (listaReceitas[i].codigo == idProcurado) {
      titulo = listaReceitas[i].titulo;
      listaReceitas.splice(i, 1);
      console.log("\n Receita de ", titulo, "deletada com sucesso \n \n");
      achou = 1;
    }
    i++;
  }
  if (achou == 0) {
    console.log("Xiii... não encontrei receita com o codigo digitado");
  }
}
console.log(red, "\n Deletar Receita - iteração convencional \n");
deletarReceita("5");

/* Delete de receitas utilizando iteção aprendida inicialmente */

const deletarReceitaArrowForEach = (idProcurado) => {
  let achou = 0;
  listaReceitas.forEach((receita, i) => {
    if (receita.codigo == idProcurado) {
      titulo = receita.titulo;
      listaReceitas.splice(i, 1);
      console.log("\n Receita de ", titulo, "deletada com sucesso \n \n");
      achou = 1;
    }
  });
  if (achou == 0) {
    console.log("Xiii... não encontrei receita com o codigo digitado");
  }
};

console.log(blue, "\n Deletar Receita - Arrow ForEach \n");

deletarReceitaArrowForEach("6");

console.log(
  reset,
  "Nova busca *********************************************** \n"
);

exibirReceitas();

/* Busca utilizando conhecimentos de Arrow e a função forEach */

function buscarReceitasMetodoConvencional(tituloReceita) {
  let contador = 0;
  for (i in listaReceitas) {
    if (
      listaReceitas[i].titulo
        .toUpperCase()
        .includes(tituloReceita.toUpperCase())
    ) {
      console.log(red, "\n Encontrei : ", listaReceitas[i].titulo, "\n");
      console.log(listaReceitas[i]);
      contador++;
    }
  }

  if (contador > 0) {
    console.log(
      red,
      "\n Total de receitas encontradas: ----> ",
      contador,
      red,
      " <---- \n"
    );
  } else {
    console.log(red, "\n Resultado da Busca: ");
    console.log(red, "Ops! Sua receita não foi encontrada \n");
  }
}

buscarReceitasMetodoConvencional("Risoto");

/* Busca utilizando conhecimentos de Arrow e a função forEach */

const buscarReceitaArrowForEach = (tituloReceita) => {
  let contador = 0;
  listaReceitas.forEach((receita) => {
    if (receita.titulo.toUpperCase().includes(tituloReceita.toUpperCase())) {
      console.log(red, "\n Encontrei : ", receita.titulo, "\n");
      console.log(receita);
      contador++;
    }
  });
  return console.log(red, "Total de Receitas encontradas: ", contador);
};

console.log(blue, "Busca receita com Arrow ForEach");
buscarReceitaArrowForEach("Risoto");

/* Busca utilizando conhecimentos de Arrow e a função filter */

console.log(red, "Busca receita com Arrow Filter");

const buscarReceitaArrowFilter = (tituloReceita) => {
  const receitaBuscada = listaReceitas.filter((receita, i, listaReceitas) =>
    receita.titulo.toUpperCase().includes(tituloReceita.toUpperCase())
  );
  if (receitaBuscada.length == 0) {
    console.log("Receita não encontrada");
  } else {
    return console.log(receitaBuscada);
  }
};

buscarReceitaArrowFilter("Moqueca");

/* Alteração das receitas utilizando Arrow e a função Map */

const alterarReceita = (
  idProcurado,
  titulo,
  ingredientes,
  instrucaoPreparo,
  linkVideo,
  veganaSimNao
) => {
  let contador = 0;
  const listaAtualizada =  listaReceitas.map((receita) => {
    if (receita.codigo == idProcurado) {
      receita.titulo = titulo;
      receita.ingredientes = ingredientes;
      receita.instrucaoPreparo = instrucaoPreparo;
      receita.linkVideo = linkVideo;
      receita.veganaSimNao = veganaSimNao;
      contador++;
    }
  });

  if ((contador ==
     0)) {
    console.log("Receita não encontrada");
  } else {
    console.log("Receita alterada com sucesso! \n");
    console.log(listaAtualizada);
  }
};

console.log("Alterando uma receita");

alterarReceita(
  70,
  "Galinhada especial",
  ["1 peito de galo", "70 cenouras", "10 kg de arroz", "Pimenta a gosto"],
  "Brincadeira, pode fazer do jeito que quiserMaster chef",
  "www.galinhafrita.com",
  false
);

console.log(red,"\n \n MOSTRANDO TODAS AS RECEITAS \n \n ");

console.log(listaReceitas);

alterarReceita(
  7,
  "Galinhada especial",
  ["1 peito de galo", "70 cenouras", "10 kg de arroz", "Pimenta a gosto"],
  "Brincadeira, pode fazer do jeito que quiserMaster chef",
  "www.galinhafrita.com",
  false
);

console.log(red,"\n \n MOSTRANDO TODAS AS RECEITAS \n \n ");

console.log(listaReceitas);