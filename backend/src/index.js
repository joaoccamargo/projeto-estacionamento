import express from 'express'
import { insertVehicles, 
         listVehicles, 
         removeVehicles, 
         updateVehicles } from './controllers/vehiclesController.js';
import { activityCheckin,
         activityCheckout,
         listActivities, 
         removeActivity } from './controllers/activitiesController.js';

const app = express()



app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*"); // Liberação geral para fins educativos
    response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    response.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    next();
})

app.use(express.json());

app.get('/api/ping', (request, response) => {
    response.send({
        message: 'pong'
    })
})

/* EndPoints Vehicles */
app.get('/api/vehicles', listVehicles);
app.post('/api/vehicles', insertVehicles);
app.put('/api/vehicles/:id', updateVehicles);
app.delete('/api/vehicles/:id', removeVehicles);

/* EndPoints Activities */
app.get('/api/activities', listActivities);
app.post('/api/activities/checkin', activityCheckin);
app.put('/api/activities/checkout', activityCheckout);
app.delete('/api/activities/:id', removeActivity);

app.listen(8000, () => {
   console.log("Servidor ligado na porta 8000..."); 
});