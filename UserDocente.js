import User from "./UserPratica.js";

export default class Docente extends User{
    constructor (nome, email, role = 'Docente', ativo = 'true'){
        super (nome, email, role, ativo)
    }
}

// const novoDocente = new Docente ('Marcia', 'm@m.com')
// console.log(novoDocente);
// console.log(novoDocente.exibirINF());
// console.log(novoDocente.matricularEmCurso());


