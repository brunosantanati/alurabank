const negociacao = new Negociacao(new Date(), 1, 100);
//negociacao._quantidade = 3; //agora que a propriedade eh private, gera erro de compilacao essa linha: Property '_quantidade' is private and only accessible within class 'Negociacao'.ts(2341)
console.log(negociacao);
console.log(negociacao.quantidade);