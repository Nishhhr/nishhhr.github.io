
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

  function changeFontSize(size) {
    document.querySelector('p').style.fontSize = size;
  }

  function toggleColorblindMode() {
    document.getElementById("main").classList.toggle('colorblind-mode');
  }

  document.getElementById('colorblind-toggle').addEventListener('click', toggleColorblindMode);