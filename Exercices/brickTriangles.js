function solve(array){
    let n = +array.pop();
    let arr = [];
    console.log(array[0]);
    console.log(array[1] + " " + array[2]);
    for (let row = 2; row < n; row++) {
      let line = "";
      for (let col = 0; col <= row; col++) {
          let brick = 0;
          for (const bricks of array) {
            brick += bricks;
          }
          line += brick + " ";
          array.shift(0);
          array.push(brick);
          arr.push(brick);
        
      }
      console.log(line);
    }
}
solve([1, 4, 2, 3]);
console.log("-".repeat(20));
solve([1, -1, 1, 4]);
console.log("-".repeat(20));
solve([1, -1, 1, 5]);