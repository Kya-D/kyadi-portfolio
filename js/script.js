var i = 0;
var txt = 'Hey I am Kiady';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("txtType").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}