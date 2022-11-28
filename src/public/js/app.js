const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", ()=> {
    console.log("Connected to Server ✔️")
})

socket.addEventListener("message", (message) => {
    console.log("New Message: ",message.data);
})

socket.addEventListener("close", () => {
    console.log("Disconnected from Sever ❌");
})

setTimeout(() => {
    socket.send("This message from the browser! - after 1sec")
}, 1000);