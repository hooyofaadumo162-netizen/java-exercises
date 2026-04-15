

// json real fetch

async function displayUserdata(){
    console.log("start fecth user data")

    const response = await fetch('https://jsonplaceholder.typicode.com/photos')

    const data = await response.json();
    
    console.log("response:", response)
}
displayUserdata()
