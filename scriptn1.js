var leftdoor = 0;
var rightdoor = 0;
var leftlight = 0;
var rightlight = 0;
var cameraframe = 5;
var bonnie = 5;
var chica = 5;
var freddy = 5;
var foxy = 5;
var leftdoorc = 0;
var rightdoorc = 0;
var time = 0;
var hour = 12;
var bmovetime = Math.floor((Math.random() * 500) + 1000);
var cmovetime = Math.floor((Math.random() * 500) + 1000);
var fmovetime = Math.floor((Math.random() * 500) + 1000);
var fxmovetime = Math.floor((Math.random() * 500) + 1000);
var power = 100;
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
var phone = new Audio("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/6/68/Voiceover1c.ogg/revision/latest?cb=20140825044745");
var surprise = new Audio("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/d/d6/Windowscare.ogg/revision/latest?cb=20140914065642");

function check(){
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
            if(bonnie !== 1){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/ff9a43f0-b214-11e9-aacb-d1308dec92ff.gif";
            }
            else if(bonnie === 1){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/830ed3ca-b311-11e9-9ca2-87a42244a9f6.gif";
            }
        }
        else if(cameraframe === 2){
            if(bonnie !== 2){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/c8e1e51e-b213-11e9-b9e5-d1308dec92ff.gif";
            }
            else if(bonnie === 2){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/98af6ae1-b30f-11e9-9be9-87a42244a9f6.gif";
            }
        }
        else if(cameraframe === 3){
            if(bonnie !== 3){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/3ff36451-b601-11e9-9a21-f33c2dce5569.gif";
            }
            else if(bonnie === 3){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/d2b1105e-b600-11e9-96c7-f33c2dce5569.gif";
            }
        }
        else if(cameraframe === 4){
            if(foxy === 5){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/de0e93c7-b601-11e9-b0df-f33c2dce5569.gif";
            }
        }
        else if(cameraframe === 5){
            if(bonnie !== 5 && chica !== 5 && freddy !== 5){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/653d97f8-b216-11e9-b075-d1308dec92ff.gif";
            }
            else if(bonnie !== 5 && chica === 5 && freddy === 5){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/952b73f5-b32c-11e9-aacd-6fdf361753ed.gif";
            }
            else if(bonnie !== 5 && chica !== 5 && freddy === 5){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/e0dd7c9e-b337-11e9-b80f-6fdf361753ed.gif";
            }
            else if(bonnie === 5 && chica === 5 && freddy === 5){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/811c4dd4-b338-11e9-881b-6fdf361753ed.gif";
            }
            else if(bonnie === 5 && chica !== 5 && freddy === 5){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/f59f7b91-b338-11e9-afa1-4dae3e574221.gif";
            }
            else if(bonnie === 5 && chica !== 5 && freddy !== 5){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/70e511d7-b3d2-11e9-bac0-e3d3320a1fcd.gif";
            }
            else if(bonnie === 5 && chica === 5 && freddy !== 5){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/a5180cab-b48a-11e9-9ab7-f79dc0cf6ef0.gif";
            }
            else if(bonnie !== 5 && chica === 5 && freddy !== 5){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/ed7d1905-b48a-11e9-8161-f79dc0cf6ef0.gif";
            }
        }
        else if(cameraframe === 6){
            if(chica !== 6 && freddy !== 6){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/e6c8874c-b219-11e9-9c98-d1308dec92ff.gif";
            }
            else if(chica === 6 && freddy !== 6){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/7bbdda51-b3a0-11e9-8396-d130fbaa4938.gif";
            }
            else if(chica === 6 && freddy === 6){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/5d182d85-b489-11e9-901b-f79dc0cf6ef0.gif";
            }
            else if(chica !== 6 && freddy === 6){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/d638c1e1-b489-11e9-b60b-f79dc0cf6ef0.gif";
            }
        }
        else if(cameraframe === 7){
            if(chica !== 7 && freddy !== 7){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/548dd0fd-b215-11e9-917c-d1308dec92ff.gif";
            }
            else if(chica === 7 && freddy !== 7){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/e692fefa-b3a7-11e9-9cc4-01f3b87b8ac1.gif";
            }
            else if(chica !== 7 && freddy === 7){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/6ff286a3-b48c-11e9-b318-f79dc0cf6ef0.gif";
            }
            else if(chica === 7 && freddy === 7){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/e692fefa-b3a7-11e9-9cc4-01f3b87b8ac1.gif";
            }
        }
        else if(cameraframe === 8){
            if(chica !== 8 && freddy !== 8){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/6a265b02-b3a8-11e9-bfdb-01f3b87b8ac1.gif";
            }
            else if(chica === 8 && freddy !== 8){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/092e7d7a-b3ad-11e9-81c0-01f3b87b8ac1.gif";
            }
            else if(chica !== 8 && freddy === 8){
                document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/b449d978-b48d-11e9-9127-f79dc0cf6ef0.gif";
            }
        }
        if(power <= 0){
            document.getElementById("cami").src = "https://piskel-imgstore-b.appspot.com/img/a00b96f8-b524-11e9-9ad3-99af567a897a.gif";
            
        }
    }

