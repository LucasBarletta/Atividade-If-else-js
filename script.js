/*Entrada Clube*/

let idade = Number(prompt("Digite sua idade."));

if(idade >= 60){
    alert("Entrada gratuita!")
}

else if(idade >= 0 && idade <= 12){
    alert("R$10,00 entrada.")
}

else if(idade >= 13 && idade <=17){
    alert("R$15,00 entrada.")
}

else if(idade >= 18 && idade <=59){
    let answer = window.confirm("Você é estudante?")
    if (answer) {
    alert("R$17,50 entrada")
    }
    else {
    alert("R$35,00 entrada")
    }
}