let list = []
function getError(){
    try{
        let ans = prompt("Do you have diabetes?")
        if(ans == "yes"){
            throw new ReferenceError("You cannot eat chocolates!!")
        }
        else{
            list.push("chocolates")
            document.getElementById("list").innerHTML = list
        }
    }
    catch(error){
        console.log(error.name)
        console.log(error.message)
        document.getElementById("error").innerHTML = error.name + "<br>" + error.message
    }
    finally{
      
        document.getElementById("final").innerHTML = "Hope you had fun shopping and come again!!!"
    }
}
function addVeg(){
    let item = document.getElementById("veg-btn").value
    console.log(item);
    list.push(item)
    document.getElementById("list").innerHTML = list
}
function addCheese(){
    let item = document.getElementById("cheese-btn").value
    console.log(item);
    list.push(item)
    document.getElementById("list").innerHTML = list
}