import { vehicles } from 'app_ws/external/pb_ws/car_ts_proto';

document.write(
  JSON.stringify(new vehicles.Car({ make: 'Honda', model: 'Civic' }))
);
