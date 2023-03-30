const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser())
const router = express.Router();
require("./Conn");
const User = require("./userSchema");

router.post("/details", async(req, res) => {
    const {
        File,
        Auth,
        Loc,
        Desc,
    } = req.body;
    if (!File ||
        !Auth ||
        !Loc ||
        !Desc
    ) {
        res.status(422).json({ error: "empty field" });
        return console.log("empty field");
    }
            const user = new User({
                File,
                Auth,
                Loc,
                Desc,
            });

            await user.save();

            res.status(201).json({ message: "user registered successfully" });
            console.log("user registered successfully");
    } 
);
router.get("/postview",async (req, res) => {
    try{
     await User.find({}).then(data=>{
        res.send({status:"Ok",data:data})
     })
    }catch(error){
     res.send({status:"Cant get Data"})
    }
 });

module.exports = router;