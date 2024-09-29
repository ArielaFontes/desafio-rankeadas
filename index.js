console.log("Bem vindo Herói!")

let gameWon = 100;
let gameLost = 6;
let victory = gameWon - gameLost;


function game(gameWon, gameLost) {
    return gameWon - gameLost;
}

let resultado = gameWon - gameLost;

const niveis = [
    { limite: 10, nivel: "Ferro" },
    { limite: 20, nivel: "Bronze" },
    { limite: 50, nivel: "Prata" },
    { limite: 80, nivel: "Ouro" },
    { limite: 90, nivel: "Diamante" },
    { limite: 100, nivel: "Lendário" },
    { limite: Infinity, nivel: "Imortal" }
];

for (let i = 0; i < niveis.length; i++) {
    if (resultado <= niveis[i].limite) {
        resultado = niveis[i].nivel;
        break;
    }
}

console.log("O Herói tem de saldo de " + victory + " vitórias e está no nível " + resultado);