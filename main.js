// Variaveis, operadores logicos, laços de repetição, estruturas de decisão


let nome = "Fenxus"
let experiencia = 1
let rank = null

for (experiencia = 1; experiencia <= 10500; experiencia += 1000) {
    if (experiencia <= 1000) {
        rank = "Ferro"
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        rank = "Bronze"
    } else if (experiencia >= 2001 && experiencia <= 5000) {
        rank = "Prata"
    } else if (experiencia >= 5001 && experiencia <= 7000) {
        rank = "Ouro"
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        rank = "Platina"
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        rank = "Ascendente"
    } else if (experiencia >= 9001 && experiencia <= 10000) {
        rank = "Imortal"
    } else {
        rank = "Radiante"
    }
    
    console.log('O herói de nome ' + nome + ' está no nível de ' + rank);
}

