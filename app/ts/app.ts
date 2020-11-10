const negociacao = new Negociacao(new Date(), 1, 100);
negociacao._quantidade = 3; //não deveria mudar propriedade com underline de fora da classe
console.log(negociacao);
console.log(negociacao.quantidade);