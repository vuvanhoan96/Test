let checkSNT = (x) => {
    for(let i=2; i<x; i++){
        if(x%i==0) return 0;
    }
    return 1;
}
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let btn = document.querySelector('#btn');
let result = document.querySelector('#result');

let sum = 0;

let myFunction = () => {
    if(Number(a.value) >= Number(b.value)) return 0;
    else if(!a.value || isNaN(a.value) || !b.value || isNaN(b.value)){
        alert('Vui lòng nhập dữ liệu và đúng định dạng!');
        return 0;        
    }
    for(let i= Number(a.value); i<=Number(b.value); i++){
        if(i==2 || checkSNT(i)) 
            sum+=i;
        }
    result.value = sum;
};

btn.addEventListener('click', myFunction);