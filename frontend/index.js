import { CadastroComponent } from "./controller/cadastro.js";
import { ListaClienteComponent } from "./controller/lista-Clientes.js";

const link = document.getElementById('link')

link.addEventListener('click', (event) => {
    const option = event.target.innerText

    switch (option) {
        case "Cadastro":
            CadastroComponent();
            break;
        case "Clientes":
            ListaClienteComponent();
    
        default:
            break;
    }
})
