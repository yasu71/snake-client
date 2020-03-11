// const net = require('net');

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
};

const handleUserInput = function(key) {
  if (key === '\\q\n') {
    client.end();
    process.exit();
  }
};

module.exports = setupInput;