var final_hex;

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

    final_hex=hex;
    console.log(final_hex);

    document.getElementById("hex").innerHTML=hex + "<span>Click to copy Hex Code</span>";

    if(sum>=455){
        var bglist = document.querySelectorAll(".rand_back");
        var i;
        for (i = 0; i < bglist.length; i++) {
            bglist[i].style.color = ("#1e1e1e");
        }
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

function copy(){
    document.getElementById("snackbar").style.display=("block");
    const el = document.createElement('textarea');
    el.value = final_hex;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    console.log("copied to clipboard");
    setTimeout(hidesnack, 2000);
}

function hidesnack(){
    document.getElementById("snackbar").style.display=("none");
}