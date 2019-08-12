var bonniedif = 0;
var chicadif = 0;
var freddydif = 0;
var foxydif = 0;

function loop (){
    if(bonniedif < 0){
        bonniedif = 0;
    }
    else if(bonniedif > 20){
        bonniedif = 20;
    }
    if(chicadif < 0){
        chicadif = 0;
    }
    else if(chicadif > 20){
        chicadif = 20;
    }
    if(freddydif < 0){
        freddydif = 0;
    }
    else if(freddydif > 20){
        freddydif = 20;
    }
    if(foxydif < 0){
        foxydif = 0;
    }
    else if(foxydif > 20){
        foxydif = 20;
    }
    document.getElementById("a1").innerHTML ="<";
    document.getElementById("a3").innerHTML ="<";
    document.getElementById("a5").innerHTML ="<";
    document.getElementById("a7").innerHTML ="<";
    document.getElementById("a2").innerHTML =">";
    document.getElementById("a4").innerHTML =">";
    document.getElementById("a6").innerHTML =">";
    document.getElementById("a8").innerHTML =">";
    document.getElementById("bonnied").innerHTML = bonniedif;
    document.getElementById("chicad").innerHTML = chicadif;
    document.getElementById("freddyd").innerHTML = freddydif;
    document.getElementById("foxyd").innerHTML = foxydif;
    localStorage.bonnied = bonniedif;
    localStorage.chicad = chicadif;
    localStorage.freddyd = freddydif;
    localStorage.foxyd = foxydif;
}

$(document).ready(function(){
    setInterval(loop,1);
    $("#a1").click(function(){
        bonniedif = bonniedif - 1;
    });
    $("#a2").click(function(){
        bonniedif = bonniedif + 1;
    });
    $("#a3").click(function(){
        chicadif = chicadif - 1;
    });
    $("#a4").click(function(){
        chicadif = chicadif + 1;
    });
    $("#a5").click(function(){
        freddydif = freddydif - 1;
    });
    $("#a6").click(function(){
        freddydif = freddydif + 1;
    });
    $("#a7").click(function(){
        foxydif = foxydif - 1;
    });
    $("#a8").click(function(){
        foxydif = foxydif + 1;
    });
    $("#go").click(function(){
        window.location.href ="customnight.html";
    });
});