import { io } from "socket.io-client";

const URL = "https://rocke-paper-scissors-backend.onrender.com";
const socket = io(URL, { autoConnect: false});

export default socket;
