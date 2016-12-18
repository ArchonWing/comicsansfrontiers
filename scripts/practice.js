var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to CSF, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  var userName = prompt('Enter user name: ');
  localStorage.setItem('name', userName);
  myHeading.textContent = 'Welcome to CSF, ' + userName;
}
