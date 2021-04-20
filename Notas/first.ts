interface DadosDoUsuario{
    id: string, nome: string, email: string;
}

function cadastrarUsuario( {id, nome, email}  : DadosDoUsuario){
    console.log(id, nome, email);
}

class CadastroAdministrador{
    cadastro(){
        //cadastrarUsuario("4545455", "Jhon Wick", "iLoveDogs@gmail.com");
    }
}
