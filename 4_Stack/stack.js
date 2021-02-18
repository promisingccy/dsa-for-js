//栈类
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

//测试
var s = new Stack();
s.push("ccw");
s.push("ccd");
s.push("ccy");
s.push("cct");
s.push("ccp");
s.push("ccm");
print("length: " + s.length());
print(s.peek());

var popped = s.pop();
print("The popped element is: " + popped);
print(s.peek());

s.push("cs");
print(s.peek());

s.clear();
print("length: " + s.length());
print(s.peek());

s.push("Clayton");
print(s.peek());


