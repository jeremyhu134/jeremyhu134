var night 
$(document).ready(function(){ 
    night = localStorage.Night;
    document.getElementById("nighti").innerHTML = "NIGHT"+ localStorage.Night;
    night = localStorage.Night;
    setTimeout(function(){ window.location.href="night"+night+'.html';}, 3000);
});
