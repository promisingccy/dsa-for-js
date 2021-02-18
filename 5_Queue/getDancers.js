//队列类
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


//应用
//舞者对象
function Dancer(name, sex){
	this.name = name;
	this.sex = sex;
}

//分配舞者入列
function getDancers(males, females){
	//获取文件数据并预处理
	var names = read("dancers.txt").split("\n");
	for(var i=0; i<names.length; i++){
		names[i] = names[i].trim();
	}

	//将男女舞者分别入两条队列中
	for(var i=0; i<names.length; i++){
		var dancer = names[i].split(" ");
		var sex = dancer[0];//当前舞者性别
		var name = dancer[1];//当前舞者的名称
		if(sex == 'F'){
			females.enqueue(new Dancer(name, sex));
		}else{
			males.enqueue(new Dancer(name, sex));
		}
	}

}

//宣布跳舞结果
function dance(males, females){
	print("The dance partners are: \n");
	while(!females.empty() && !males.empty()){
		person = females.dequeue();
		putstr("Female dancer is: " + person.name);
		person = males.dequeue();
		putstr(" and male dancer is: " + person.name + " \n");
	}
	if(!females.empty()){
		print("the number of waiting females is: "+females.toString());
	}
	if(!males.empty()){
		print("the number of waiting males is: "+males.length());
	}
	print();
}


//测试
/* dancers.txt 内容
F Allison McMillan
M Frank Opitz
M Mason McMillan
M Clayton Ruff
F Cheryl Ferenback
M Raymond Williams
F Jennifer Ingram
M Bryan Frazer
M David Durr
M Danny Martin
F Aurora Adney
*/
var males = new Queue();
var females = new Queue();
getDancers(males, females);
dance(males, females);

/* 输出
The dance partners are:

Female dancer is: Allison and male dancer is: Frank
Female dancer is: Cheryl and male dancer is: Mason
Female dancer is: Jennifer and male dancer is: Clayton
Female dancer is: Aurora and male dancer is: Raymond
the number of waiting males is: 3
*/
