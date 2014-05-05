var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , jade = require('jade')
  , io = require('socket.io').listen(server);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index.jade');
});
app.get('/about', function(req, res){
  res.render('about.jade');
});
app.get('/stats', function(req, res){
  res.render('stats.jade');
});

io.sockets.on('connection', function(socket) {
  io.sockets.emit('pageview', {'connections':Object.keys(io.connected).length - 1});
  socket.on('message', function (message) {
      console.log('Received message: ' + message);
      io.sockets.emit('pageview', {'connections':Object.keys(io.connected).length - 1, 'url': message,'ip':socket.handshake.address.address,'time':new Date()});
  });
});

server.listen(3000);