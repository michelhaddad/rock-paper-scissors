import { io } from "socket.io-client";

const URL = "https://rocker-paper-scissors-backend.vercel.app";
const socket = io(URL, { autoConnect: false});

export default socket;
