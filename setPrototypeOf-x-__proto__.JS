let user ={
    perfil: 'estudante',
    exibirInfos: function(){
        console.log(this.perfil);
    }
}

let estudante = {
    nome: 'Juliana',
    exibirInfos: function(){
        console.log(this.nome);
    }
}

Object.setPrototypeOf(estudante, user);

user.exibirInfos();
estudante.exibirInfos();

