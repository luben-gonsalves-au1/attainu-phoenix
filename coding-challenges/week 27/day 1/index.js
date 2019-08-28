function merge(array1, array2) {
	let merge = [];
	
	while(array1.length && array2.length) {
		let smallest;
		if(array1[0] < array2[0]) {
		  smallest = array1.shift();
		} else {
		  smallest = array2.shift();
		}
		merge.push(smallest);
	}
	
	if(array1.length) {
		merge.concat(array1);
	}
	if(array2.length) {
		merge.concat(array2)
	}
	return merge
}

console.log(merge([1, 3, 5, 7], [2, 4, 5, 6]));
