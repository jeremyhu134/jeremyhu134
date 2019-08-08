var leftdoor = 0;
var rightdoor = 0;
var leftlight = 0;
var rightlight = 0;
var cameraframe = 5;
var goldenfreddy = Math.floor((Math.random() * 7) + 1);
var leftdoorc = 0;
var rightdoorc = 0;
var time = 0;
var hour = 12;
var gfmovetime = Math.floor((Math.random() * 100) + 400);
var power = 100;
var time = 0;
var powertick = 10000;
var usage = 8;
var afktimer = 3000;
var ambiance = new Audio("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/c/cb/EerieAmbienceLargeSca_MV005.ogg/revision/latest?cb=20140914062801");
var stomp = new Audio("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/9/9f/Running_fast3.ogg/revision/latest?cb=20140914064730");
var stomp2 = new Audio("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/3/3c/Deep_steps.ogg/revision/latest?cb=20140914062533");
var camflip = new Audio("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/f/f0/Blip3.ogg/revision/latest?cb=20140914223121");
var flaugh = new Audio("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/b/ba/Laugh_Giggle_Girl_1d.ogg/revision/latest?cb=20140914224119");
var door = new Audio("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/e/e1/SFXBible_12478.ogg/revision/latest?cb=20140912033845");
var light = new Audio("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/8/8d/BallastHumMedium2.ogg/revision/latest?cb=20140916035255");
var gflaugh = new Audio("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/0/0e/Laugh_Giggle_Girl_1.ogg/revision/latest?cb=20141102221206");
var surprise = new Audio("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/d/d6/Windowscare.ogg/revision/latest?cb=20140914065642");
var running = new Audio("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/0/06/Run.ogg/revision/latest?cb=20140914064651");
var banging = new Audio("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/9/95/Knock2.ogg/revision/latest?cb=20140914063210"); 
var scream = new Audio("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/a/a7/XSCREAM.ogg/revision/latest?cb=20140826011759"); 

function check(){
        if(goldenfreddy === 5 ){
            goldenfreddy = Math.floor((Math.random() * 7) + 1);
        }
        if(goldenfreddy === 3){
            goldenfreddy = Math.floor((Math.random() * 7) + 1);
        }
        if(goldenfreddy === 4){
           goldenfreddy = Math.floor((Math.random() * 7) + 1);
        }
        if(rightdoor === 0 && leftdoor === 0){
            afktimer = 3000;
        }
        if(rightlight === 1){
            document.getElementById("rightwindi").src = "https://piskel-imgstore-b.appspot.com/img/6eac6847-b19c-11e9-98c9-a5b17c2fd748.gif";
            if(chica === 0){
                document.getElementById("rightwindi").src = "https://piskel-imgstore-b.appspot.com/img/9cb97a19-b33a-11e9-960d-4dae3e574221.gif";
            }
        }
        if(leftlight === 1){
            document.getElementById("leftwindi").src = "https://piskel-imgstore-b.appspot.com/img/6eac6847-b19c-11e9-98c9-a5b17c2fd748.gif";
            if(bonnie === 0){
                document.getElementById("leftwindi").src = "https://piskel-imgstore-b.appspot.com/img/dab0742b-b30d-11e9-a42e-87a42244a9f6.gif";
            }
        }
        if(rightlight === 0){
            document.getElementById("rightwindi").src = "https://piskel-imgstore-b.appspot.com/img/47570f94-b19c-11e9-a7e8-a5b17c2fd748.gif";
        }
        if (leftlight === 0){
            document.getElementById("leftwindi").src = "https://piskel-imgstore-b.appspot.com/img/47570f94-b19c-11e9-a7e8-a5b17c2fd748.gif";
        }
        if(rightdoor === 1){
            document.getElementById("rightdoori").src = "https://piskel-imgstore-b.appspot.com/img/7c4d5168-b20f-11e9-ae3c-97cb857b2b4c.gif";
        }
        if (rightdoor === 0 && rightlight === 1){
            document.getElementById("rightdoori").src = "https://piskel-imgstore-b.appspot.com/img/fc2f3f26-b3a2-11e9-95a0-d130fbaa4938.gif";
        }
        else if(rightdoor === 0){
            document.getElementById("rightdoori").src = "https://piskel-imgstore-b.appspot.com/img/326f8dd7-b20f-11e9-a5ec-97cb857b2b4c.gif";
        }
        if(leftdoor === 1){
            document.getElementById("leftdoori").src = "https://piskel-imgstore-b.appspot.com/img/7c4d5168-b20f-11e9-ae3c-97cb857b2b4c.gif";
        }
        if(leftdoor === 0 && leftlight === 1){
            document.getElementById("leftdoori").src = "https://piskel-imgstore-b.appspot.com/img/35b6e7d7-b3a2-11e9-a644-d130fbaa4938.gif";
        }
        else if(leftdoor === 0){
            document.getElementById("leftdoori").src = "https://piskel-imgstore-b.appspot.com/img/326f8dd7-b20f-11e9-a5ec-97cb857b2b4c.gif";
        }
        if(cameraframe === 1){
            if(goldenfreddy !== 1){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/ff9a43f0-b214-11e9-aacb-d1308dec92ff.gif";
            }
            else if(goldenfreddy === 1){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/7879206b-b6d2-11e9-97b2-2b2a992f762c.gif";
            }
        }
        else if(cameraframe === 2){
            if(goldenfreddy !== 2){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/c8e1e51e-b213-11e9-b9e5-d1308dec92ff.gif";
            }
            else if(goldenfreddy === 2){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/44119a33-b6d2-11e9-a8e1-2b2a992f762c.gif";
            }
        }
        else if(cameraframe === 3){
            if(goldenfreddy !== 3){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/3ff36451-b601-11e9-9a21-f33c2dce5569.gif";
            }
        }
        else if(cameraframe === 4){
            if(goldenfreddy !== 4){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/de0e93c7-b601-11e9-b0df-f33c2dce5569.gif";
            }
        }
        else if(cameraframe === 5){
            if(goldenfreddy !== 5){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/653d97f8-b216-11e9-b075-d1308dec92ff.gif";
            }
        }
        else if(cameraframe === 6){
            if(goldenfreddy !== 6){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/e6c8874c-b219-11e9-9c98-d1308dec92ff.gif";
            }
            else if(goldenfreddy === 6){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/e00e78b5-b6d1-11e9-8470-2b2a992f762c.gif";
            }
        }
        else if(cameraframe === 7){
            if(goldenfreddy !== 7){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/548dd0fd-b215-11e9-917c-d1308dec92ff.gif";
            }
            else if(goldenfreddy === 7){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/bde9d4ba-b6d1-11e9-ada0-2b2a992f762c.gif";
            }
        }
        else if(cameraframe === 8){
            if(goldenfreddy !== 8){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/6a265b02-b3a8-11e9-bfdb-01f3b87b8ac1.gif";
            }
            else if(goldenfreddy === 8){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/73935c23-b6d1-11e9-8428-2b2a992f762c.gif";
            }
        }
        if(power <= 0){
            document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/a00b96f8-b524-11e9-9ad3-99af567a897a.gif";
            document.getElementById("cami2").src = "https://piskel-imgstore-b.appspot.com/img/a00b96f8-b524-11e9-9ad3-99af567a897a.gif";
        }
    }

