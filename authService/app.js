const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001
const route = require('./routes');
app.use(express.json())

// router.get("/", (req,res) =>{
//     res.send("hello")
// })

// router.get("/register", (req,res) => {
//     res.send("Register")
// })

// router.get('/login', (req,res) =>{
//     res.send("login")
// })

////////////
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
app.use("/", route)
app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}`)
})


