
const UserModel = require('../models/authModel');
const BlogModle = require('../models/blogModel')
 

const LoginPage = (req,res) =>{
  if (res.locals.users) {
    return res.redirect('/admin')
 }
return res.render('login')
 
}

const RegisterPage = (req,res) =>{
    return res.render('register')
}


const registerUser = async(req,res) =>{
  try {
    const {name,email,password} = req.body;
    // console.log(req.body);
    UserModel.create({
        name:name,
        email:email,
        password:password
    });
    console.log("User Registered");
    
    return res.redirect('/'); 

  } catch (error) {
    console.log(error);
    return false;
    
  }

}
const loginUser = async(req,res) =>{
  
  res.redirect('/admin')

// return res.redirect('/admin');

}
const Showblog = async (req, res) => {
  try {
      const blog = await BlogModle.find()
      res.render('Showblog', { blog: blog })

  } catch (error) {
      console.log(error);
      return false;

  }
}
    // return res.render('Showblog')

const Logout = (req,res) =>{
  req.logout((err) =>{
    if(err){
        console.log(err);
        return false            
    }
    return res.redirect('/')

})
    
}
module.exports = {
    LoginPage,RegisterPage,Showblog, registerUser,loginUser,Logout
}