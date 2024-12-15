import User from "./UserPratica.js";

class Admin extends User {
    //constructor é usado para herança
    constructor(nome, email, nascimento, role = "admin", ativo = "true") {
        super (nome, email, nascimento, role, ativo)
    }
}

const userSecretaria = new Admin('Ketelyn', 'k@k.com', '2024-02-03')
console.log(userSecretaria);
console.log(userSecretaria.exibirINF());

