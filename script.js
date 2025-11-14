function getPrev(){
    let prev = document.querySelector(".prev-op");
    return parseInt(prev.textContent); 
}

function getCurr(){
    let curr = document.querySelector(".curr-op");
    return parseInt(curr.textContent); 
}

function handleClick(e){
    let id = e.target.id;
    switch(id){
        case "add":
            return add();
        case "subtract":
            return subtract();
        case "multiply":
            return multiply();
        case "devide":
            return devide();
    }
}

function handleKeyDown(){

}

function add(){

}

function subtract(){

}

function multiply(){

}

function devide(){

}