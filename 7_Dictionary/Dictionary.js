//Dictionary类
function Dictionary(){
	this.datastore = new Array();

	this.add = add;//添加
	this.find = find;//查找
	this.remove = remove;//删除
	this.showAll = showAll;//显示所有 键值对
}

//add
function add(key, value){
	this.datastore[key] = value;
}

//find
function find(key){
	return this.datastore[key];
}

//remove-delete函数同时删掉键和与其关联的值
function remove(key){
	delete this.datastore[key];
}

//showAll-调用 Object 类的 keys() 方法可以返回传入参数中存储的所有键。
function showAll(){
	for(var key in Object.keys(this.datastore)){
		print(key+"->"+this.datastore[key]);
	}
}


//=============== 测试
var fruits = new Dictionary();
fruits.add("apple","3.6");
fruits.add("banana","5.2");
fruits.add("orange","6.4");
fruits.add("pear","4.3");
fruits.showAll();

fruits.remove("orange");
fruits.showAll();


?????????????????????







