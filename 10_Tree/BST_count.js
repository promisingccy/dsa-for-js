// Node类-增加计数功能
function Node(data, left, right){
	this.data = data;//数据
	this.count = 1;
	this.left = left;//左节点的链接
	this.right = right;//右节点的链接
	this.show = show;//显示节点中的数据
}

function show(){
	return this.data;
}


//二叉查找树 BST类
function BST(){
	this.root = null;//根节点
	this.insert = insert;//新增
	this.inOrder = inOrder;//中序排序
	this.preOrder = preOrder;//前序排序
	this.postOrder = postOrder;//后序排序

	this.getMin = getMin;//获取最小值
	this.getMax = getMax;//获取最大值

	this.find = find;//查找给定值


	this.update = update;//更新次数
}


function insert(data){
	//创建一个 Node 对象 n ， 将数据传入该对象n中保存
	var n = new Node(data, null, null);
	//判断是否存在根节点
	if(this.root == null){
		this.root = n;//不存在那么这是棵新树，该节点就是根节点
	}else{
		//待插入节点不是根节点，就需要准备遍历 BST， 找到插入的适当位置。
		var current = this.root;//设根节点为当前节点，用一个变量 current 存储当前节点， 一层层地遍历 BST
		var parent;
		while(true){
			parent = current;
			if(data < current.data){//如果待插入节点保存的数据小于当前节点
				current = current.left;//设新的当前节点为原节点的左节点
				if(current == null){//如果当前节点的左节点为 null
					parent.left = n;//就将新的节点插入这个位置
					break;//找到了正确的插入点，跳出循环
				}
			}else{//如果待插入节点保存的数据大于当前节点， 则设新的当前节点为原节点的右节点
				current = current.right;//设新的当前节点为原节点的右节点
				if(current == null){//如果当前节点的右节点为 null
					parent.right = n;//就将新的节点插入这个位置
					break;//找到了正确的插入点，跳出循环
				}
			}
		}
	}
}

//中序遍历-中序遍历按照节点上的键值，左->父->右 以升序访问BST 上的所有节点
function inOrder(node){
	if(node != null){
		inOrder(node.left);
		putstr(node.show()+" ");
		inOrder(node.right);
	}
}

//先序遍历-先序遍历先访问根节点，父->左->右 然后以同样方式访问 左子树 和 右子树
function preOrder(node){
	if(node != null){
		putstr(node.show()+" ");
		preOrder(node.left);
		preOrder(node.right);
	}
}

//后序遍历-后序遍历先访问叶子节点， 从左子树到右子树， 再到根节点
function postOrder(node){
	if(node != null){
		postOrder(node.left);
		postOrder(node.right);
		putstr(node.show()+" ");
	}
}

//获取最大最小值
function getMin(){
	var current = this.root;
	while(current.left != null){
		current = current.left;
	}
	return current.data;//返回最左子节点的值
}
function getMax(){
	var current = this.root;
	while(current.right != null){
		current = current.right;
	}
	return current.data;//返回最右子节点的值
}

//查找给定值
function find(data){
	var current = this.root;
	while(current != null){
		if(data == current.data){
			return current;
		}else if(data < current.data){
			current = current.left
		}else{
			current = current.right;
		}
	}
	return null;
}

//更新次数
function update(data){
	var grade = this.find(data);//查找该数据
	if(grade != null){
		grade.count++;
		return grade;		
	}
}

function prArray(arr) {
	putstr(arr[0].toString() + ' ');
	for (var i = 1; i < arr.length; ++i) {
		putstr(arr[i].toString() + ' ');
		if (i % 10 == 0) {
			putstr("\n");
		}
	}
} 
function genArray(length) {
	var arr = [];
	for (var i = 0; i < length; ++i) {
		arr[i] = Math.floor(Math.random() * 101);
	} 
	return arr;
}


//======================测试
var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for (var i = 0; i < grades.length; ++i) {
	var g = grades[i];
	var grade = gradedistro.find(g);
	if (grade == null) {
		gradedistro.insert(g);
	} else {
		gradedistro.update(g);
	}
} 
var cont = "y";
while (cont == "y") {
	putstr("\n\nEnter a grade: ");
	var g = parseInt(readline());
	var aGrade = gradedistro.find(g);
	if (aGrade == null) {
		print("No occurrences of " + g);
	} else {
		print("Occurrences of " + g + ": " + aGrade.count);
	} 
	putstr("Look at another grade (y/n)? ");
	cont = readline();
}