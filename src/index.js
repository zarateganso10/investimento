const aporteMensal = 200;
const taxaAnual = 1.15;
const taxaMensal = (Math.pow(taxaAnual, 1/12)).toFixed(4);
console.log(taxaMensal);
const anos = 50;
const taxaFinal = Math.pow(taxaAnual, anos);
console.log("taxa final: " + ((taxaFinal - 1)*100).toFixed(2));

let montante = 0;



for(let i = 0; i < anos*12; i++){
    montante = (montante+aporteMensal)*(taxaMensal)
}

console.log("montante final: " + montante.toFixed(2));