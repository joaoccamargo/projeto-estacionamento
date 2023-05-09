import { view } from "../view/index.js";
import { service } from "../service/index.js"

export const ListaClienteComponent = () => {
    view.getListaClientesHtml();

    service.getVeiculo().then((dados) => {
        console.log(dados)
    })
}