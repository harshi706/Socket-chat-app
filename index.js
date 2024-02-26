const express=require('express');
const http=require('http');
const path=require("path");
const {Server}=require('socket.io');


const app=express();
const server=http.createServer(app);
const PORT=9000;
const io=new Server(server);

io.on("connection",(socket)=>{
   socket.on("user-message",(message)=>{
      io.emit("message",message);
      console.log("User messaged: ",message);
   })
   // console.log("Connection is established",socket.id);
})
app.use(express.static(path.resolve('./public')));
app.get('/',(req,res)=>{
   return res.sendFile('/public/index.html');
})
 server.listen(PORT,()=>{
    console.log("Server is running on port 8000");
 })