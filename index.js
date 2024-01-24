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