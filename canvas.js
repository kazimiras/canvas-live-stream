io = require('socket.io').listen(3000);
io.set('log level', 0); 
io.sockets.on('connection', function (socket) { 
	socket.on("play", function(arr) { 
		io.sockets.emit("play", arr); 
	});
});
  