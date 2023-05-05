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