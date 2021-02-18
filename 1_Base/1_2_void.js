function curve(arr, amount){
	for (var i=0; i<arr.length; i++){
		arr[i] += amount;
	}
}

var arr = [22, 35, 66];
curve(arr, 10);
print(arr);