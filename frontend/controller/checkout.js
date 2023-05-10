import { service } from "../service/index.js";
import { view } from "../view/index.js";

export const CheckoutComponent = (idParametro) => {
  view.getCheckoutHtml();

  service.getVeiculo().then((dados) => {
    dados.forEach((element) => {
      if (element.id == idParametro) {
        adicionaParametrosNaTela(element);
        buscarRegistro(idParametro);
      }
    });
  });
};

let placa = ''
const adicionaParametrosNaTela = (element) => {
  placa = element.label
  const NovaLinha = document.getElementById("tbody");
  const dadosHtml = `
        <td>${element.owner}</td>
        <td>${element.model}</td>
        <td>${element.label}</td>
    `;
  NovaLinha.innerHTML = dadosHtml;
};

const buscarRegistro = (idParametro) => {
  service.getActivities().then((dados) => {
    dados.forEach((element) => {
      if (element.vehicle_id == idParametro) {
        adicionaParametrosNoInput(element);
      }
    });
  });
};

const valorHora = 10;
const valorMinuto = valorHora / 60;

const adicionaParametrosNoInput = (element) => {
  const checkin = new Date(element.checkin_at);
  const checkout = new Date();
  const tempo = checkout - checkin;
  const hora = calculaHora(tempo);
  const totalApagar = (hora.minutos + hora.horas * 60) * valorMinuto;
  console.log(totalApagar);
  const inputHora = document.getElementById("totalHora");
  const inputTotal = document.getElementById("totalAPagar");

  if (hora.minutos < 10 && hora.horas < 10){
    inputHora.value = `Tempo 0${hora.horas}:0${hora.minutos}`;
   }
  if (hora.horas < 10){
    inputHora.value = `Tempo 0${hora.horas}:${hora.minutos}`;
    }
  if (hora.minutos < 10){
    inputHora.value = `Tempo ${hora.horas}:0${hora.minutos}`;
    }
  if (totalApagar < 10) {
    inputTotal.value = `R$: 0${totalApagar.toFixed(2)}`;
  } else {
    inputTotal.value = `R$: ${totalApagar.toFixed(2)}`;
  }

  const finalizar = document.getElementById('finalizar')
  finalizar.addEventListener('click', () => {
    const preco = document.getElementById('totalAPagar').value
    const stringPreco = preco.split(" ")
    const objeto = {
        label: placa,
        price: Number(stringPreco[1])
    }
    checkoutAPI(objeto)
  })
};

const calculaHora = (tempoEmMilissegundos) => {
  const tempo = {
    horas: +(tempoEmMilissegundos / 3600000).toFixed(0),
    minutos: +((tempoEmMilissegundos / 60000) % 60).toFixed(0),
  };
  return tempo;
};

const checkoutAPI = (objeto) => {
    service.putCheckout(objeto).then(() => {
        window.location.href = "./checkin.html"
    })
}