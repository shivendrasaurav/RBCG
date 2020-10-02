function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}

function randombg(){
    var a = randomNumber(0, 255);
    var b = randomNumber(0, 255);
    var c = randomNumber(0, 255);
    var sum= a+b+c;
    var background="rgb("+ a + ", " + b + ", " + c + ")";

    if(sum>=382.5){
        var bglist = document.querySelectorAll(".rand_back");
        var i;
        for (i = 0; i < bglist.length; i++) {
            bglist[i].style.color = ("#1e1e1e");
        }
        document.getElementById("button").style.boxShadow=("5px 5px 15px #acacacaa");
    }
    else{
        var bglist = document.querySelectorAll(".rand_back");
        var i;
        for (i = 0; i < bglist.length; i++) {
            bglist[i].style.color = ("#fcfcfc");
        }    
    }

    var bglist = document.querySelectorAll(".rand_back");
    var i;
    for (i = 0; i < bglist.length; i++) {
        bglist[i].style.backgroundColor = background;
    }
}