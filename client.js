const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    // host: '10.0.2.15',
    host: '192.168.88.177',
    port: 50541
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

  
  // conn.on('connect', () => {
  //   setInterval(()=>{
  //     // conn.write('Move: up');
  //   }, 50)
  // });

  // conn.on('connect', () => {
  //   setInterval(()=>{
  //     conn.write('Move: down');
  //   }, 100)  
  // });

  // conn.on('connect', () => {
  //   setInterval(()=>{
  //    conn.write('Move: left');
  //   }, 150) 
  // });

  // conn.on('connect', () => {
  //   setInterval(()=>{
  //     conn.write('Move: right');
  //   }, 200) 
  // });

  // conn.on((data) => {
  //   if (data === 'w') {
  //     // client.end();
  //     // process.exit();
  //     console.log(right)
  //   }
  //   client.write(data);
  // });

  return conn;
}

module.exports = connect;