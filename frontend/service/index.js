const url = "http://localhost:8000/api";

// -----------------POST-----------------------
const postVeiculo = (objetoCliente) => {
    //console.log("objetoCliente: ", JSON.stringify(objetoCliente))
    return fetch(url + "/vehicles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objetoCliente)
    }).then((response) => {
        if(response.status != 200){
            console.log(`Erro no servidor: ${response.status}`)
        }else{
            alert(`Sucesso ao salvar: ${response.status}`)
        }
    })
}

// -----------------GET-----------------------
const getVeiculo = () => {
    return fetch(url + "/vehicles",{
        method: "GET"
    }).then((response) => {
        if(response.status != 200){
            console.log(`Erro no servidor: ${response.status}`)
        }else{
            return response.json()
        }
    })
}

export const service = {
    postVeiculo,
    getVeiculo
}