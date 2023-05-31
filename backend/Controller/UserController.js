const User = require('../Model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
   
   // api handle the logic of login
   const Login = async (req,res) => {
    console.log(req.body);
    try {
        const { email, password } = req.body;
    
        
        const user = await User.findOne({ email });
        console.log(user)
        if (!user) {
          return res.status(401).json({ message: 'please enter a correct username and password' });
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log('ispass',isPasswordValid);
        if (!isPasswordValid) {
          console.log('password is invalid');
          return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        const token = jwt.sign({ userId: user._id }, 'Pankaj');
        console.log(token);
        return res.json({
          token,
          user: {
            id: user._id,
            name: user.name,
            dob: user.dob,
            email: user.email,
          },
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
}


// lets write a function to register the user

const registerUser = async(req,res) => {

    try {
        const { name, dob, email, password } = req.body;
        
        console.log(req.body);
        // return;
        const userExist = await User.findOne({ email });
        if (userExist) {
          return res.status(409).json({ message: 'User already exists' });
        }
    
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create a new user
        const newUser = new User({
          name,
          dob,
          email,
          password: hashedPassword,
        });
    
        // Save the user to the database
        await newUser.save();
    
        return res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
      }

}

// api to fetch all user from the database

const allUser = async(req,res) => {

    try {
        const users = await User.find({}, '-password'); 
        return res.json(users);
      } catch (error) {
        console.log(`error occured ${error}`);
        return res.status(500).json({ message: 'Internal server error' });
      }

}

module.exports = {registerUser,Login,allUser};