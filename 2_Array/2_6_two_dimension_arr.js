
Array.getTArr = function(rows, cols, init){
	var arr = [];
	for(var i=0; i<rows; i++){
		var sec_arr = [];
		for(var j=0; j<cols; j++){
			sec_arr[j] = init;
		}
		arr[i] = sec_arr;
	}
	return arr;
}

var nums = Array.getTArr(3,4,"c");
print(nums);




