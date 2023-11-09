const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
 const secretKey='3036f07992791a5b5f76b27402e800c75e01e6c0eb72266c91f1a8cedf87cfd99e0280a17dc583c2456675229a639ba0df602ee962ebf5a37126ced2efb27b3f'; // Replace with your actual secret key
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb://127.0.0.1:27017/Rio');

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Connect to MongoDB
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,

  usertype: String,
});

const User = mongoose.model('User', userSchema);
const bcrypt = require('bcrypt');
const saltRounds = 10; // Number of salt rounds for hashing

// Register route
app.post('/register', async (req, res) => {
  const { username, email, password, designation, usertype } = req.body;

  try {
    // Hash the user's password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ username, email, designation, usertype, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// View users route
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

app.post('/slogin', async (req, res) => {
  try {
    const { email, password, usertype } = req.body;
    const user = await User.findOne({ email, usertype });

    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    if (!password) {
      return res.json({
        error: "Type password",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password); // Note the 'await' keyword here.

    if (!passwordMatch) {
      return res.status(200).send({
        error: "Passwords don't match",
      });
    }
    if (passwordMatch) {
      const token = await jwt.sign({ email, usertype }, secretKey, { expiresIn: "7d" });

    console.log(user);
      return res.status(200).send({
        success: true,
        message: "Login success",
        user, // Include the user object here.
        token,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
});



// Logout route
app.post('/logout', (req, res) => {
  // Clear the authToken cookie to log the user out
  res.clearCookie('authToken');

  // Clear the user details stored in local storage
  localStorage.removeItem('user');

  res.status(200).json({ message: 'Logged out successfully' });
});

// Define the verifyToken function (outside of route handlers)
app.get('/Profile', (req, res) => {
  // Load user details from local storage
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Define job schema and routes for job-related operations

const fudschema = new mongoose.Schema({
  Fooditem: String,
rate: String,
});

const Fud = mongoose.model('Fud', fudschema);

app.post('/add', async (req, res) => {
  try {
    const newfud = new Fud(req.body);
    await newfud.save();
    res.status(201).json({ message: 'Job added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Job addition failed' });
  }
});

app.get('/fud', async (req, res) => {
  try {
    const fuds = await Fud.find();
    res.json(fuds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching jobs' });
  }
});

app.delete("/usersdata/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting user' });
  }
});

app.delete("/fuddata/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Job.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting job' });
  }
});

app.put('/fuddata/:id', async (req, res) => {
  const { id } = req.params;
  const updatedJobData = req.body;

  try {
    await Job.findByIdAndUpdate(id, updatedJobData);
    res.json({ message: 'Job updated successfully' });
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({ error: 'Error updating job' });
  }
});

// application

const orderschema = new mongoose.Schema({
  username: String,
  email: String,
  Fuditem: String,
});

const order = mongoose.model('order', orderschema);

app.post('/order', async (req, res) => {
  try {
    const neworder = new order(req.body);
    await neworder.save();
    res.status(201).json({ message: ' Applied successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Application failed' });
  }
});
app.get('/showorder', async (req, res) => {
  try {
    const orders = await order.find();
    console.log(orders);
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching application' });
  }
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
