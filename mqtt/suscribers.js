const fs = require('fs');
const Record = require('../models/record');

const listenMessage = async (client, io) => {
    client.on('message', async (devID, message) => {
        console.log("* Received uplink from*** ", devID);
        const payload = JSON.parse(message).uplink_message; 

        if(payload?.decoded_payload) {
            console.log('update data');
            
            const dateUTC = new Date(payload.received_at)
            dateUTC.setHours(dateUTC.getHours() - 5)
            const dateUTC5 = dateUTC.toISOString()
            payload.received_at = dateUTC5
            
            console.log(payload);

            const dataVacas = JSON.stringify(payload.decoded_payload, null, 2);
            // fs.appendFileSync('measure.txt',  dataVacas + '\n');
            fs.appendFileSync('vaca0712.txt',  dataVacas + ',' + '\n');

            const record = new Record({
                aid_Vaca: payload.decoded_payload.aid_Vaca,
                c02_scd: payload.decoded_payload.Co2_scd,
                temp_scd: payload.decoded_payload.temp_scd,  
                hum_scd: payload.decoded_payload.hum_scd,  
                heart_valid: payload.decoded_payload.heart_valid,  
                gyro: { 
                    x: payload.decoded_payload.gyroX,
                    y: payload.decoded_payload.gyroY,
                    z: payload.decoded_payload.gyroZ,
                }

            });
            await record.save();

            io.emit('dataVacas', payload.decoded_payload);
        }
    });
}

module.exports = {
    listenMessage,
}
