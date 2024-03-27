// 1
// Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles. 

var nomes = [];

function CadastrarEstudante(){ 
    nomes.push(prompt("Digite o nome do estudante: "));
}

function VerificarParada(){
    CadastrarEstudante();
    if(nomes[nomes.length - 1] != "PARE") {       
        VerificarParada();
    } else {
        nomes.pop();
        ApresentarLista()
    }
}

function ApresentarLista(){
    var texto = `A quantidade de alunos cadastrados foi ${nomes.length} e os alunos foram:\n`;
    var textoHTML = texto;
    for(var i = 0; i < nomes.length; i++){
        var textoFormatado = `${i+1} - ${nomes[i]}`
        texto += `\n${textoFormatado}\n`;
        textoHTML += '<br><br>' + textoFormatado;
    }
    alert(texto);
    document.write(textoHTML);
}

VerificarParada();

