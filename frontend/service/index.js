const url = "http://localhost:8000/api";

export const postVeiculo = (objetoCliente) => {
    console.log("objetoCliente: ", JSON.stringify(objetoCliente))
    fetch(url + "/vehicles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objetoCliente)
    })
}