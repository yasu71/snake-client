const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    // host: '10.0.2.15',
    // host: '192.168.88.177',
    host: '192.168.88.177',
    port: 50541
  });

  conn.setEncoding('utf8');
  
  // getting a message from a server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  // conn.on((data) => {
  //   if (data === 'w') {
  //     // client.end();
  //     // process.exit();
  //     console.log(right)
  //   }
  //   client.write(data);
  // });


  // conn.on('connect', () => {
  //   conn.write('you ded cuz you idled');
  //   console.log('you ded cuz you idled')
  // });
  
  return conn;
}

console.log('Connecting ...');
connect();