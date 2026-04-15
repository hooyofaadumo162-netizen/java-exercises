

// synchronous- blocking

function fetchUserDataSync(){
    alert ("fetch user deta");
    return user = {id:2, name:"maria"}
}

console.log("starting fetching data")

const user = fetchUserDataSync();

console.log("this massage is blocked untill user data is fetched")






// asynchronous-non blocking

function getUserData(callback){
    setTimeout(() =>{
        const user = {id:11, name:"mara"};
        callback(user)
    }, 4000)
}

getUserData(function(user){
    console.log(user)
});