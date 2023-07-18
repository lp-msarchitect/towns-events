"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = process.env.SERVER_PORT || 3000;
app_1.default.set('port', port);
app_1.default.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// const server = http.createServer(App);
// server.listen(port);
// server.on('listening', function (): void {
//   const addr = server.address();
//   const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
//   console.log(`Server is running at http://localhost:${port}`);
// });
