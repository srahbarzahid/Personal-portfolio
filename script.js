const form = document.querySelector('form');
const firstname =document.getElementById('first-name');
const lastname = document.getElementById('last-name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function sendemail(){
    const bodyMessage = `First Name: ${firstname.value} <br>
    Last Name:${lastname.value}<br>
    Email: ${email.value}<br>
    Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rahbarzahid96@gmail.com",
        Password : "0F6FA453F4F55FBCBD056326BB9F8E606B74",
        To : 'rahbarzahid96@gmail.com',
        From : "rahbarzahid96@gmail.com",
        Subject : message.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    sendemail();
})