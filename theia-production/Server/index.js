const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(4200, "0.0.0.0");
// WARNING: app.listen(80) will NOT work here!
console.log('listening 4200');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log("Connection detected on server socket", socket);
  socket.emit('theiaAnswer', { hello: 'world' });
  socket.on('my other event', (data) => {
    console.log(data);
  });
});