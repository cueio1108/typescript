function calculaArea(base: number, altura: number) {
    return base * altura;
}

const calculaArea2 = (base: number, altura: number): number => base * altura

function somar(...numeros: number[]) {
    //numeros.reduce()
    console.log(numeros)
}

function teste(): string | number {
    if (10 > 5) {
        return 'dex maior que cinco'
    } else {
        return 5
    }
}

const resultadoTeste = teste()