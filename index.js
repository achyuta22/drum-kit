var a=Math.random();
 a=a*6 +1;
a=Math.floor(a);
function dice1(){
if(a===1){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
}
 else if(a===2){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
}
else if(a===3){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
}
else if(a===4){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
}
else if(a===5){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
}
else{
    document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
  }}
  var b=Math.random();
b=b*6 +1;
b=Math.floor(b);

  function dice2(){
if(b===1){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
}
else if(b===2){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
}
else if(b===3){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
}
else if(b===4){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
}
else if(b===5){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
}
else {
    document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
}
}
dice1();
dice2();
function statement(){
    if(a>b){
        document.querySelector("h1").innerHTML=" Player 1 Won";
    }
    else if(a===b){
        document.querySelector("h1").innerHTML=" TIE match";
    }
    else{
        {
            document.querySelector("h1").innerHTML=" Player 2 Won";
        }
    }
}
statement();
