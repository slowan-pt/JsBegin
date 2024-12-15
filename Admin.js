import User from "./User.js";

class Admin extends User{
    constructor (nome, email, telefone, role = 'admin', ativo = 'true'){
        super (nome, email, telefone, role, ativo)
    }

    criarCurso (nomeCurso, qtdVaga){
        return `${nomeCurso} criado com ${qtdVaga} vaga(s)`
    }



}

const novoAdmin = new Admin('Roberto', 'r@r.com', '218880000')
console.log(novoAdmin);
console.log(novoAdmin.criarCurso('Javascript', 20))

