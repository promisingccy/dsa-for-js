function Stack() {
	this.dataStore = [];//底层数据结构-数组
	this.top = 0;//记录栈顶位置

	this.push = push;//将一个元素压入栈
	this.pop = pop;//将一个元素弹出栈
	this.peek = peek;//返回栈顶元素
	this.clear = clear;//清除栈内所有元素
	this.length = length;//返回栈的长度
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
	return this.dataStore[--this.top];
}

function peek() {
	return this.dataStore[this.top-1];
}

function length() {
	return this.top;
}

function clear() {
	this.top = 0;
}


//应用-是否是回文
function isHuiwen(word) {
	var s = new Stack();
	for (var i = 0; i < word.length; ++i) {
		s.push(word[i]);
	}
	var rword = "";
	while (s.length() > 0) {
		rword += s.pop();
	}
	if (word == rword) {
		return true;
	}else {
		return false;
	}
} 
var word = "hello";
if (isHuiwen(word)) {
	print(word + " is a Huiwen.");
}else {
	print(word + " is not a Huiwen.");
}
word = "racecar"
if (isHuiwen(word)) {
	print(word + " is a Huiwen.");
}else {
	print(word + " is not a Huiwen.");
}
