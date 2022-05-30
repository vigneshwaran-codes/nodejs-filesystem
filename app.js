import express from 'express'
import cors from 'cors'
import { filesRouter } from './routes/files.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send(`<h2 style="color: crimson"> 🤘 Create a New File:</h2><p> Use Url  🚀 <span style="color:green">{ ' /file/create ' }</span></p>
  <h2 style="color: crimson">🤘 Get Files:</h2><p>Use Url 🚀 <span style="color:green">{ ' /file/retrieve ' }</span></p>
  <h2 style="color: crimson"> ❔ :</h2><p>Use Url  🚀 <span style="color:green">{' /create '}</span></p>`)
})

app.get('/create', (req, res) => {
  res.send(`<h1>File is created Succcesfully! 🎉</h1>
  <br>
  <h2>check api : <span style="background: lightblue">' file/create '</span><br><br>using (POST) method
  to create a new file</h2>`)
})
app.listen(PORT, () => {
  console.log('The server is successfully Connected!', PORT)
  console.log('Press Ctrl+C to quit')
})

app.use(cors())
app.use(bodyParser.json())
app.use('/file', filesRouter)
