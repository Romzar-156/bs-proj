var numberOfElements = 4;
var index = 1;
var sliderImg = document.querySelector("#slider").querySelector("img");

function slideToLeft(){
    var opacity = 0;
    if(index==1){
        index = numberOfElements;
    }
    else{
        --index;
    }
    
    var timer = setInterval(function() {
        if (opacity>=1){
            clearInterval(timer);
        }
        else {
            opacity+=0.1;
            sliderImg.style.opacity = opacity;
        }
      }, 1000 / 50);
    sliderImg.src = "img/slider/"+index+".jpg";
}

function slideToRight(){
    var opacity = 0;
    index = (index%numberOfElements)+1;
    var timer = setInterval(function() {
        if (opacity>=1){
            clearInterval(timer);
        }
        else {
            opacity+=0.1;
            sliderImg.style.opacity = opacity;  
        }
      }, 1000 / 50);
    sliderImg.src = "img/slider/"+index+".jpg";
}