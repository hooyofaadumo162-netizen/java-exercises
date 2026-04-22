





// adding newItem into DOM d.page
const list = document.querySelector('#list')

function addList(){
    const midKaleCusub = document.createElement('li')
    midKaleCusub.textContent = `Super Mario`
    list.appendChild(midKaleCusub)
}


// removing

function removeList(){
    if(list.lastChild){
        list.removeChild(list.lastChild)
    }else {
        alert("Ka Dhamaw Hee Wax Kale Oo Latiro Malehee")
    }
}