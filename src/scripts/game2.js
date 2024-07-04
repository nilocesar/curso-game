var gameWord = [
  {
    word: "latim",
    tips: [
      "Língua clássica que originou muitas das línguas modernas, como o português, espanhol, francês e italiano.",
      "Língua do Império Romano, o latim teve um impacto duradouro na cultura, ciência e religião ocidentais.",
      "Língua que ajuda a entender melhor a etimologia e a estrutura de muitas palavras em línguas modernas.",
      "Apesar de ser uma língua morta, ela ainda é utilizado em contextos acadêmicos, jurídicos e científicos.",
      "É complexa, com uma estrutura rica que inclui declinações, casos e conjugações verbais.",
    ],
  },
  {
    word: "manuscrito",
    tips: [
      "É um documento escrito à mão, frequentemente utilizado antes da invenção da imprensa para a criação de livros e registros.",
      "São valiosos para historiadores, pois oferecem insights sobre a cultura, a língua e os costumes de épocas passadas.",
      "A caligrafia e a decoração são consideradas verdadeiras obras de arte, muitas vezes enriquecidas com iluminuras e dourados.",
      "O processo de criação exigia grande habilidade e paciência, envolvendo escribas que copiavam textos cuidadosamente em pergaminho ou papel.",
      "São preservados em bibliotecas e arquivos ao redor do mundo, servindo como fontes primárias para pesquisas acadêmicas.",
    ],
  },
  {
    word: "layout",
    tips: [
      "Refere-se à organização e disposição visual dos elementos, como texto, imagens e gráficos.",
      "É essencial para criar designs atraentes e funcionais, facilitando a leitura e a navegação.",
      "No design gráfico, envolve a escolha de fontes, cores, espaçamento e a hierarquia de informações para transmitir a mensagem de forma clara.",
      "Existe uma abordagem de design que garante que uma página da web se adapte bem a diferentes tamanhos de tela e dispositivos.",
    ],
  },
  {
    word: "template",
    tips: [
      "É um modelo predefinido que serve como base para a criação de documentos, sites, apresentações e outros projetos.",
      "O uso pode economizar tempo e garantir consistência visual e estrutural em projetos repetitivos ou semelhantes.",
      "São frequentemente usados por desenvolvedores e designers para acelerar o processo de construção e assegurar um design profissional.",
    ],
  },
];

var shuffleArray = function (array) {
  let shuffledArray = [...array]; // Cria uma cópia do array original para não modificar o original
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

var removeDiacritics = function (str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ç/g, "c")
    .replace(/Ç/g, "C");
};