function movement(){
        gfmovetime = gfmovetime - 1;
        if(gfmovetime <= 0){
           if(goldenfreddy === 3){
               gflaugh.play();
               gfmovetime = Math.floor((Math.random() * 100) + 500);
               goldenfreddy = 2;
           }
           else if(goldenfreddy === 2){
               gflaugh.play();
               gfmovetime = Math.floor((Math.random() * 100) + 500);
               goldenfreddy = 1;
           }
           else if(goldenfreddy === 1){
               gflaugh.play();
               gfmovetime = Math.floor((Math.random() * 500) + 500);
               goldenfreddy = 0;
           }
           if (goldenfreddy === 0 && leftdoor === 0){
               window.location.href="lose.html";
           }
           else if(goldenfreddy === 0){
               gflaugh.play();
               goldenfreddy = Math.floor((Math.random() * 7) + 1);
           }
           else if(goldenfreddy === 6){
               gflaugh.play();
               gfmovetime = Math.floor((Math.random() * 100) + 500);
               goldenfreddy = 7;
           }
           else if(goldenfreddy === 7){
               gflaugh.play();
               gfmovetime = Math.floor((Math.random() * 100) + 500);
               goldenfreddy = 8;
           }
           else if(goldenfreddy === 8){
               gflaugh.play();
               gfmovetime = Math.floor((Math.random() * 500) + 500);
               goldenfreddy = 9;
           }
           if (goldenfreddy === 9 && rightdoor === 0){
               window.location.href="lose.html";
           }
           else if(goldenfreddy === 9){
               gflaugh.play();
               goldenfreddy = Math.floor((Math.random() * 7) + 1);
           }
        }
    }

function timecheck(){
        time = time + 1;
        if(hour === 6){
            window.location.href="win.html";
        }
        if(time === 6000){
            hour = 1;
            document.getElementById("timei").innerHTML = "PM : "+ hour;
        }
        if(time === 12000){
            hour = 2;
            document.getElementById("timei").innerHTML = "PM : "+ hour;
        }
        if(time === 18000){
            hour = 3;
            document.getElementById("timei").innerHTML = "PM : "+ hour;
        }
        if(time === 24000){
            hour = 4;
            document.getElementById("timei").innerHTML = "PM : "+ hour;
        }
        if(time === 30000){
            hour = 5;
            document.getElementById("timei").innerHTML = "PM : "+ hour;
        }
        if(time === 36000){
            hour = 6;
            document.getElementById("timei").innerHTML = "PM : "+ hour;
        }
    }

