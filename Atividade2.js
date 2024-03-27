// 2
// Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. 

// Verifique se o planeta que o usuário informou está na array e informe ao usuário.

var planetas = ['Terra', 'Marte', 'Plutão', 'Vênus', 'Júpiter', 'Saturno'];

function VerificaPlaneta(){
    var usuarioDigitou = prompt("Digite um nome de um planeta: ");
    var negativa = planetas.includes(usuarioDigitou) ? '' : 'não ';
    
    ApresentarNaTela(`O Planeta ${usuarioDigitou} ${negativa}está no array`)

}

function ApresentarNaTela(conteudo){
    alert(conteudo);
    document.write('<br><br>' + conteudo);
}

VerificaPlaneta();