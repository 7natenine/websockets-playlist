import openSocket from 'socket.io-client';

const { PORT } = require('./config')
const socket = openSocket(`http://localhost:${PORT}`);
const App = require('./App')


App.listen(socket, () => { 
  console.log(`Server listening at ${socket}`)
});

module.exports = {App};