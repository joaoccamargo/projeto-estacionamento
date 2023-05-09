import { CadastroComponent } from "./controller/cadastro.js";

const link = document.getElementById('link')

link.addEventListener('click', (event) => {
    const option = event.target.innerText

    switch (option) {
        case "Cadastro":
            CadastroComponent();
            break;
    
        default:
            break;
    }
})
