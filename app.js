 
let n = document.querySelector("input");
let btn = document.querySelector("button");
let p = document.querySelector("p");
btn.addEventListener("click" , () => {
    let num = parseInt(n.value);
    if (isNaN(num) || num < 0) {
        p.innerText = "Please enter a valid non-negative number.";
        return;
    }
    let fact = 1;
    for(let i = 1; i<= num;i++) {
    fact = fact*i;
}
function factorial (n) {
    if(n==0 || n==1) {
        return 1;
    }
    return n*factorial(n-1);
}


p.innerHTML = `The factorial using iterative method of ${n.value} is ${fact}. <br> The factorial using recursive method of ${n.value} is ${factorial(n.value)}.`;

})
 
 