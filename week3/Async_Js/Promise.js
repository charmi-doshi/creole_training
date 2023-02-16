//promise
//weather
function getPromise(){
let p = new Promise((resolve,reject)=>{
    document.getElementById("promise-output").innerHTML = "pending"
    setTimeout(()=>resolve("Promise resolved"),2000)
})
let p1 = new Promise((resolve,reject)=>{
    document.getElementById("promise1-output").innerHTML = "pending promise1";

    reject(new Error("404 Something went wrong!"))
})
p.then(
    (value)=>{
        console.log(value);
    document.getElementById("promise-output").innerHTML = value;
});
p1.then(
    (error)=>{
        console.log(error);
        document.getElementById("promise1-output").innerHTML = error;
    }
)}