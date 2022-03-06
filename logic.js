var sendBtn = document.getElementById('send'); 
var select = document.getElementById('select')
var list = document.getElementById('array_elements');
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

function random(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function createLi(arr){
    for(var i = 0; i<arr.length; i++){
        list.innerHTML += `<li>${arr[i]}</li>`;
    }
}

function fillArray(arr){
    for(var i = 0; i<size; i++){
        arr.push(random(0, 500));
    }
}


function bubbleSort(arr){

}