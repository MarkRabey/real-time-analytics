var socket = io.connect();
socket.on('pageview', function(message) {
  if (message.url) {
    $('#pageviews').append('<li><strong>URL:</strong> ' + message.url + ', <strong>IP:</strong> ' + message.ip + ', <strong>Time:</strong> ' + message.time + '</li>');
  }
  $('#connections').text(message.connections);
});