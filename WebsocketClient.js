// install socket.io.js for Javascript client to work
<script src="./js/socket.io.js"></script>
<script>
 	var socket = io('https://websocket.btcchina.com/');
	socket.emit('subscribe', ['marketdata_cnybtc']);
	socket.emit('subscribe', ['marketdata_cnyltc']);
	socket.emit('subscribe', ['marketdata_btcltc']);
	socket.on('connect', function(){
    	console.log("hello,btcc!");
      	socket.on('trade', function (data) {
        	console.log("trade,hello!");
           	console.log(data);});
	});
</script>