import express from 'express'
import notesRouter from './routers/note_route.js'
import 'dotenv/config'
import mongoose from 'mongoose'

const connectionString = process.env.MONGO_URL

mongoose.connect(connectionString).then(() => {
    console.log('database nu afa papa')
}).catch((error) => {
    console.log(error)
})

const app = express()
app.use(express.json())

const port = 7079

/*

app.get('/home', (req, res) => {
    res.send('Hello, Welcome to my first endpoint')
})

*/
app.use(notesRouter)
/*
app.get('/about', (req, res) => {
    res.send('Hello, Welcome to my second endpoint')
})

app.get('/services', (req, res) => {
    res.send('Hello, this is my third Endpoint')
})
     */



app.listen(port, () => {
    console.log(`Server is listinening on port ${port}`)
})
