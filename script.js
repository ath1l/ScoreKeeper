let score1 = document.querySelector('.num1');
let score2 = document.querySelector('.num2');
let button1 = document.querySelector('#p1Score');
let button2 = document.querySelector('#p2Score');
let reset = document.querySelector('#reset');
let reset2 = document.querySelector('#reset2');
let overLay = document.querySelector('.overLay');
let endText = document.querySelector('#endText');


button1.addEventListener("click",function() {
    score1.innerText = parseInt(score1.innerText) + 1;
    if(document.querySelector('#limit').value == parseInt(score1.innerText))
    {
     console.log("p1 won");
     endText.innerText = "P1 has Won The Match";
     overLay.style.display = 'flex';
     
    }
    
})

button2.addEventListener("click",function() {
    score2.innerText = parseInt(score2.innerText) + 1;
    if(document.querySelector('#limit').value == parseInt(score2.innerText))
    {
        console.log("p2 won");
        endText.innerText = "P2 has Won The Match";
        overLay.style.display = 'flex';     
    }
})

reset.addEventListener("click",function() {
    score1.innerText = 0;
    score2.innerText = 0;
})

reset2.addEventListener("click",function() {
    score1.innerText = 0;
    score2.innerText = 0;
    overLay.style.display = 'none';
})

