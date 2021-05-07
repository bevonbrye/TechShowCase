const circle = document.getElementById('circle');
const up = document.getElementById('up');
const down = document.getElementById('down');


let modalBtn = document.getElementById("modal-btn")
let modalBtn1 = document.getElementById("modal-btn1")
let modalBtn2 = document.getElementById("modal-btn2")
let modalBtn3 = document.getElementById("modal-btn3")

let modal = document.querySelector(".modal")
let modal1 = document.querySelector(".modal1")
let modal2 = document.querySelector(".modal2")
let modal3 = document.querySelector(".modal3")

let closeBtn = document.querySelector(".close-btn")
let closeBtn1 = document.querySelector(".close-btn1")
let closeBtn2 = document.querySelector(".close-btn2")
let closeBtn3 = document.querySelector(".close-btn3")

let rotateVal = circle.style.transform;
let rotateSum;

up.addEventListener('click', handleUp);
down.addEventListener('click', handleDown);

function handleUp(){ 
    rotateSum = rotateVal + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateVal = rotateSum;
}

function handleDown(){ 
    rotateSum = rotateVal + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateVal = rotateSum;
}



modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
};

modalBtn1.onclick = function(){
    modal1.style.display = "block"
  }
  closeBtn1.onclick = function(){
    modal1.style.display = "none"
  }
  window.onclick = function(e){
    if(e.target == modal){
      modal1.style.display = "none"
    }
  };


  modalBtn2.onclick = function(){
    modal2.style.display = "block"
  }
  closeBtn2.onclick = function(){
    modal2.style.display = "none"
  }
  window.onclick = function(e){
    if(e.target == modal){
      modal2.style.display = "none"
    }
  };


  
 modalBtn3.onclick = function(){
    modal3.style.display = "block"
  }
  closeBtn3.onclick = function(){
    modal3.style.display = "none"
  }
  window.onclick = function(e){
    if(e.target == modal){
      modal3.style.display = "none"
    }
  };
  
