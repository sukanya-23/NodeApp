export function add(a,b){
    return a+b;
}

export function subtract(a,b){
    return a-b;
}

export function calculate(a,b, addFunction = add){
    const result = addFunction(a,b);
    return result;
}