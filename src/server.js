import Server from 'socket.io';

export defaul function startServer() {
	const io = new Server().attach(8090);
}