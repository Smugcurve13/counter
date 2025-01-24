let count = document.getElementById("counterCount")

let btnIncrease = document.getElementById("btnIncrease")
let btnDecrease = document.getElementById("btnDecrease")
let btnReset = document.getElementById("btnReset")

btnIncrease.addEventListener('click',function(){
    count.textContent = Number(count.textContent) + 1
});

btnDecrease.addEventListener('click',function(){
    count.textContent = Number(count.textContent) - 1
});

btnReset.addEventListener('click', function(){
    count.textContent = '0'
})