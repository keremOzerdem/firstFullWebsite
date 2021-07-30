function openNav() {
  document.getElementById("mySidenav").style.width = "250px"
  document.querySelector('#align-icon').style.marginRight = "250px";
  document.querySelector('div#align-icon>span>i.fa-bars').classList.remove("fas", "fa-bars", "fa-w-14", "fa-2x")
}

function closeNav() {
  document.querySelector('div#align-icon>span>i').classList.add("fas", "fa-bars", "fa-w-14", "fa-2x")
  document.getElementById("closeBtn").parentElement.style.width = "0"
  document.getElementById("align-icon").style.marginRight = "0";
}

function openimg(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}