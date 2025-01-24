let email = document.getElementById('email');
let password = document.getElementById('password');
let login_btn = document.getElementById('login_btn');
let error = document.getElementById('error');


login_btn.addEventListener('click', login);

function genrateToken(){
    return Math.random(0, 100000).toString();
}

function login(e){
    e.preventDefault();
    if(email.value=='' || password.value==''){
        // console.log('')
        error.textContent = "Plese Enter full details";
        error.style.color = 'red';
    }else{
        let users = JSON.parse(localStorage.getItem('user') || "[]");

        if(users.length>0){
            let user = users.filter((user)=>user.email == email.value)

            if(user.length>0){
                let userObj = user[0];

                if(userObj.password == password.value ){
                    localStorage.setItem('currUser', JSON.stringify(
                        {email: email.value,
                        password:password.value,
                        token:genrateToken(),
                    }))
                    window.location.href = "./profile/index.html"
                }else{
                    // console.log('')
                    error.textContent = "Enter Correct Email or Password";
                     error.style.color = 'red';
                }
             }else{
                // console.log("")
                error.textContent = "User Does not Exist";
                error.style.color = 'red';
             }
        }else{
            // console.log('')
            error.textContent = "User Does not Exist";
            error.style.color = 'red';
        }
    }
}