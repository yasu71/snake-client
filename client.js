const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');
  
  // getting a message from a server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // getting a message from a server
  conn.on('connect', () => {
    console.log('connected!');
    conn.write('Name: YS');
  });
  return conn;
}

module.exports = connect;