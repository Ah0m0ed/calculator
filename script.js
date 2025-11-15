function getPrev(){
    let prev = document.querySelector(".prev-op");
    return parseInt(prev.textContent); 
}

function getCurr(){
    let curr = document.querySelector(".curr-op");
    return parseInt(curr.textContent); 
}

function setPrev(string){
    let prev = document.querySelector(".prev-op");
    if(prev.textContent == "0"){
        prev.textContent = `${string}`;
    }else{
        prev.textContent += `${string}`;
    }
}

function setCurr(string){
    let curr = document.querySelector(".curr-op");
    if(curr.textContent == "0"){
        curr.textContent = `${string}`;
    }else{
        curr.textContent += `${string}`;
    }
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
        case "reset":
            return reset();
        case "del":
            return del();
        case "equal":
            return calc();
        case "decimal":
            return decimal();
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

function calc(){

}

function reset(){

}

function del(){

}

function decimal(){

}