var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks ){
    tablink.classList.remove("active-link");

  }
  for(tabcontent of tabcontents ){
    tabcontent.classList.remove("active-tab");
    
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
} 

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right="0";
}
function closemenu(){
  sidemenu.style.right="-200px"
}



/*........ contact from sheet...................*/

  const scriptURL = 'https://script.google.com/macros/s/AKfycby1YzWK2ckrC1MdXxT8irQTeTrymQmoKb4iTGhgwNznHkxqdjW2hslVX0NGa9GxKLvP/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
          msg.innerHTML =""
        },30000)
        form.reset();

      })
      .catch(error => console.error('Error!', error.message))
  });
