const tam = prompt('Quantos restaurantes foram visitados?');
const restaurantes = [];

//Métodos de objeto
function calculaGorjeta(){
    if (this.valor < 50) {
        return this.valor*0.20; 
    }
    else if (this.valor >= 50 && this.valor <= 200) { 
        return this.valor*0.15;
    }
    else{ 
        return this.valor*0.10;
    }
}

function toString(){
    return `Restaurante ${this.nome} - [Valor: R$ ${this.valor} | Gorjeta: R$ ${this.calculaGorjeta()} | Total: R$ ${this.valorTotal()}]`;
}

function valorTotal() {
    return this.valor + this.calculaGorjeta();
}

//Métodos do Array
restaurantes.totalGasto = totalGasto;
restaurantes.mediaGastos = mediaGastos;
restaurantes.maiorGasto = maiorGasto;
restaurantes.imprimir = imprimir;

function totalGasto(){
    let total = 0;
    for (let restaurante of this) {
        total += restaurante.valorTotal();
    }
    return total;
}

function mediaGastos(){
    let total=0;
    total = restaurantes.totalGasto();
    
    const media = total/(restaurantes.length);
    return media;
}

function maiorGasto() {
    let maiorGasto;
    for (const restaurante of this) {
        if (!maiorGasto || maiorGasto.valorTotal() < restaurante.valorTotal()) {
            maiorGasto = restaurante;
        }
    }
    return maiorGasto;
}

//Criação dos objetos
for (let i = 0; i < tam; i++) {
    const nome = prompt('Nome do restaurante');
    const valor = prompt(`Valor total do restaurante ${nome}`);
    const restaurante = {
        nome: nome,
        valor: parseInt(valor),
        calculaGorjeta,
        toString,
        valorTotal,
    }
    restaurantes.push(restaurante);
}



//Impressão do relatório
function imprimir() {
    console.log(`Total de restaurantes visitados: ${restaurantes.length}`);
    console.log("Total de gastos:");
    for (const restaurante of restaurantes) {
        restaurante.calculaGorjeta();
        restaurante.valorTotal();
        console.log(`\t${restaurante.toString()}`);
    }
    console.log("Total gasto: R$ "+restaurantes.totalGasto());
    console.log("Média de gastos: R$ "+restaurantes.mediaGastos());
    console.log("Maior gasto: "+restaurantes.maiorGasto());

    return " ";
}

console.log(restaurantes.imprimir());