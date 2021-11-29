document.querySelector('.burger').addEventListener('click', function(){
  document.querySelector('.burger span').classList.toggle('active');
  document.querySelector('.menu').classList.toggle("animate");
})


let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("slid");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}

