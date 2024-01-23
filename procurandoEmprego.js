// Enunciando o problema: Precisamos de um emprego.
// Separando o problema em etapas: Precisamos procurar uma vaga, depois estudar sobre a empresa e seus requisitos, e nos dar bem na entrevista.

// Variaveis que eu achei importante: Achar uma oportunidade, Estudar os requistos, uma resposta na entrevistas e se tem vagas disponiveis, elas tem 80% de chance de ser true ou false
let achouOportunidade = Math.random() > 0.2;
let estudoDeRequisitos = true;
let resposta = Math.random() > 0.2 ? "positiva" : "negativa";
let vagasDisponiveis = Math.random() > 0.2;

// Função para simular mudanças nas vagas disponíveis, que faz com tenhamos 80% de chance de passar
function verificarVagasDisponiveis() {
    vagasDisponiveis = Math.random() > 0.2;
}

//função pra dizer que esta estudando
function estudarMais(){
    console.log("estou estudando para passar em uma proxima entrevista...")
}

// aqui estamos na etapa 1, procurando emprego, verificamos se tem vagas disponiveis, e se sim, se ela é uma oportunidade, se não há vagas, esperamos mais vagas abrirem.
function procurarEmprego() {
    if (vagasDisponiveis) {
        if (achouOportunidade) {
            console.log("achei uma vaga, vou me preparar")
            return sePreparar();
        } else {
            verificarVagasDisponiveis(); // Verifica se há vagas disponíveis antes de continuar procurando
            console.log("Ainda há vagas disponíveis. Continue procurando.");
            return procurarEmprego();
        }
    } else {
        console.log("Não há mais vagas disponíveis. Aguarde por novas oportunidades.");
    }
}

//  Aqui estudamos sobre a empresa e os requisitos, se temos perfil, se sim, nos inscrevemos e tentamos passar na entrevista, se não, voltamos a procurar
function sePreparar() {
    if (estudoDeRequisitos) {
        console.log("Eba, eu tenho o perfil, vou me inscrever");
        passarNaEntrevista();
    } else {
        console.log("Não tenho o perfil, precisarei procurar mais");
        procurarEmprego();
    }
}

// aqui, fizemos a entrevista, e se a entrevista for positiva estamos empregados, se não atendermos aos requisitos voltamos a estudar.
function passarNaEntrevista() {
    if (resposta === "positiva") {
        console.log("Empregado!");
    } else {
        console.log("Sinto muito, mas você não atinge nossos requisitos");
        estudarMais();
    }
}


// Exemplo de uso
verificarVagasDisponiveis(); 
procurarEmprego();