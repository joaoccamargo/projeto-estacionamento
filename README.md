# Projeto Estacionamento
 - Backend API (ExpressJS, SQLITE)
 - Frontend (HTML, CSS, JS)
## API / EndPoints
 - Vehicles
    - **GET** ListVehicles (/api/vehicles)
    - **POST** InsertVehicle (/api/vehicles)
    - **PUT** UpdateVehicle (/api/vehicles/**id**)
    - **DELETE** DeleteVehicle (/api/vehicles/**id**)
 - Activities
    - **GET** ListActivities (/api/activities)
    - **POST** CheckInVehicle (/api/activities/checkin)
    - **PUT** CheckOutVehicle (/api/activities/checkout)
    - **DELETE** RemoveActivity (/api/activities/**id**)
