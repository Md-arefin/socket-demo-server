const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;

// middleware

app.use(cors());
app.use(express.json());

// server start
app.get('/', (req, res) => {
    res.send("Socket server is running")
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})