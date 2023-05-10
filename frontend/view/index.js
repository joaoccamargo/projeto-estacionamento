const getCadastroHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = ` 
        <form id="formulario">
            <h1>Novo Cliente</h1>
            <label>Nome do Cliente</label>
            <input id="name" type="text" placeholder="Digite o nome do cliente">
            <br><br>
            <label>Modelo</label>
            <input id="modelo" type="text" placeholder="Digite o modelo do veiculo">
            <br><br>
            <label>Tipo</label>
            <select id="tipo" type="text">
                <option value="1">Carro</option>
                <option value="0">Moto</option>
            </select>
            <br><br>
            <label>Placa</label>
            <input id="placa" type="text" placeholder="Digite a placa do veiculo">
            <br><br>
            <label>Observações</label>
            <input id="observacoes" type="text" placeholder="Digite a observação">
            <br><br>
            <div>
                <button id="cancelar" type="reset">Cancelar</button>
                <button id="salvar" type="submit">Salvar</button>
            </div>
        </form>`
    main.innerHTML = dadosHtml
}

const getListaClientesHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = ` 
            <section>
            <h1>Lista de Clientes</h1>
                <table id="tbody">
                    <tr>
                        <th>Cliente</th>
                        <th>Modelo</th>
                        <th>Placa</th>
                        <th>Tipo</th>
                        <th>Observações</th>
                        <th><a href="">Novo</a></th>
                    </tr>
                </table>
            </section>`
    main.innerHTML = dadosHtml
}

const getAtualizaHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = ` 
        <form id="formulario">
            <h1>Editar Cliente</h1>
            <label>Nome do Cliente</label>
            <input id="name" type="text" placeholder="Digite o nome do cliente">
            <br><br>
            <label>Modelo</label>
            <input id="modelo" type="text" placeholder="Digite o modelo do veiculo">
            <br><br>
            <label>Tipo</label>
            <select id="tipo" type="text">
                <option value="1">Carro</option>
                <option value="0">Moto</option>
            </select>
            <br><br>
            <label>Placa</label>
            <input id="placa" type="text" placeholder="Digite a placa do veiculo">
            <br><br>
            <label>Observações</label>
            <input id="observacoes" type="text" placeholder="Digite a observação">
            <br><br>
            <div>
                <button id="cancelar" type="reset">Cancelar</button>
                <button id="salvar" type="submit">Atualizar</button>
            </div>
        </form>`
    main.innerHTML = dadosHtml
}

const getCheckinHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = ` 
    <section>
        <h2>Lista de Clientes no Estacionamento</h2>
            <br>
            <table id="tbody" class="table">
                <tr>
                    <th>Modelo</th>
                    <th>Placa</th>
                    <th>Opção</th>
                </tr>
            </table>
            <div>
                <label>Placa</label>
                <select class="input" id="select"></select>
                <a type="button" id="adicionar-novo">Adicionar Novo</a>
                <br>
                <div class="btn">
                    <button id="checkin" class="btn-link">Checkin</button>
                </div>
            </div>
    </section>
    `
    main.innerHTML = dadosHtml
}

const getCheckoutHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
        <section class="container">
        <h2>Dados do cliente</h2>
            <br>
            <table class="table">
                <tr>
                    <th>Cliente</th>
                    <th>Modelo</th>
                    <th>Placa</th>
                </tr>
                <tr id="tbody"></tr>
            </table>
            <div>
                <label>Total de Horas</label>
                <input
                    id="totalHora"
                    class="input"
                    type="text"
                    placeholder="Total de Horas"
                    disabled 
            </div>
        </section>
    `
    main.innerHTML = dadosHtml
}

export const view = {
    getCadastroHtml,
    getListaClientesHtml,
    getAtualizaHtml,
    getCheckinHtml,
    getCheckoutHtml
}