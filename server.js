const express = require("express"),
    logger =require("morgan"),
    app = express()
    PORT = process.env.PORT || 1234;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(logger("dev"));

app.listen(PORT, err=>{
    if (err) console.log(err);
    console.log(`Now listening on PORT ${PORT}`)
})