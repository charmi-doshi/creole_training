//Date object
const date = new Date()
function currentDate(){
    document.getElementById("output").innerHTML = date
}
function day(){
   
    day = date.getDay()

    switch(day){
        case 1: dayName =  "Monday" 
                break;
                case 2: dayName =  "Tuesday" 
                break;
                case 3: dayName =  "Wednesday" 
                break;
                case 4: dayName =  "Thursday" 
                break;
                case 5: dayName =  "Friday" 
                break;
                case 6: dayName = "Saturday" 
                break;
                case 7: dayName =  "Sunday" 
                break;
     
    }
    document.getElementById("output").innerHTML = dayName
}
function year(){
    document.getElementById("output").innerHTML =date.getFullYear()
}
function month(){
    document.getElementById("output").innerHTML = date.getMonth()+1
}
function time(){
    document.getElementById("output").innerHTML = date.getTime() + " milliseconds"
}
function hour(){
    document.getElementById("output").innerHTML = date.getHours()
}
function minute(){
    document.getElementById("output").innerHTML = date.getMinutes()
}
function seconds(){
    document.getElementById("output").innerHTML = date.getSeconds()
}