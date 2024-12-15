export default class User {
    constructor(nome, email, telefone, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`;
    }
}

const novoUser = new User ('Sloan', 's@s.com', '21999-0000', 'admin')
console.log(novoUser);
console.log(novoUser.exibirInfos());