function afkcheck(){
        afktimer = afktimer - 1;
        if(afktimer <= 0){
            power = power - 10;
            afktimer = 2000;
        }
    }

function powercheck(){
    if(power > 0 && ambiance.currentTime >= 114){
        ambiance.currentTime = 0;
        ambiance.play();
    }
    document.getElementById("poweri").innerHTML = "POWER : "+ power +'%';
    powertick = powertick - usage;
    if (powertick <= 0){
        power = power - 1;
        powertick = 10000;
    }
    if(power <= 0){
        ambiance.pause();
        power = 0;
        leftdoor = 0;
        leftlight = 0;
        rightdoor = 0;
        rightlight = 0;
    }
}

$(document).ready(function(){ 
    ambiance.play();
    document.getElementById("timei").innerHTML = "PM : "+ hour;
    document.getElementById("poweri").innerHTML = "POWER : "+ power +'%';
    setInterval(timecheck,10);
    setInterval(check,1);
    setInterval(movement,10);
    setInterval(powercheck,1);
    setInterval(afkcheck, 10);
    $("#closeleftdoor").click(function(){
        if(leftdoor === 0 && power > 0){
            door.currentTime = 0;
            door.play();
            power= power - 1;
            usage = usage + 3;
            leftdoor = 1;
            usage = usage + 1;
            afktimer = 3000;
        }
        else if(leftdoor === 1){
            door.currentTime = 0;
            door.play();
            leftdoor = 0;
            usage = usage - 3;
            afktimer = 3000;
        }
    }); 
    $("#closerightdoor").click(function(){
        if(rightdoor === 0 && power > 0){
            door.currentTime = 0;
            door.play();
            power = power - 1;
            rightdoor = 1;
            usage = usage + 3;
            afktimer = 3000;
        }
        else if(rightdoor === 1){
            door.currentTime = 0;
            door.play();
            rightdoor = 0;
            usage = usage - 3;
            afktimer = 3000;
        }
    }); 
    $("#closerightlight").click(function(){
        if(rightlight === 0 && power > 0){
            light.play();
            powertick = powertick - 5000;
            rightlight = 1;
            leftlight = 0;
            usage = usage + 1;
            afktimer = 3000;
        }
        else if(rightlight === 1){
            light.currentTime = 0;
            light.pause();
            rightlight = 0;
            usage = usage - 1;
            afktimer = 3000;
        }
        if(rightlight === 1 && chica === 0){
            surprise.currentTime = 0;
            surprise.play();
        }
    }); 
    $("#closeleftlight").click(function(){
        if(leftlight === 0 && power > 0){
            light.play();
            powertick = powertick - 5000;
            leftlight = 1;
            rightlight = 0;
            usage = usage + 1;
            afktimer = 3000;
        }
        else if(leftlight === 1){
            light.currentTime = 0;
            light.pause();
            leftlight = 0;
            usage = usage - 1;
            afktimer = 3000;
        }
        if(leftlight === 1 && bonnie === 0){
            surprise.currentTime = 0;
            surprise.play();
        }
    }); 
    
    $("#cam1").click(function(){
        cameraframe = 1;
        powertick = powertick - 1000
        afktimer = 3000;
        camflip.play();
    }); 
    $("#cam2").click(function(){
        cameraframe = 2;
        powertick = powertick - 1000
        afktimer = 3000;
        camflip.play();
    }); 
    $("#cam3").click(function(){
        cameraframe = 3;
        powertick = powertick - 1000
        afktimer = 3000;
        camflip.play();
    }); 
    $("#cam4").click(function(){
        cameraframe = 4;
        powertick = powertick - 1000
        afktimer = 3000;
        camflip.play();
    }); 
    $("#cam5").click(function(){
        cameraframe = 5;
        powertick = powertick - 1000
        afktimer = 3000;
        camflip.play();
    }); 
    $("#cam6").click(function(){
        cameraframe = 6;
        powertick = powertick - 1000
        afktimer = 3000;
        camflip.play();
    }); 
    $("#cam7").click(function(){
        cameraframe = 7;
        powertick = powertick - 1000
        afktimer = 3000;
        camflip.play();
    }); 
    $("#cam8").click(function(){
        cameraframe = 8;
        powertick = powertick - 1000
        afktimer = 3000;
        camflip.play();
    }); 
});
