const form=document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    validateInputs()
})

function validateInputs(){
    const usernameVal=username.value.trim()
    const emailVal=email.value.trim()
    const passwordVal=password.value.trim()
    const cpasswordVal=cpassword.value.trim()

    if(usernameVal===''){
        setError(username, 'Username is required')
         }
        else{
        setSuccess(username)
        }

    if(emailVal===''){
        setError(email, 'Email is required')
        }
        else if(!validateEmail(emailVal)){
        setError(email,'Email is invalid')
        }
        else{
        setSuccess(email)
        }


    if(passwordVal===''){
        setError(password, 'Password is required')
        }
        else if(passwordVal.length<8){
        setError(password,'Password must be atleast 8 characters')
        }
        else{
        setSuccess(password)
        }

    if(cpasswordVal===''){
        setError(cpassword, ' Confirm Password is required')
        }
        else if(cpasswordVal!==passwordVal){
        setError(password,'Password does not match')
        }
        else{
        setSuccess(cpassword)
        }    
}

function setError(element,message){
    const inputGroup=element.parentElement
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText=message
    inputGroup.classList.add('error')
    inputGroup.classList.remove('succes')
}


function setSuccess(element){
    const inputGroup=element.parentElement
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email)  =>{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

 