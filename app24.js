setInterval(intervalFunc, 1000);
function intervalFunc(){
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    // var p="AM";
    var d=date.getDate();
    var mo=date.getMonth();
    var y=date.getFullYear();
    if(h===0){
        h=12;
    }
    // if(h>12){
    //     h = h - 12;
    //     p="PM";
    // }
    // h=(h<10)?`0${h}`:h;
    // m=(m<10)?`0${m}`:m;
    // s=(s<10)?`0${s}`:s;

    var text=`${h}:${m}:${s} - ${y}/${mo}/${d}`
    var clock=document.querySelector(".clock")
    clock.innerHTML=text
};