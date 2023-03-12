const express=require("express");
const router=express.Router();
const studentcontrollers=require("../controllers/studentcontrollers");
router.get("/",studentcontrollers.view);
router.get("/adduser",studentcontrollers.adduser);
router.post("/adduser",studentcontrollers.save);

router.get("/updateuser/:id",studentcontrollers.updateuser);
//router.get('/',(req,res)=>{
   // res.render('home');
  //  });

module.exports=router;