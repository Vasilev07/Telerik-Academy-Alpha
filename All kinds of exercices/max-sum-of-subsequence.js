function solve(arr) {
    let max_so_far = 0;
	let leftIndex = 0,
		rightIndex = arr.length - 1,
		len = arr.length;

	for (let i = 0; i < len; i++) {
		maxSum = 0;

		for (let j = i; j < len; j++) {
			maxSum += arr[j];

			if (max_so_far < maxSum) {
				leftIndex = i;
				max_so_far = maxSum;
				rightIndex = j;
			}
		}
	}
	console.log(max_so_far);
}
    
    
solve([2,3,-6,-1,2,-1,6,4,-8,8]);