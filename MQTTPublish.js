var mqtt = require("mqtt");
var client = mqtt.connect('mqtt://127.0.0.1');


client.on("connect", function() {
	console.log("mqtt connect")
});

client.publish("/kim/byung/1", '{"id":"00000003", "from_layer":"2", "layer":"1"}')
// module.exports.start = function(){

// }
