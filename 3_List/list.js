//实现列表类
function List() {
	this.dataStore = []; // 初始化一个空数组来保存列表元素
	this.listSize = 0;//列表的元素个数
	this.pos = 0;//列表的当前位置

	this.length = length;//返回列表中元素的个数
	this.find = find;//查找
	this.toString = toString;//返回列表的字符串形式
	this.append = append;//在列表的末尾添加新元素
	this.remove = remove;//从列表中删除元素
	
	this.insert = insert;//在现有元素后插入新元素
	this.clear = clear;//清空列表中的所有元素

	this.contains = contains;//判断给定值是否在列表中

	this.front = front;//将列表的当前位置移动到第一个元素
	this.end = end;//将列表的当前位置移动到最后一个元素
	this.prev = prev;//将当前位置前移一位
	this.next = next;//将当前位置后移一位
	this.currPos = currPos;//返回列表的当前位置
	this.moveTo = moveTo;//返回列表的当前位置
	this.getElement = getElement;//返回当前位置的元素
}

//===================== 给列表添加元素
function append(element){
	this.dataStore[this.listSize++] = element;
}

//===================== 从列表中删除元素:find-del-fixPos
function find(element){
	for(var i=0; i<this.dataStore.length; i++){
		if(this.dataStore[i] == element)
			return i;
	}
	return -1;
}
function remove(element){
	var foundAt = this.find(element);
	if(foundAt > -1){
		this.dataStore.splice(foundAt, 1);//如果找到，删除
		--this.listSize;//将列表长度减一
		return true;
	}
	return false;
}

//===================== 查看列表中元素、元素个数
function length(){
	return this.listSize;
}
function toString(){
	return this.dataStore;
}

//@@@@@@@@@@@@ 测试1
//var names = new List();
//names.append("ccw");
//names.append("ccd");
//names.append("ccy");
//names.append("cct");
//names.append("ccp");
//names.append("ccm");
//print(names.toString());
//names.remove("ccp") ? print(names.toString()) : print("can not find");

//===================== 插入(注意插入位置要+1)
function insert(element, after){
	var insertPos = this.find(after);//找到插入位置
	if(insertPos > -1){
		this.dataStore.splice(insertPos+1, 0, element);//插入
		++this.listSize;
		return true;
	}
	return false;
}

//===================== 清空列表中所有元素
function clear(){
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

//===================== 判断给定值是否在列表中
function contains(element){
	for(var i=0; i<this.dataStore.length; i++){
		if(this.dataStore[i] == element)
			return true;
	}
	return false;
}

//@@@@@@@@@@@@ 测试2
//var names = new List();
//names.append("ccw");
//names.append("ccd");
//names.append("ccy");
//names.append("cct");
//names.append("ccp");
//names.append("ccm");
//print(names.length());
//print(names.toString());
//names.remove("ccy") ? print(names.toString()) : print("can not find");
//names.insert("ccy","ccd") ? print(names.toString()) : print("can not find");
//names.clear();
//print(names.length());
//print(names.toString());
//names.contains("ccc") ? print("yes,contain") : print("not contain");


//===================== 位置指针函数
function front(){
	this.pos = 0;
}
function end(){
	this.pos = this.listSize - 1;
}
function prev(){
	if(this.pos > 0)
		--this.pos;
}
function next(){
	if(this.pos < this.listSize - 1)
		++this.pos;
}
function currPos(){
	return this.pos;
}
function moveTo(position){
	this.pos = position;
}

//===================== 返回当前位置的元素
function getElement(){
	return this.dataStore[this.pos];
}

//@@@@@@@@@@@@ 测试3
var names = new List();
names.append("ccw");
names.append("ccd");
names.append("ccy");
names.append("cct");
names.append("ccp");
names.append("ccm");

names.front();
print(names.getElement());
names.end();
print(names.getElement());
names.prev();
print(names.getElement());
names.next();
print(names.getElement());
names.moveTo(2);
print(names.getElement());

/*
//使用迭代器
var names = new List();
names.append("ccw");
names.append("ccd");
names.append("ccy");
names.append("cct");
names.append("ccp");
names.append("ccm");
print(names.length());

for(names.front(); names.currPos()<=names.length()-1; names.next()){
	print(names.currPos());
	print(names.getElement());
}

for(names.end(); names.currPos() >= 0; names.prev()) {
	print(names.getElement());
}
*/






