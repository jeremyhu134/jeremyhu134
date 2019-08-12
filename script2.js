$(document).ready(function(){
    var night = localStorage.Night;
    var Night6 = localStorage.night6;
    var cNight = localStorage.cnight;
    if(localStorage.Night >= 2){
        night = localStorage.Night;
    }
    else {
        localStorage.Night = 1;
    }
    document.getElementById("play2").innerHTML = 'Continue : Night'+night;
    if(localStorage.night6 >= 1){
        document.getElementById("play3").innerHTML = "Night6";
    }
    if(localStorage.cnight >= 1){
        document.getElementById("play4").innerHTML = "Custom Night";
    }
    $("#play").click(function(){
        localStorage.Night = 1;
        window.location.href="nightscreen.html";
    });
    $("#play2").click(function(){
            window.location.href="nightscreen.html";
    });
     $("#play3").click(function(){
            window.location.href="night6.html";
    });
    $("#play4").click(function(){
            window.location.href="select.html";
    });
});