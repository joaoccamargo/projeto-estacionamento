import { service } from "../service/index.js";
import { view } from "../view/index.js"

view.getCheckinHtml();

let idCheckin = []

service.getActivities().then((dados) => {
    dados.forEach(element => {
        if(element !== null){
            idCheckin.push(element.vehicle_id)
        }
    });
    console.log(idCheckin)
})