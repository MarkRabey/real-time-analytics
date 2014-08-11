var socket = io.connect();
socket.on('pageview', function(message) {
  if (message.url) {

    $('#pageviews').append('<li><strong>URL:</strong> ' + message.url.pathname + ', <strong>IP:</strong> ' + message.ip + ', <strong>Time:</strong> ' + message.time + '</li>');
  }
  $('#connections').text(message.connections);
});