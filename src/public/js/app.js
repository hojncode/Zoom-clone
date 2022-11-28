const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form")
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

// setTimeout(() => {
//     socket.send("This message from the browser! - after 1sec")
// }, 1000);

function handleSubmit(event) {
    event.preventDefault();
    const input = messageForm.querySelector("input");
    //socket.send -> sever로 ()안의 값을 보내줌.
    socket.send(input.value);
    //"" 비워줌.
    input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);