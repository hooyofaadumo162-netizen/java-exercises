
            // promises

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


async function displayUserData(){
    try{
        const user = await fetchUserData()
        console.log(user)
    }catch(errer){
        console.log(errar)
    }
}

displayUserData()



