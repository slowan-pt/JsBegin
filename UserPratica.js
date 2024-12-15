
//Se não for exportar, deixar com "class User{". Se for exportar usar o "export default classe User{"
export default class User{
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor (nome, email, nascimento, role, ativo){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo || 'true'
    }

    criarPerfil(){
        return `Perfil criado`
    }

    apagarPerfil(){
        return `Perfil deletado`
    }


    exibirINF(){
        return `O usuário ${this.#nome}, nasceu em ${this.#nascimento}, tem o perfil de ${this.#role}, tem o e-mail ${this.email}, e seu perfil está ativo? ${this.ativo}`;
    }

    exibirListaCursos(){
        return`cursos listados`
    }

    matricularEmCurso(){
        return `Aluno ${this.#nome} matriculado`
    }

    exibirCursosMatriculados(){
        return `Lista: cursos matriculados `
    }

}

// const novoUser = new User('Sloan', 's@s.com', '2024-01-01');
// //console.log(novoUser);
// //console.log(novoUser.exibirINF());
// console.log(novoUser.matricularEmCurso());



