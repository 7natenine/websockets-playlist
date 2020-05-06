const { PORT } = require('./config')
const App = require('./App')


App.listen(PORT, () => { 
  console.log(`Server listening at http://localhost:${PORT}`)
});

module.exports = {App};