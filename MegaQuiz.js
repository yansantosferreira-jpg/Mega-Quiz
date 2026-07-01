let pontos = 0

console.log("Seja bem vindo ao Mega Quiz, Você esta pronto?");
if(res1 === "Sim") {
    pontos++;
    console.log("então vamos começar");
} else {
console.log("suma daqui :[");
}
console.log("Qual a velocidade média de uma andoninha africana?");
if(res2 ==="46km/h") {
    pontos++;
    console.log(";] Muito bem");
} else {
    console.log("Mandou mal :[");
} 
console.log("qual a velocidade do som na água?");
if(res3 ==="5000km/h") {
    pontos++;
    console.log(";] Muito bem");
} else {
    console.log("Mandou mal :[");
} 
if(pontos === 3){
console.log("You Win");
} else {
    console.log("Perdeu");
}