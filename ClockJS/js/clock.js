let name = prompt("İsminiz nedir?")
let nameSelector = document.querySelector("#myName")
nameSelector.innerHTML = `${name.charAt(0).toUpperCase()+name.slice(1)}`

function showTime(){
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h<10) {
        h = "0"+ h
    }
    if (m<10){
        m = "0" + m
    }
    if (s<10) {
        s = "0" + s
    }


    const time = h + ":" + m + ":" + s;
    document.getElementById("myClock").innerText = time;

    setTimeout(showTime, 1000);

}

showTime();