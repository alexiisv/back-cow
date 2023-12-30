const mqtt = require('mqtt');

const ttsConnection = async () =>{
    try{
        const client = mqtt.connect((
            process.env.MQTT_URL), { 
                username: process.env.MQTT_USER, 
                password: process.env.MQTT_PASSWORD 
            }); 
        client.on('connect', () => {
            console.log("Connected to TTS by MQTT");
            client.subscribe([process.env.MQTT_TOPIC]);
        });
        
        return client
    } catch (error){
        console.log(error);
        throw new Error('mqtt connection error');
    }
}

module.exports = {
    ttsConnection,
}
