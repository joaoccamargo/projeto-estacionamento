import { service } from "../service/index.js";
import { view } from "../view/index.js";

export const AtualizaComponent = (idParametro) => {
    view.getAtualizaHtml();

    service.getVeiculo().then((dados) => {
        dados.forEach(element => {
            if(element.id == idParametro){
                console.log(element)
                adicionaParametroNoInput(element)
            }
        });
    })
}

const adicionaParametroNoInput = (objeto) => {
        document.getElementById('name').value = objeto.owner
        document.getElementById('modelo').value = objeto.model
        document.getElementById('tipo').value = objeto.type
        document.getElementById('placa').value = objeto.label
        document.getElementById('observacoes').value = objeto.observation
}