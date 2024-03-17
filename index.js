require('dotenv').config()

const express=require('express')

const cors=require('cors')

const server=express()

server.use(cors())

server.use(express.json())


require('./DB-connection/connection')

const router=require('./Routes/router')
server.use(router)

const PORT=4000||process.env.PORT

server.listen(PORT,()=>{
    console.log(`Server Running port:${PORT}`);
})