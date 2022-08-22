import { Server } from "socket.io";


const io = new Server({
    cors: {
        origin: "http://localhost:3000",
    }
})

io.on('connection', (socket) => {
   console.log("first connection")
    socket.on('disconnect', () => {
        console.log("disconnected")
    } )
});

io.listen(5000);