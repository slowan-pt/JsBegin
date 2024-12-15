import User from "./UserPratica.js";
import Docente from "./userDocente.js";
import Admin from "./UserAdmin.js";

const novoUsuarioEmIndex = new Docente('UsusarioIndex', 'ui@ui.com', '2024-09-09')
console.log(novoUsuarioEmIndex.exibirINF());

novoUsuarioEmIndex.nome = 'Marcia'
console.log(novoUsuarioEmIndex.exibirINF());

