// Node类
function Node(data, left, right){
	this.data = data;//数据
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

	this.remove = remove;//接收待删除数据
	this.removeNode = removeNode;//删除节点
	this.getSmallest = getSmallest;//获取最小节点-即最左节点
}

/*
首先要创建一个 Node 对象， 将数据传入该对象保存。

其次检查 BST 是否有根节点， 如果没有， 那么这是棵新树， 该节点就是根节点， 这个方法到此也就完成了； 否则， 进入下一步。

如果待插入节点不是根节点， 那么就需要准备遍历 BST， 找到插入的适当位置。 
该过程类似于遍历链表。 用一个变量存储当前节点， 一层层地遍历 BST。
进入 BST 以后， 下一步就要决定将节点放在哪个地方。 找到正确的插入点时， 会跳出循环。 

查找正确插入点的算法如下。
(1) 设根节点为当前节点。
(2) 如果待插入节点保存的数据小于当前节点， 则设新的当前节点为原节点的左节点； 反之， 执行第 4 步。
(3) 如果当前节点的左节点为 null， 就将新的节点插入这个位置， 退出循环； 反之， 继续执行下一次循环。
(4) 设新的当前节点为原节点的右节点。
(5) 如果当前节点的右节点为 null， 就将新的节点插入这个位置， 退出循环； 反之， 继续执行下一次循环。
*/
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

//获取最小节点-即最左节点
function getSmallest(node) {
   if (node.left == null) {
      return node;
   }
   else {
      return getSmallest(node.left);
   }
}

//删除节点
function remove(data){
	root = removeNode(this.root, data);
}
function removeNode(node, data){
	if(node == null){
		return null;
	}
	if(data == node.data){
		if(node.left == null && node.right == null)//没有子节点的节点
			return null;
		if(node.left == null)//没有左子节点的节点
			return node.right;
		if(node.right ==null)//没有右子节点的节点
			return node.left;
		//剩余的情况为有两个子节点的节点
		var tempNode = getSmallest(node.right);
		node.data = tempNode.data;
		node.right = removeNode(node.right, tempNode.data);
		return node;
	}else if(data < node.data){
		node.left = removeNode(node.left, data);
		return node;
	}else{
		node.right = removeNode(node.right, data);
		return node;
	}
}


//======================测试
var nums = new BST();//23 45 16 37 3 99 22
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
/* 树形图
         23
    16        45
   3  22	37  99
*/

/*
//三种排序
print("Inorder traversal: ");
inOrder(nums.root);
print("\n");
//Inorder traversal:
//3 16 22 23 37 45 99
print("Preorder traversal: ");
preOrder(nums.root);
print("\n");
//Preorder traversal:
//23 16 3 22 45 37 99
print("Postorder traversal: ");
postOrder(nums.root);
//Postorder traversal:
//3 22 16 37 99 45 23
*/

/*
//获取最小最大值
print("min:"+nums.getMin()+" ");//min:3
print("max:"+nums.getMax()+" ");//max:99
*/

//查找测试
//print("Inorder traversal: ");
//inOrder(nums.root);
//print("\n");
//putstr("Enter a value to search for: ");
//var value = parseInt(readline());
//var found = nums.find(value);
//if (found != null) {
//	print("Found " + value + " in the BST.");
//} else {
//	print(value + " was not found in the BST.");
//}
/* 查找23-找到了
Inorder traversal:
3 16 22 23 37 45 99

Enter a value to search for: 23
Found 23 in the BST.
*/
/* 查找55-未找到
Inorder traversal:
3 16 22 23 37 45 99

Enter a value to search for: 55
55 was not found in the BST.
*/

//删除测试
inOrder(nums.root);
print("\n");
var num = parseInt(readline());
nums.remove(num);
inOrder(nums.root);
/*
3 16 22 23 37 45 99
22 //输入删除数字
3 16 23 37 45 99
*/