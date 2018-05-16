var btn1 = document.getElementById('b1')
btn1.addEventListener('click', function(){
  menuPrintouts(btn1)
})
var btn2 = document.getElementById('b2')
btn2.addEventListener('click', function(){
  menuPrintouts(btn2)
})
var btn3 = document.getElementById('b3')
btn1.addEventListener('click', function(){
  menuPrintouts(btn3)
})
var btn4 = document.getElementById('b4')
btn1.addEventListener('click', function(){
  menuPrintouts(btn4)
})
var btn5 = document.getElementById('b5')
btn1.addEventListener('click', function(){
  menuPrintouts(btn5)
})
var btn6 = document.getElementById('b6')
btn1.addEventListener('click', function(){
  menuPrintouts(btn6)
})

var main_body = document.getElementById('mb')

function menuPrintouts(btn) {
  switch(btn){
    case btn1: 
      main_body.innerHTML = "<h1> Have some meat </h1>";
      break
    case btn2: 
      main_body.innerHTML = "Have some vegetable";
      break
    case btn3: 
      main_body.innerHTML = "Have some soup";
      break
    case btn4: 
      main_body.innerHTML = "Have some fishies";
      break
    case btn5: 
      main_body.innerHTML = "Have some fruit";
      break
    case btn6: 
      main_body.innerHTML = "Have some dessert";
  }
}