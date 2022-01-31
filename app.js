const userRoutes = require('./routes/user_routes')
const express = require('express')
const app = express();

const mongoose = require('mongoose')

app.use(express.json())

userRoutes(app)
const connectionService = async ()=>{
  try{
    await mongoose.connect('mongodb://localhost:27017/mUber')
    console.log('Connected To DataBase')
// Local Server
  const port = process.env.PORT || 8080;
  app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})

  }catch(err){
    console.log('Unable To connect',err.message)
  }
}
connectionService();

// custom middle ware for errors
app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message})
})

