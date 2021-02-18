function createArr(file){
	var arr = read(file).split("\n");
	for(var i=0; i<arr.length; i++){
		arr[i] = arr[i].trim();
	}
	return arr;
}
var films = createArr("films.txt");
print(films[8]);
