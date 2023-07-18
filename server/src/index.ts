import * as http from 'http';
import App from './app';

const port = process.env.SERVER_PORT || 3000;

App.set('port', port);
App.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// const server = http.createServer(App);
// server.listen(port);

// server.on('listening', function (): void {
//   const addr = server.address();
//   const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
//   console.log(`Server is running at http://localhost:${port}`);
// });
