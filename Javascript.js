function myFunction(){
    onclick=prompt ('what is your email');
    }
    
function enlarge(){
    onclick= width="570"; height="500"
}

localStorage.setItem("fname", "marijn"); 
console.log(localStorage.getItem("fname"));
localStorage.removeItem("fname"); 

function resetForm() {
    document.getElementById("myForm").reset();
    
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "100px";
    document.body.style.backgroundColor = "#f6f1f2";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "#f6f1f2";
  }