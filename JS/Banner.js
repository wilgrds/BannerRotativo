window.load = slide(1);

var numImg = 1; 

function slide(n) {
    var todasImagens = 3;
    document.getElementById('imagens').style.backgroundImage = "url('img/Banner"+n+".jpg')"; 
    botoes(n, todasImagens);   
}

function volta() {
    if(numImg > 1) {
        numImg = numImg - 1;
        slide(numImg);
    }
}

function vai() {
    if (numImg < 3) {
        numImg = numImg + 1;
        slide(numImg);
    }
}
function botoes(n, m) {
    document.getElementById('botoes').innerHTML = "";
    for(a = 1;a<=m;a++){
        if(a==n){
            document.getElementById('botoes').innerHTML += "<li class='selected' onclick='slide("+a+")'> </li>";
        }else{
            document.getElementById('botoes').innerHTML += "<li onclick='slide("+a+")'></li>";
        }
    }
}