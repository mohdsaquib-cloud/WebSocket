var socket = io.connect("http://localhost:4000");
socket.on("connect", function() {
  console.log("Connected to Server");
});
