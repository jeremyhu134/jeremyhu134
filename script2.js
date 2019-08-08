$(document).ready(function(){
    var night = 1;
    if(localStorage.getItem("night") >= 2){
        night = localStorage.getItem("night");
    }
    else {
        night = 1;
        localStorage.setItem("night", night);
    }
    night = localStorage.getItem("night");
    document.getElementById("play2").textContent = 'Continue : Night'+night;
    $("#play").click(function(){
        night = 1;
        localStorage.setItem("night", 1);
        window.location.href="nightscreen.html";
    });
    $("#play2").click(function(){
        localStorage.setItem("night", night);
        window.location.href="nightscreen.html";
    });
});