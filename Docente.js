import User from "./User.js";

class Docente extends User{
    constructor (nome, email, telefone, role = 'docente', ativo = 'true'){
        super (nome, email, telefone, role, ativo)
    }

    aprovarEstudante(estudante, curso){
    return `Estudante: ${estudante}, foi aprovado no concurso de ${curso}, responsável ${this.nome}`
    }

}

const novaDocente = new Docente ('Ana', 'a@Q.com', '219997493')

console.log(novaDocente.aprovarEstudante('Juliana', 'Javascript'))