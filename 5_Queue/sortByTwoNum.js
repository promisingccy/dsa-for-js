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


//基数排序操作

//根据相应位（个位或十位） 上的数值， 将数字分配到相应队列的函数
//数字数组nums,  队列数组queues,  个数n,  
//digit只是个标识  =1表示根据个位的值入队列    =10 表示根据十位上的值入队列
function distribute(nums, queues, n, digit){
	for(var i=0; i<n; i++){
		if(digit == 1){
			queues[nums[i]%10].enqueue(nums[i]);//个位数字入队列
		}else{
			queues[Math.floor(nums[i]/10)].enqueue(nums[i]);//十位数字入队列
		}
	}
}

//从队列中收集数字的函数
function collect(queues, nums){
	var i=0;
	for(var digit=0; digit<10; digit++){
		while(!queues[digit].empty()){
			//当队列数组中有不为空队列的时候
			nums[i++] = queues[digit].dequeue();
		}
	}
}

//打印数组
function dispArray(arr){
	for(var i=0; i<arr.length; i++){
		putstr(arr[i] + " ");
	}
}

//=======================测试

var queues = [];//队列数组
for(var i=0; i<10; i++){
	queues[i] = new Queue();//将10个队列分别放置在queues数组中
}
var nums = [];//待排序的数字数组
for(var i=0; i<10; i++){
	nums[i] = Math.floor(Math.random() * 100);//生成的值为 [0,99]
}
print("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);

print("\n\n first radix sort(gewei): ");
dispArray(nums);

distribute(nums, queues, 10, 10);
collect(queues, nums);
print("\n\n second radix sort(shiwei): ");
dispArray(nums);

/*
Before radix sort:
27 37 73 31 34 99 81 0 40 93

 first radix sort(gewei):
0 40 31 81 73 93 34 27 37 99

 second radix sort(shiwei):
0 27 31 34 37 40 73 81 93 99

*/

