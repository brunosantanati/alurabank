class Negociacoes {
    constructor() {
        //private _negociacoes: Array<Negociacao> = []; //primeira forma de declarar Array
        this._negociacoes = []; //outra forma de declarar o Array
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return this._negociacoes;
    }
}
