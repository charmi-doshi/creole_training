let arr = ["Lambhorghini","Porsche","Supra","Bugatti"]
const fruits = ["mango","watermelon","apple"]
const vegetables = ["carrot","cucumber","cabbage"]
const color = ["blue","green","red"]
const flowers = ["rose","lily","tulip","lotus","sunflower"]

function display(){
    forEa
}
function arrLength(){
     length = arr.length
     document.getElementById('output--1').innerHTML = length;
}
function arrPush(str){
    arr.push(str)
    document.getElementById('output--2').innerHTML = arr;
    console.log(arr)
}
function arrUnshift(str){
    arr.unshift(str)
    document.getElementById('output--3').innerHTML = arr;
    console.log(arr)
}
function arrPop(){
    arr.pop()
    document.getElementById('output--4').innerHTML = arr;
}
function arrShift(){
    arr.shift()
    document.getElementById('output--5').innerHTML = arr;
    console.log(arr)
}

function fruitConcat(){
    const res = fruits.concat(vegetables,color)
    document.getElementById('output--6').innerHTML = res;
    
}
function arrConcat(arr1,arr2){
    const res = fruits.concat(arr1,arr2)
    document.getElementById('output--6').innerHTML = res;
    console.log(res,arr1,arr2)
}
function arrSplice(){
    start= document.getElementById('input-num--2').value;
    num= document.getElementById('input-num--3').value;
    element1= document.getElementById('input-txt--2').value;
    element2= document.getElementById('input-txt--3').value;

    let res = flowers.splice(start,num,element1,element2)
    document.getElementById('output--7').innerHTML = "removed elements: " + res;
    console.log(res,flowers)
}
function arrSlice(){
    start= document.getElementById('input-num--4').value;
    end= document.getElementById('input-num--5').value;
    

    let res = flowers.slice(start,end)
    document.getElementById('output--8').innerHTML = "elements: " + res;
    console.log(res,flowers)
}