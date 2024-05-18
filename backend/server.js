import express from "express"

const app = express()

app.get("/", (req, res)=>{
  res.send('Server is Running')
})

// Get a list of five Bikes 
app.get("/api/bikes", (req, res) =>{
  const bikes = [
    {
      id:1,
      titile: "Bullet meteor",
      content: "this is the perfect bike for tour and treavel",
    },
    {
      id:2,
      titile: "Bullet Classic",
      content: "The look of the bike is very classic and royal",
    },
    {
      id:3,
      titile: "royal enfield Continental",
      content: "This is dashing and the speed and sound of this bike is amazing",
    },
    {
      id:4,
      titile: "java",
      content: "The new model of java is very decent and eyecatching",
    },
    {
      id:5,
      titile: "BMW",
      content: "this bike is very comfortable for long ride",
    },

  ]
  res.send(bikes)
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`Server is running at localhost:${port}`)
})