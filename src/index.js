const checkBox = document.querySelectorAll(".checkbox");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const input = document.querySelector("#input");

checkBox.forEach(checkbox=>{
      checkbox.addEventListener("click",function(){
      if(this.checked){
            checkBox.forEach(checkbox=>{
                  if(checkbox !== this){
                        checkbox.checked = false;
                  }
            })
      }
      })
})

function updateInputType (){
      if (email.checked) {
            input.type = 'email';  
            input.placeholder = 'Enter your email'; 
          } else if (phone.checked) {
            input.type = 'tel';  
            input.placeholder = '+91   Enter your phone number';  
          }
}


email.addEventListener("change" , updateInputType);
phone.addEventListener("change" , updateInputType);