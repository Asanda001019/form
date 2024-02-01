function data(){

    var name= document.getElementById("name").value
    var surname= document.getElementById("surname").value
    var student_num= document.getElementById("student_num").value
    var email= document.getElementById("email").value
    var cellphone= document.getElementById("cellphone").value
    var years= document.getElementById("years").value


   

var infor ={
    name: name ,
    surname: surname,
    student_num: student_num,
    email: email,
    cellphone: cellphone,
    disability: button1,
    sexuality: gender,
    study: qualification,
    enrolled: course,
    years: years,
    type:module,


}


    console.log(infor)
}

      
var button1 , qualification, course, gender;

function response(value){
    button1= value

    let feedback= 'Button1: $(button1)'
    console.log(button1)
}

function response1(value){
    gender= value

    let feedback= 'Gender: $(gender)'
    console.log(gender)
}


function response2(value){
    qualification= value

    let feedback= 'Qualification: $(qualification)'
    console.log(qualification)
}

function response3(value){
    course= value
    
    let feedback= 'Course: $(course)'
    console.log(course)
}


  
import express from 'express';
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    
    const { name, email } = req.body;

    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'Portia949@gmail.com',
            pass: 'Thandeka' 
        }
    });

    const mailOptions = {
        from: 'Portia949@gmail.com',
        to: email,
        subject: 'Confirmation Email',
        text: `Dear ${name}, Thank you for submitting the form.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending confirmation email:', error);
            res.status(500).json({ emailSent: false });
        } else {
            console.log('Confirmation email sent:', info.response);
            res.json({ emailSent: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
