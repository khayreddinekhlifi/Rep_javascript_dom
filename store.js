var minusbtn=document.getElementById('minusbtn');
var plusbtn= document.getElementById('plusbtn');
//console.log(minusbutton);
//console.log(plusbutton);
//increment
for(var i=1;plusbtn.length;i++){
  var button=plusbtn[i];
  button.addEventListener('click',function(event){
    var buttonClicked= event.target;
    //console.log(buttonClicked);
    var input=buttonClicked.parentElement.children[2];
    //console.log(input);
var inputvalue=input.value;
//console.log(inputvalue);
var nexvalue= parseInt(inputvalue)+1;
input.value= nexvalue;
  })
  //decrement
  for(var i=1;minusbtn.length;i++){
    var button=minusbtn[i];
    button.addEventListener('click',function(event){
      var buttonClicked= event.target;
      //console.log(buttonClicked);
      var input=buttonClicked.parentElement.children[2];
      //console.log(input);
  var inputvalue=input.value;
  //console.log(inputvalue);
  var nexvalue= parseInt(inputvalue)-1;
if(nexvalue>=1){
  input.value= nexvalue;
}
else{
  input.value= 1;

  //alert('quantity can not be less than 1 ');
}

  });
}
let likebtn=document.querySelectorAll('likebtn');
var likebtn=document.getElementById('likebtn');

function toggel(){
  if(likebtn.style.color=="red"){
    likebtn.style.color="black"
  }
  else{
    likebtn.style.color="red"
  }
}
var totalprice=document.getElementById("total-price")
totalprice.removeAttribute("totale-price")