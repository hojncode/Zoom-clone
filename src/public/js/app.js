const messageList = document.querySelector("ul");
const nickForm = document.querySelector("#nick");
const messageForm = document.querySelector("#message");
const socket = new WebSocket(`ws://${window.location.host}`);

//함수
function makeMessage(type, payload) {
    const msg = { type, payload };
    return JSON.stringify(msg);
  }

function handleOpen() {
  console.log("Connected to Server ✔️");
}

function handleMessage(message) {
  console.log("New Message: ", message.data);
  const li = document.createElement("li");
  li.innerText = message.data;
  messageList.append(li);
}

function handleClose() {
  console.log("Disconnected from Sever ❌");
}

//이벤트리스너
socket.addEventListener("open", handleOpen);
socket.addEventListener("message", handleMessage);
socket.addEventListener("close", handleClose);

// setTimeout(() => {
//     socket.send("This message from the browser! - after 1sec")
// }, 1000);

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector("input");
  //socket.send -> sever로 ()안의 값을 보내줌.
  socket.send(makeMessage("new_message", input.value));
  //"" 비워줌.
  input.value = "";
}

function handleNickSubmit(event) {
    event.preventDefault();
    const input = nickForm.querySelector("input");
    socket.send(makeMessage("nickname", input.value));
    input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubmit)