// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))




let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirm_password = document.getElementById('confirm_password');
let signup_btn = document.getElementById('signup_btn');
let error = document.getElementById('error');

signup_btn.addEventListener('click', signUp);

function signUp(e){
    e.preventDefault();
    if(fname.value =='' || lname.value =='' || email.value == '' || password.value =='' || confirm_password== ""){
         error.textContent = "please Enter All fileds";
         error.style.color = 'red';
         return;
    }

    let users = JSON.parse(localStorage.getItem('user') || "[]");
    //    console.log(users);

    let filterUsers = users.filter((user)=> user.email == email.value);


    if(password.value !== confirm_password.value || password.value.length <=5){

        error.textContent = "password and confirm_password must be same and grater then 5";
         error.style.color = 'red';
        return;
    }else if(!email.value.includes('@') || !email.value.includes('.')){

        error.textContent = "please enter valid email";
         error.style.color = 'red';
       return;
    }else if(filterUsers.length>0){

        error.textContent = "user Already Exist";
         error.style.color = 'red';
      return;
    }
    else{
        let userObj = {
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            password: password.value,
            createAt: new Date(),
        }
        users.push(userObj);
        
    }

    localStorage.setItem('user', JSON.stringify(users));
    error.style.color = 'white';
            fname.value = ''
            lname.value = ''
            email.value = ''
            password.value = ''
            confirm_password.value = ''

}
