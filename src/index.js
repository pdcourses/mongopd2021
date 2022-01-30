const app = require('./app');
const http = require('http');
const PORT = 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is working on ${PORT}`);
});
