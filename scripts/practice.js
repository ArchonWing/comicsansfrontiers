var myHeading = document.querySelector('h1');
myHeading.textContent = 'Move Faster!';

myHeading.onclick = function(){

  var message = myHeading.textContent;
  if (message === 'Move Faster!'){
    myHeading.textContent = 'I\'m already moving fast!';
  } else {
    myHeading.textContent = 'Move Faster!';
  }

}
