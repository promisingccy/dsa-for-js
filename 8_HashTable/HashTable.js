
function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;//一般hash算法
	this.betterHash = betterHash;//更好的hash算法
	this.showDistro = showDistro;
	this.put = put;
	//this.get = get;
}


function put(data) {
	//var pos = this.simpleHash(data);
	var pos = this.betterHash(data);
	this.table[pos] = data;
}

function showDistro() {
	var n = 0;
	for (var i = 0; i < this.table.length; ++i) {
		if (this.table[i] != undefined) {
			print(i + ": " + this.table[i]);
		}
	}
}

//将字符串中每个字符的 ASCII 码值相加似乎是一个不错的散列函数
function simpleHash(data) {
	var total = 0;
	for (var i = 0; i < data.length; ++i) {
		total += data.charCodeAt(i);
	} 
	print("Hash value: " + data + " -> " + total);
	return total % this.table.length;
}

function betterHash(string) {
	const H = 37;
	var total = 0;
	for (var i = 0; i < string.length; ++i) {
		total += H * total + string.charCodeAt(i);
	} 
	total = total % this.table.length;
	if (total < 0) {
		total += this.table.length-1;
	} 
	return parseInt(total);
}


var someNames = ["David", "Jennifer", "Donnie", "Raymond","Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
	hTable.put(someNames[i]);
} 
hTable.showDistro();
/* 改进后的输出？？？？？？？？？？
12: Jennifer
22: Raymond
55: Donnie
58: Clayton
80: Jonathan
82: Mike
103: Cynthia
110: Danny
*/

/*  未改进的输出
35: Cynthia
45: Clayton
57: Donnie
77: David
95: Danny
116: Mike
132: Jennifer
134: Jonathan

Hash value: David -> 488
Hash value: Jennifer -> 817
Hash value: Donnie -> 605
Hash value: Raymond -> 730
Hash value: Cynthia -> 720
Hash value: Mike -> 390
Hash value: Clayton -> 730
Hash value: Danny -> 506
Hash value: Jonathan -> 819

字符串 "Clayton" 和 "Raymond" 的散列值是一样的！ 一样的散列值引发了碰撞，因为碰撞，只有 "Clayton" 存入了散列表。
可以通过改善散列函数来避免碰撞

*/

