function timeConversion(s) {
    let array = s[0].split(':');
    let amPm = array[2].split('');
    let some = amPm.splice(2,2);
    
    let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    console.log(matrix.join(' '));
    
}
timeConversion(['07:05:45PM']);