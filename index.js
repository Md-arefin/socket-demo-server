const express = require('express');
const app = express();
const { Server, } = require("socket.io");
const io = new Server(5000, {
    cors: true
})

// // middleware

// app.use(cors());
// app.use(express.json());

// server start
// app.get('/', (req, res) => {
//     res.send("Socket server is running")
// })

const emailToSocketIdMap = new Map();
const socketIdToEmailMap = new Map();


io.on("connection", (socket) => {
    console.log(`Socket Connected`, socket.id);
    socket.on('room:join', (data) => {
        console.log(data);
        const { email , room} = data;
        emailToSocketIdMap.set(email, socket.id);
        socketIdToEmailMap.set(socket.id, email);
        io.to(room).emit("user:joined", {email , id: socket.id });
        socket.join(room);
        io.to(socket.id).emit('room:join', data);
    });

    socket.on("user:call", ({ to, offer }) =>{
        io.to(to).emit("incoming:call", { from: socket.id, offer});
    })
})


// app.listen(io, () => {
//     console.log(`Server is running on port: ${io}`)
// })