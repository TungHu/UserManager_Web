
const account = require('../models/accounts')

const control = async (req, res) => {
    res.render("./control.ejs", );
  }



const addAccount = async(req,res,next) => {
    // console.log(req.body.id);
    try{
    const newAcccount = new account({
        username: req.body.username,
        password: req.body.password,
        assets: req.body.assets
    })
    await newAcccount.save()
    
    res.json({message:"Successfully"})
    console.log("Register Successfully - Username : " + newAcccount.username)
    }
    catch (err) {
        res.json({message:err})
    }
}




module.exports = {control, addAccount}
