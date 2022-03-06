var sendBtn = document.getElementById('send'); 
var select = document.getElementById('select')
var list = document.querySelector('#array_elements');
var sortBtn = document.getElementById('sort');
var size = 0;
var array = [];

select.addEventListener('change', ()=>{
    size = select.value;
})

sendBtn.addEventListener('click', ()=>{
    if(size === 0){
        alert('Elija una opcion.');
    }else{
        fillArray(array);
        createLi(array);
    }
}); 

sortBtn.addEventListener('click', ()=>{
    if(array.length === 0){
        alert('Crea un array primero. ')
    }else{
        sortLi(array);
    }
});

function random(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function createLi(arr){
    list.innerHTML = "";
    createContainer();
    for(let i = 0; i<arr.length; i++){
        list.innerHTML += `<li id="element" class="animate__animated animate__wobble"><a>${arr[i]}</a></li>`;
    }
}

function createContainer(){
    list.className += "animate__animated animate__backInLeft";
}

function fillArray(arr){
    arr.splice(0, arr.length); // Limpiamos el arreglo
    for(let i = 0; i<size; i++){
        arr.push(random(0, 500));
    }
}

function sortLi(arr){
    list.innerHTML = "";
    let sortedArray = bubbleSort(arr); 
    for(let i = 0; i<sortedArray.length; i++){
        list.innerHTML += `<li id="element" class="animate__animated animate__tada"><a>${sortedArray[i]}</a></li>`;
    }
}


function bubbleSort(arr){
    // -1 compare only the n size of elements of the array
    for(let i = 0; i < arr.length-1; i++ ){
        for(let j = 0; j < arr.length-1; j++){
            if(arr[j] > arr[j+1]){
                let aux = arr[j]; 
                arr[j] = arr[j+1]; 
                arr[j+1] = aux;
            }
        }
    }
    return arr;
}