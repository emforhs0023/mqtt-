var mqtt = require("mqtt");
var socketHandler = require("../services/socketHandler");
var db = require("../db/monitoringDB");
var client = mqtt.connect('mqtt://127.0.0.1');


client.on("connect", function() {
	console.log("mqtt connect")
	client.subscribe("/kim/byung/1")
});

client.on("message", function(topic, message){
	message = JSON.parse(message)

	console.log(message)
})
