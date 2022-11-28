const socket = new WebSocket(`ws://${window.location.host}`);

function handleOpen() {
    console.log("Connected to Server ✔️");
};

function handleMessage(message) {
    console.log("New Message: ",message.data);
};

function handleClose() {
    console.log("Disconnected from Sever ❌");
}

socket.addEventListener("open", handleOpen)

socket.addEventListener("message", handleMessage)

socket.addEventListener("close", handleClose)

setTimeout(() => {
    socket.send("This message from the browser! - after 1sec")
}, 1000);