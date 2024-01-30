let name = document.getElementById('name');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let cpass = document.getElementById('cpass');
let city = document.getElementById('city');



const validation = () =>{
    event.preventDefault();
        console.log("Name is empty");

        //name validation
        if(name.value == ""){
            document.getElementById('nerr').innerHTML = "this valid is required";
        }
        
        //email validation
        if(email.value == ""){
            document.getElementById('emrr').innerHTML = "this valid is required";
        }

         //password validation
         if(pass.value == ""){
            document.getElementById('parr').innerHTML = "this valid is required";
        }

         //cpass validation
         if(cpass.value == ""){
            document.getElementById('cparr').innerHTML = "this valid is required";
        }

         //city validation
         if(city.value == ""){
            document.getElementById('cirr').innerHTML = "this valid is required";
        }
    }   