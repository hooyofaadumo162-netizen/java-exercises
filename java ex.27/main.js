


// Asynchronous promises

function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           const success = true;
            if(success) {
                resolve({id:6672, name:"Maria", city:"afgoe"})
            }else {
                reject("filed to fetch user data")
            }
        
        }, 4000)
    })
}


fetchUserData()
.then((data)=> console.log("user data" , data))
.catch((error)=> console.log(error))