function death(){
    if(chica === 0 && rightdoor === 0 && cmovetime <= 0){
        bmovetime = 10000;
        fxmovetime = 10000;
        fmovetime = 10000;
        cmovetime = 10000;
        document.getElementById("jumpscare").src = "https://piskel-imgstore-b.appspot.com/img/b385070a-b96e-11e9-9d2d-3f992b73fc18.gif";
        window.location.href="#top";
        scream.play();
        setTimeout(function(){ window.location.href="lose.html"; }, 3000);
    }
    else if(bonnie === 0 && leftdoor === 0 && bmovetime <= 0){
        bmovetime = 10000;
        fxmovetime = 10000;
        fmovetime = 10000;
        cmovetime = 10000;
        document.getElementById("jumpscare").src = "https://piskel-imgstore-b.appspot.com/img/8f57e380-b97e-11e9-bbe6-e52c4113b4ff.gif";
        window.location.href="#top";
        scream.play();
        setTimeout(function(){ window.location.href="lose.html"; }, 3000);
    }
    else if(freddy === 8 && rightdoordoor === 0 && fmovetime <= 0){
        bmovetime = 10000;
        fxmovetime = 10000;
        fmovetime = 10000;
        cmovetime = 10000;
        document.getElementById("jumpscare").src = "https://piskel-imgstore-b.appspot.com/img/ed72fccc-b981-11e9-80b6-e52c4113b4ff.gif";
        window.location.href="#top";
        scream.play();
        setTimeout(function(){ window.location.href="lose.html"; }, 3000);
    }
}

function movement(){
        bmovetime = bmovetime - 1;
        if(bmovetime <= 0 && hour !== 12 && hour >= 3){
           if(bonnie === 5){
               bonnie = 3;
               bmovetime = Math.floor((Math.random() * 3000) + 3000);
           }
           else if(bonnie === 3){
               bonnie = 2;
               bmovetime = Math.floor((Math.random() * 3000) + 3000);
           }
           else if(bonnie === 2){
               bonnie = 1;
               bmovetime = Math.floor((Math.random() * 3000) + 3000);
           }
           else if(bonnie === 1){
               stomp.play();
               leftlight = 0;
               bonnie = 0;
               bmovetime = Math.floor((Math.random() * 300) + 3000);
           }
           else if (bonnie === 0 && leftdoor === 0){
               death();
           }
           else if(bonnie === 0){
               leftlight = 0;
               stomp.play();
               bonnie = 5;
               bmovetime = Math.floor((Math.random() * 3500) + 3500);
           }
        }
        if(cmovetime <= 0 && hour !== 12){
           if(chica === 5){
               chica = 6;
               cmovetime = Math.floor((Math.random() * 2500) + 500);
           }
           else if(chica === 6){
               chica = 7;
               cmovetime = Math.floor((Math.random() * 2500) + 500);
           }
           else if(chica === 7){
               chica = 8;
               cmovetime = Math.floor((Math.random() * 2500) + 500);
           }
           else if(chica === 8){
               stomp.play();
               rightlight = 0;
               chica = 0;
               cmovetime = Math.floor((Math.random() * 2500) + 500);
           }
           else if (chica === 0 && rightdoor === 0){
               death();
           }
           else if(chica === 0){
               stomp.play();
               rightlight = 0;
               chica = 5;
               cmovetime = Math.floor((Math.random() * 2500) + 500);
           }
        }
        if(fmovetime <= 0 && hour >= 3 && hour!== 12){
           if(freddy === 5){
               freddy = 6;
               flaugh.play();
               fmovetime = Math.floor((Math.random() * 3000) + 500);
           }
           else if(freddy === 6){
               freddy = 7;
               flaugh.play()
               fmovetime = Math.floor((Math.random() * 3000) + 500);
           }
           else if(freddy === 7 && chica !== 8){
               freddy = 8;
               flaugh.play()
               fmovetime = Math.floor((Math.random() * 3000) + 500);
           }
           else if (freddy === 8 && rightdoor === 0){
               death();
           }
           else if(freddy === 8){
               rightlight = 0;
               flaugh.play()
               freddy = 5;
               fmovetime = Math.floor((Math.random() * 3500) + 500);
           }
        }
    }

function timecheck(){
        time = time + 1;
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
            night = 2;
            localStorage.setItem("night", night);
            window.location.href="win.html";
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
        phone.pause();
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
    phone.play();
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
            leftdoor = 1;
            usage = usage + 2;
            afktimer = 3000;
        }
        else if(leftdoor === 1){
            door.currentTime = 0;
            door.play();
            leftdoor = 0;
            usage = usage - 2;
            afktimer = 3000;
        }
    }); 
    $("#closerightdoor").click(function(){
        if(rightdoor === 0 && power > 0){
            door.currentTime = 0;
            door.play();
            rightdoor = 1;
            usage = usage + 2;
            afktimer = 3000;
        }
        else if(rightdoor === 1){
            door.currentTime = 0;
            door.play();
            rightdoor = 0;
            usage = usage - 2;
            afktimer = 3000;
        }
    }); 
    $("#closerightlight").click(function(){
        if(rightlight === 0 && power > 0){
            light.play();
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
