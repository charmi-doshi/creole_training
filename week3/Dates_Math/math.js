function maxMin(){
    let num1 =   document.getElementById("num-input-1").value
    let num2 =   document.getElementById("num-input-2").value
    let num3 =   document.getElementById("num-input-3").value

    let max = Math.max(num1,num2,num3)
    let min = Math.min(num1,num2,num3)
    console.log(num1,num2,num3);
    document.getElementById("output-1").innerHTML = "max is: " + max + " the min is " + min
}
function powNum(){
    let base =   document.getElementById("num-input-4").value
    let exp =   document.getElementById("num-input-5").value
    let res = Math.pow(base,exp)
    console.log(res,base,exp);
    document.getElementById("output-2").innerHTML = res 
}
function sqrtNum(){
    let root =   Number(document.getElementById("num-input-6").value)
    let res = Math.sqrt(root)
    console.log(res,root);
    document.getElementById("output-3").innerHTML = res 
}
function ceilNum(){
    let num =   Number(document.getElementById("num-input-7").value)
    let res = Math.ceil(num)
    console.log(res);
    document.getElementById("output-4").innerHTML = res 
}
function roundNum(){
    let num =   Number(document.getElementById("num-input-8").value)
    let res = Math.round(num)
    console.log(res);
    document.getElementById("output").innerHTML = res 
}
//using math.random function and floor function
function lotteryTicket(){
    let winner = 4;
    let ticketNum = Math.floor(Math.random()* 4) + 1
    console.log(ticketNum);
    document.getElementById("ticket-output").innerHTML = "Your ticket num=" + ticketNum
    
    if(ticketNum === winner){
        document.getElementById("output-5").innerHTML = "you are winner"
   
    }
    else{
        document.getElementById("output-5").innerHTML = "you lose"
   
    }

}
function sinNum(){
    let angle =   Number(document.getElementById("num-input-9").value)
    let res = Math.sin(angle)
    console.log(res);
    document.getElementById("output-9").innerHTML = res 
}
function cosNum(){
    let angle =   Number(document.getElementById("num-input-10").value)
    let res = Math.sin(angle)
    console.log(res);
    document.getElementById("output-10").innerHTML = res 
}
function tanNum(){
    let angle =   Number(document.getElementById("num-input-11").value)
    let res = Math.sin(angle)
    console.log(res);
    document.getElementById("output-11").innerHTML = res 
}