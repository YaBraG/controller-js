//go to server 
const socket = io("http://192.168.2.11:3000")

socket.on("connect", ()=>{
    socket.emit("ID", "js-controller")
})