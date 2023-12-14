function validatEmail(email){
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    regex = new RegExp(pattern);
    if(regex.test(email)){
        
    return true
    }
    
}
let mylist= document.querySelectorAll('li') 
const navbar = document.getElementsByClassName('navbar')[0]    
document.querySelector('#closBtn').addEventListener('click',function(){
    document.querySelector('#closBtn').style.display="none";        
    navbar.style.width = "0";
        mylist.forEach((i)=>{            
            i.style.display='none'
        })
})

document.querySelector('#openBtn').addEventListener('click',function(){
    document.querySelector('#closBtn').style.display="block";       
    navbar.style.width = "100%"
    mylist.forEach((i)=>{        
        i.style.display='block'
    })
    
})
document.getElementById('submit').addEventListener('click',function(e){
e.preventDefault()
const fname         = document.getElementById('fname').value
const lname         = document.getElementById('lname').value
const mobile        = document.getElementById('mobile').value
const email         = document.getElementById('email').value
const fname_error   = document.getElementById('fname_error')
const lname_error   = document.getElementById('lname_error')
const mobile_error  = document.getElementById('mobile_error')
const email_error   = document.getElementById('email_error')
const gcaptcha      = document.getElementById('g-recaptcha_error')

if(fname==''){          
    fname_error.classList.remove('d-none')
    fname_error.classList.add('d-block')
    return false;
}
if(lname==''){         
    lname_error.classList.remove('d-none')
    lname_error.classList.add('d-block')
    return false;
}
if(mobile==''){        
    mobile_error.classList.remove('d-none')
    mobile_error.classList.add('d-block')
    return false;
}
if(email=='' ){        
    email_error.classList.remove('d-none')
    email_error.classList.add('d-block')
    return false;
}

if(!validatEmail(email)){        
    email_error.classList.remove('d-none')
    email_error.classList.add('d-block')
    email_error.innerHTML='please enter valid email address'
    return false

}
if(grecaptcha.getResponse()=='' ){        
    gcaptcha.classList.remove('d-none')
    gcaptcha.classList.add('d-block')
    return false;
}     

const hey= document.getElementById('forms') 
const  data = new  FormData(hey) 
sendEmail(email,fname,lname);

// try {
//     response =   fetch('/railway/captcha.php',{
//     method:'post',
//     body:data,

//  }).then( res=>res.json()).then(json=>{
//     console.log(json)
//  })
// } catch (error) {
//     console.log(error)
// }

})     
function sendEmail(email,fname,lname) {
    Email.send({
        SecureToken :"d8922af1-fa59-4f67-a67a-f41c56b1afe3",
        To: email,
        From: "ajmalkhan49256@gmail.com",
        Subject: "Galaxy",
        Body: `thank you for contact with us MR/MR's ${fname +' '+lname} our team get in touch with you`,
    
    })
        .then(function (message) {
            console.log(message)
        if(message=='OK'){ 
            console.log(message)
            Swal.fire('success',"email send succefully",'success').then(()=>{
                window.location.reload()
            });
        }else{                      
            Swal.fire('Faield',"Somthin went worng",'error');
        }
        });
}

document.getElementById('fname').addEventListener('keyup',function(){
document.getElementById('fname_error').classList.add('d-none')
})     
document.getElementById('lname').addEventListener('keyup',function(){
document.getElementById('lname_error').classList.add('d-none')
})     
document.getElementById('mobile').addEventListener('keyup',function(){        
document.getElementById('mobile_error').classList.add('d-none')
})     
document.getElementById('email').addEventListener('keyup',function(){
document.getElementById('email_error').classList.add('d-none')
}) 