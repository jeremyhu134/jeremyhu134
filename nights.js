var night 
$(document).ready(function(){ 
    night = localStorage.getItem("night");
    document.getElementById("nighti").innerHTML = "NIGHT"+ night;
    setTimeout(function(){ window.location.href="night"+night+'.html';}, 3000);
});
