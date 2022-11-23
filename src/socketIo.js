import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("server is connect loading...");
  socket = io("http://localhost:3000/", { transports: ["websocket"] });
  socket.on("connect", () => console.log("connect"));
};

export const sendMessage = (message) => {
  if (socket) socket.emit("new-message", message);
};

export const subscribeChat = (cb) => {
	if (!socket) return;

	socket.on("receive-message", (message) => {
		console.log("Yeni mesaj var", message);
		cb(message);
	});
};

export const getMessages = (cb) =>{
    if (!socket) return ;
    socket.on("message-list", (message) => {
		console.log(message);
		cb(message);
	});
}