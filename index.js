const fs = require('fs');

const express = require('express')
const app = express()
const port = 3000

var log = "lorem asdjhaskjdhas asd ad sa das dasd sad sadasjd asdmnsa ds das  dasd sad as d \n";

app.get('/', (req, res) => {

  fs.appendFile("./log/archivo_log.log", log , function (err) {
    if (err) {
      throw err;
    }
    res.send("Me conectare con el servicio: \n\nHOST: " + process.env.HOST + "\nPORT: " + process.env.PORT)
  })
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});