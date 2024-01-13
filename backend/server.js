const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.json( {msg: "Hello Contact-App"});
})

app.listen(4000, () =>{
    console.log("The server is running on port 4000!!.")
})