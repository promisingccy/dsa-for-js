function Queue() {
	this.dataStore = [];//底层数据结构-数组
	
	this.length = length;//返回队列长度

	this.enqueue = enqueue;//向队尾添加一个元素
	this.dequeue = dequeue;//删除队首的元素

	this.front = front;//返回队首的元素
	this.back = back;//返回队尾的元素

	this.toString = toString;//显示队列内的所有元素
	this.empty = empty;//判断队列是否为空
}

//返回队列长度
function length(){
	return this.dataStore.length;
}

//向队尾添加一个元素
function enqueue(element) {
	this.dataStore.push(element);
}

//删除队首的元素
function dequeue() {
	return this.dataStore.shift();
}

//读取队首和队尾的元素
function front() {
	return this.dataStore[0];
} 
function back() {
	return this.dataStore[this.dataStore.length-1];
}

//显示队列内的所有元素
function toString() {
	var retStr = "";
	for (var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	} 
	return retStr;
}

//判断队列是否为空
function empty() {
	return this.dataStore.length == 0 ? true : false;
}

var q = new Queue();
q.enqueue("ccw");
q.enqueue("ccd");
q.enqueue("ccy");
q.enqueue("cct");
q.enqueue("ccp");
q.enqueue("ccm");
print(q.toString());
q.dequeue();
print(q.toString());
print("Front of queue: " + q.front());
print("Back of queue: " + q.back());

