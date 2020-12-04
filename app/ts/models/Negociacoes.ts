class Negociacoes {
    //private _negociacoes: Array<Negociacao> = []; //primeira forma de declarar Array
    private _negociacoes: Negociacao[] = []; //outra forma de declarar o Array

    adiciona(negociacao: Negociacao): void{
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[]{
        return [].concat(this._negociacoes);
    }
}