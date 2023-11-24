const express = require("express")

const router = require("./routes")

const app = express()
app.use(express.json())
app.use(router);

app.listen(4000, ()=> {
    console.log('Server berhasil berjalan di port 4000')
})