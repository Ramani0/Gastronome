const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const nodemailer = require('nodemailer');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/food',{useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
},{
    collection:'foodcollection'
});

const User = mongoose.model('User',userSchema);

app.post('/api/users', async (req, res) => {
    try {
       
        const {username,email, password } =req.body;
        console.log(username,email,password)
        const user = new User({username,email,password});
        console.log(user)
        await user.save();
        res.status(201).json({ message: 'user create successfully'});

    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error'});
    }
});

app.post('/api/login', async (req,res) => {
    try {
        const { email, password } = req.body;
        console.log(email,password);
        const user =await User.findOne({email, password});

        if (user) {
            res.status(200).json({message: 'login succussful'});
            console.log("success");
        }else{
            res.status(401).json({ message: 'Login failes. User not found'});
            console.log("nosuccess");
        }
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error'})
        console.log("notsuccess");
    }
});

/* product */
const userSchema1 = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    picture: String,
},{
    collection: 'foodcollection'
});

const User1 = mongoose.model('User1', userSchema1);

// Register a new user
app.post('/api/product', async (req, res) => {
    try {
        const { name, description, price, picture } = req.body;
       
        const user = new User1({ name, description, price, picture });
        await user.save();
        res.status(201).json({ message: 'User created successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error'});
    }
});

// Get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await User1.find({});
        res.status(200).json(products);
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email', error: error.message });
    }
    
});

app.post('/api/send-email', async (req, res) => {
    try {
        const { to, subject, body } = req.body;

        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'ravichandiranramani@gmail.com',
                pass: '8668061164'
            }
        });

        let info = await transporter.sendMail({
            from: '"Ramani" <ravichandiranramani@gmail.com>',
            to: to,
            subject: subject,
            text: body
        });

        console.log('Message sent: %s', info.messageId);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
    }
});
app.post('/api/send-email1', async (req, res) => {
    try {
        

        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'ravichandiranramani@gmail.com',
                pass: '8668061164'
            }
        });

        let info = await transporter.sendMail({
            from: '"Ramani" <ravichandiranramani@gmail.com>',
            to: "to",
            subject: "subject",
            text: "body"
        });

        console.log('Message sent: %s', info.messageId);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
    }
});
  


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 
    `);
});