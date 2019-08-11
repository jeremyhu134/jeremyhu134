$(document).ready(function(){
    var night = localStorage.Night;
    if(localStorage.Night >= 2){
        night = localStorage.Night;
    }
    else {
        localStorage.Night = 1;
    }
    document.getElementById("play2").innerHTML = 'Continue : Night'+night;
    if(night >= 6){
        document.getElementById("play2").innerHTML = "Continue : Night5";
        document.getElementById("play3").innerHTML = "Night6";
    }
    $("#play").click(function(){
        localStorage.Night = 1;
        window.location.href="nightscreen.html";
    });
    $("#play2").click(function(){
        if(night >= 6){
            window.location.href="night5.html";
        }
        else {
            window.location.href="nightscreen.html";
        }
    });
     $("#play3").click(function(){
            window.location.href="night6.html";
    });
});