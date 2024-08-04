const express = require('express')
var dbCon = require('./lib/db');
var myRouter = require('./routes/myUser');

let data;
const app = express();
const PORT = process.env.PORT;


//home route to test
// app.get("/", (req, res) => {
//     res.send(data);
// })

app.use('/emp', myRouter);
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));