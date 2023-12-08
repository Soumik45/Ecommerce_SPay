const JWT = require('jsonwebtoken')
const User= require ("../model/userModel")
const { comparePassword, hashPassword } = require("../helpers/helper") 

const registerController= async (req,res)=>{
    try {
        const { name, email, password, phone, address } = req.body;
        //validations
        if (!name) {
          return res.send({message: "Name is Required" });
        }
        if (!email) {
          return res.send({message: "Email is Required" });
        }
        if (!password) {
          return res.send({ message: "Password is Required" });
        }
        if (!phone) {
          return res.send({message: "Phone no is Required" });
        }
        if (!address) {
          return res.send({ message: "Address is Required" });
        }

        //check if user is existing or not
        const exisitingUser = await User.findOne({ email });
        //exisiting user
        if (exisitingUser) {
            return res.status(200).send({
                success: false,
                message: "Already Register please login",
        });

        }
        const hashedPassword = await hashPassword(password);


        //save
            const user = await new User({
                name,
                email,
                phone,
                address,
                password: hashedPassword,
            }).save();


            res.status(201).send({
                success: true,
                message: "User Register Successfully",
                user,
              });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }



  const loginController= async (req,res)=>{
    try{

    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    //pw check
    //check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        adddress: user.address,
      },
      token,
    });




    }
    catch(error){
      res.status(500).send(error.message);
    }
  }

  const testController = (req, res) => {
    try {
      res.send("Protected Routes");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };

module.exports = {
    registerController, loginController , testController
};