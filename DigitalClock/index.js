function clock(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    if(hours>12){
        hours=hours-12;
    }

    let hrs=document.getElementById("hrs");
    hrs.innerText=hours;

    let mins=document.getElementById("mins");
    mins.innerText=minutes;

    let secs=document.getElementById("secs");
    secs.innerText=seconds;
}

let date=new Date();
let hours=date.getHours();

setInterval(()=>{
    clock();
},1000)

if (hours>=12){
    let ampm=document.getElementById("ampm");
    ampm.innerText="PM";
}
else if(hours<12){
    let ampm=document.getElementById("ampm");
    ampm.innerText="AM";
}


let greeting = document.getElementById("greeting");
if (hours>12 && hours<16)
    greeting.innerText="GOOD AFTERNOON";

if(hours>=16 && hours<21)
    greeting.innerText="GOOD EVENING";

if(hours>=21 && hours<24)
    greeting.innerText="GOOD NIGHT";


let button = document.getElementById("button");
button.addEventListener('mouseover', function () {
    this.innerText = "Party Time!";  
})
button.addEventListener("mouseout", function () {
    this.innerText = "Set Alarm";
})


button.addEventListener("click", function () {
    let date = new Date();
    let hours = date.getHours();
    let wakeup = document.getElementById("wakeuptime");
    if (parseInt(wakeup.value) === hours)
    {
        document.getElementById("purple").innerText = "GRAB SOME HEALTHY BREAKFAST";
        document.getElementById("image").src="./Component 30 – 1.svg";
    }

    else if(parseInt(lunchtime.value) === hours){
        document.getElementById("purple").innerText = "LET'S HAVE SOME LUNCH";
        document.getElementById("image").src="./Component 31 – 1.svg";
    }

    else if(parseInt(nap.value) === hours){
        document.getElementById("purple").innerText = "STOP YAWNING, GET SOME TEA.. IT'S JUST EVENING!";
        document.getElementById("image").src="./lunch_image.png";
    }

    else if(parseInt(night.value) === hours){
        document.getElementById("purple").innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("image").src="./night.png";                
    }


    let timing = document.getElementsByClassName("timing");
    timing[0].innerText = wakeuptime.options[wakeuptime.selectedIndex].text;
    timing[1].innerText = lunchtime.options[lunchtime.selectedIndex].text;
    timing[2].innerText = nap.options[nap.selectedIndex].text;
    timing[3].innerText = night.options[night.selectedIndex].text;
})
