function allocateArray(n){
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(i*n);        
    }
}
allocateArray(5);

const line = gets();

let array = [];
for (let i = 0; i < line; i++) {
    array.push(i*5);        
}
print(array.join('\n'));