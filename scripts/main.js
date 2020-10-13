function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}

function countDigits(a){ // FUNCTION TO COUNT DIGITS (TO HANDLE SINGLE DIGITS)
    return a.toString().length;
}

function randombg(){
    var a = randomNumber(0, 255);
    var b = randomNumber(0, 255);
    var c = randomNumber(0, 255);

    /* CODE FOR CONVERTING RGB TO HEX */
    var hex_arr=[parseInt(a).toString(16), parseInt(b).toString(16), parseInt(c).toString(16)];

    var hex="#";

    for(var i = 1;i<=3;i++){
        var len = countDigits(hex_arr[i-1]);
        if(len!=2){
            hex = hex + "0" + hex_arr[i-1].toString();
        }
        else
            hex = hex + hex_arr[i-1].toString();
    }

    var sum= a+b+c;
    var background="rgb("+ a + ", " + b + ", " + c + ")";

    console.log(hex);
    console.log(background);

    if(sum>=455){
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

function closemodal(){
    var modlist = document.querySelectorAll(".modal");
    var i;
    for (i = 0; i < modlist.length; i++) {
        modlist[i].removeAttribute("open");
    }
}