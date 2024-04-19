var tablinks= document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tablink of tabcontents){
            tablink.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");

    }

     var menu=document.getElementById('side-menu');

     function openmenu(){
      menu.style.right="0";
     }
     function closedmenu(){
      menu.style.right="-300px";
     }

// Message submission

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


