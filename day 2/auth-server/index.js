import express from "express"
import AutodeskAuth from "./autodesk-auth/index.js"



const app = express()
const port = 3000

const autodeskAuth = new AutodeskAuth();

app.get('/', async (req, res) => {
   res.send(await autodeskAuth.login());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})