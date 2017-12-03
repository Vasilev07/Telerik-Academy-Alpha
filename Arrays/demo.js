const solve = () => {
    const array = [1, 2, 3, 4, 5];
    array.push(6);
    console.log(array);
    array.push(7, 8);
    console.log(array);

    const secondArray = [9, 10, 11];
    // adding the whone array , not the element
    array.push(secondArray);
    console.log(array);
    array.unshift(-1, 0);
    console.log(array);
    // pop return removed last added element
    const popped = array.pop();
    console.log(popped);
    console.log(array.pop());
    // remove element from the beggining
    const shifted = array.shift();
    console.log(shifted);
    console.log(array);
};
solve();
