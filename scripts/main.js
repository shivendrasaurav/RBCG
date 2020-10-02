function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}

function randombg(){
    var a = randomNumber(0, 255);
    var b = randomNumber(0, 255);
    var c = randomNumber(0, 255);
    var halfsum= (a+b+c)/2;
    console.log(halfsum);
    if(halfsum>=325){
        document.getElementById("bg").style.color=("#1e1e1e");
        document.getElementById("button").style.boxShadow=("5px 5px 15px #acacacaa");
    }
    else{
        document.getElementById("bg").style.color=("#fcfcfc");
    }
    var background="rgb("+ a + ", " + b + ", " + c + ")"
    console.log(background);
    document.getElementById("bg").style.backgroundColor=background;
}