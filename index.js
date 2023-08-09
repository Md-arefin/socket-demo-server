const express = require('express');
const cors = require('cors');
const app = express();
const { Server,} = require("socket.io");
const io = new Server(5000, {
    cors: true
})

// // middleware

// app.use(cors());
// app.use(express.json());

// server start
app.get('/', (req, res) => {
    res.send("Socket server is running")
})

io.on("connection", (socket)=>{
    console.log(`Socket Connected`, socket.id)
})


// app.listen(io, () => {
//     console.log(`Server is running on port: ${io}`)
// })