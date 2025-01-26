// Write your script here
let currUser = JSON.parse(localStorage.getItem('currUser'));
let users =  JSON.parse(localStorage.getItem('user'));
// console.log(users)
if(currUser){

   
    //    console.log(currUser);
       let currUserEmail = currUser.email;
       let userIndex = users.findIndex((items)=> items.email ===currUserEmail)
    //    console.log(currUserEmail)
       console.log('UserIndex',userIndex)


       let ChangeFname = document.getElementById('fname');
       let ChangeLname = document.getElementById('lname');

          ChangeFname.value = users[userIndex].fname;
          ChangeLname.value = users[userIndex].lname;

       // updating fname and lname 
       document.getElementById('save_info_btn').addEventListener('click', saveInfo);

      function saveInfo(e){
         e.preventDefault();
         let ChangeFname = document.getElementById('fname').value.trim();
         let ChangeLname = document.getElementById('lname').value.trim();
         let Message = document.getElementById('updated_message');

         console.log(ChangeFname , ChangeLname);

         if(ChangeFname =='' || ChangeLname==''){
            alert('please Enter both details')
            Message.textContent = " Please Enter both details";
                Message.style.color = 'red';
         }else{
            if(userIndex !== -1){
                users[userIndex].fname = ChangeFname;
                users[userIndex].lname = ChangeLname;
                console.log('updated ')
                console.log(users)
                localStorage.setItem('user', JSON.stringify(users));
                alert('Information updated successfully')
                Message.textContent = " Name Updated SuccesFully";
                Message.style.color = 'green';
                // ChangeFname = '';
                // ChangeLname = '';
             }else{
                alert('user Infortion may be Deleted in local Storage')
             }

         }
 
      }





      // updating password 

      document.getElementById('chang_password_btn').addEventListener('click', chagePassword)

      function chagePassword(e){
        e.preventDefault();
        let oldPassword = document.getElementById('old_password').value.trim();
        let newPassword = document.getElementById('new_password').value.trim();
        let confirmPassword = document.getElementById('confirm_new_password').value.trim();
        let error = document.getElementById('error');

        if(oldPassword ==''){
            // alert('please Enter old password first')
            error.textContent = "Please Enter Old Password"
            error.style.color = 'red'
        }else{
            if(newPassword == confirmPassword){
            if(oldPassword !== users[userIndex].password){
                // alert('Old Password not Correct')
                error.textContent = "Old Password is not correct"
                error.style.color = 'red'
            }else{
                users[userIndex].password = newPassword;
                localStorage.setItem('user', JSON.stringify(users));    
                alert('password Updated SuccesFully');
                error.textContent = "Password Updated SuccesFully"
                error.style.color = 'green'

                oldPassword = '';
                newPassword = '';
                confirmPassword = '';
            }
            }else{
                error.textContent = ' New Password and Confirm Password are not Same'
                error.style.color = 'red'
            }

        }


      }


      // logout
      document.getElementById('Logout').addEventListener('click', logOut);

      function logOut(){
        localStorage.removeItem('currUser')
      }


}else{
    window.location.href = "../login.html"
}