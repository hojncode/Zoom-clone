import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"))
app.get("/", (req,res) => res.render("home"));
//어떠한 url입력해도 /로 보냄.
app.get("*", (req,res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
// app.listen(3000, handleListen);   

const server = http.createServer(app);

const wss = new WebSocket.Server({server});


function onSocketClose() {
    console.log("Disconnected from the Browser 📵")
}

function onSocketMessage(message) {
    console.log(message.toString('utf-8'))
}

wss.on("connection", (socket) => {
    console.log("Conneted to Browser 🔄");
    socket.on("close", onSocketClose)
    socket.on("message",onSocketMessage)
    socket.send("hello");
});

server.listen(3000, handleListen)