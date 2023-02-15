//Date object
const date = new Date()
function currentDate(){
    console.log(date)
    document.getElementById("output").innerHTML = date
}
function getDay(){
   
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

function custom(){
    let date1 = new Date() 
    let year =   document.getElementById("year-input").value
    let month =   Number(document.getElementById("month-input").value) -1
    let d =   document.getElementById("date-input").value
    date1.setFullYear(document.getElementById("year-input").value);
    date1.setMonth(month)
    date1.setDate(d)
    console.log(year,month,d,date1);
    document.getElementById("year-output").innerHTML = "your ouput is: "+ date1
}