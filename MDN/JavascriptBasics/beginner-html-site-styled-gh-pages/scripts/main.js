// grabs a reference to the H1 tag on the dom
//const myHeading = document.querySelector('h1');

//myHeading.textContent = "Hello World";
//alert('hello');

// document.querySelector('html').onclick = function() {
//     alert('Ouch stop poking me!');
// }

/*
 above is equivalent to
let myHTML = document.querySelector('html');
myHTML.onclick = function() {};

*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    
    if(src == "images/firefox-icon.png"){
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

// avoids null name error.
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

  myButton.onclick = function() {
    setUserName();
  }