let tri = document.querySelector('.triangle');

let numberOneTriangle = (x) =>{
    if(x<1 && x>10) return 0;
    
    let print = '';
    for(let i=0; i<x; i++){
        for(let j=0; j<=i; j++){
            print+='*';
        }  
        print+='<br>';
    }
     tri.innerHTML = print;
}
numberOneTriangle(4);