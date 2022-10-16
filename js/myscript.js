let ammountCLicked = 0;

function Click(){
    ammountCLicked = ammountCLicked + 1;
    document.getElementById("poop").style.display = "block" 

    if(ammountCLicked > 10){
        document.getElementById("poop").src = "img/mad.jpg"
    }
}