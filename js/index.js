const form =document.getElementById('form');
const fname =document.getElementById('fname');
const lname =document.getElementById('lname');
const email =document.getElementById('email');
const password =document.getElementById('password');

form.addEventListener('submit', e =>{
    e.preventDefault();
    var firstname = fname.value.trim();
    var lastname = lname.value.trim();
    var emailvalue = email.value.trim();
    var passwordvalue = password.value.trim();
    var pattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(firstname ===''){
        errorFunc(fname,'First Name cannot be empty');
    }else
    {
        successFunc(fname);
    }

    if(lastname ===''){
        errorFunc(lname,'Last Name cannot be empty');
    }else
    {
        successFunc(lname);
    }

    if(emailvalue ===''){
        errorFunc(email,'Looks like this is not an email');
    }else if(!emailvalue.match(pattern)){
        errorFunc(email,'Looks like this is not an email')
    }
    else
    {
        successFunc(email);
    }

    if(passwordvalue ===''){
        errorFunc(password,'Password cannot be empty');
    }else
    {
        successFunc(password);
    }
})
function errorFunc(req ,message){
    const formControl=req.parentElement;
    const span=formControl.querySelector('span');
    span.innerText=message;
    req.className+='error';
    span.className+='error-text';
    if(req!==email){
        req.value='';
    }else{
        req.style.color="hsl(0, 100%, 74%)"
    }
}
function successFunc(req){
    req.className+='success';
}