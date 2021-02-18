//Node类
function Node(element){
	this.element = element;//节点数据
	this.next = null;//指向下一个节点的链接
	this.previous = null;//指向上一个节点的链接
}

//SXLList类
function SXLList(){
	this.head = new Node("head");//头结点

	this.find = find;//查找节点
	this.insert = insert;//插入节点

	this.remove = remove;//删除节点

	this.findLast = findLast;//查找链表的最后一个节点
	this.display = display;//打印链表
	this.dispReverse = dispReverse;//打印反向链表
}

//插入节点-需要辅助方法find进行查找
//查找节点
function find(item){
	var currNode = this.head;
	while(currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}
//插入新节点 ->item->newElement->
function insert(newElement, item){
	var newNode = new Node(newElement);//创建新增节点
	var current = this.find(item);//获取 目标节点 item对象
	newNode.next = current.next;//使新节点的链接 = 目标节点的链接  newElement->
	current.next = newNode;//将目标节点的链接指向新增节点  item->newElement

	newNode.previous = current;//设置新节点的上一节点为当前节点

}


//删除节点
function remove(item){
	var currNode = this.find(item);//查找删除节点
	if(currNode.next != null){//查找节点不是最后一个节点
		//将 删除节点的上一节点 的next设置为 删除节点的下一节点
		currNode.previous.next = currNode.next;
		//将 删除节点的下一节点 的previous设置为 删除节点的上一节点
		currNode.next.previous = currNode.previous;
		//将 删除节点 的next和previous清除
		currNode.next = null;
		currNode.previous = null;
	}
}


//打印链表-需要辅助方法 findLast
//找出链表中最后一个节点
function findLast(){
	var currNode = this.head;
	while(currNode.next != null){
		currNode = currNode.next;
	}
	return currNode;
}
//正向打印链表
function display(){
	var currNode = this.head;//从头结点开始
	while(currNode.next != null){//如果当前节点的链接不为null
		print(currNode.next.element);//打印当前节点的下一的节点数据element
		currNode = currNode.next;//将 当前节点 变为 其下一节点
	}
	print("\n");
}
//反向打印链表
function dispReverse(){
	var currNode = this.head;
	currNode = this.findLast();
	while(currNode.previous != null){
		print(currNode.element);
		currNode = currNode.previous;
	}
	print("\n");
}

//=============== 测试
var cities = new SXLList();
cities.insert("Beijing", "head");//在head节点后新增Beijing节点
/* 分析
head->null
Beijing->null	head->Beijing
结果为： head->Beijing->null

head         null
  |            |
  ---------->Beijing
*/
cities.insert("Shijiazhuang", "Beijing");
/* 分析
head->Beijing->null
Shijiazhuang->null	Beijing->Shijiazhuang
结果为： head->Beijing->Shijiazhuang->null
*/
cities.insert("Zhengzhou", "Shijiazhuang");
cities.insert("Hefei", "Zhengzhou");
cities.insert("Nanjing", "Hefei");
cities.insert("Shanghai", "Nanjing");
cities.display();
/*  输出内容

Beijing
Shijiazhuang
Zhengzhou
Hefei
Nanjing
Shanghai

*/
cities.dispReverse();
/*  输出内容

Shanghai
Nanjing
Hefei
Zhengzhou
Shijiazhuang
Beijing

*/

cities.remove("Hefei");
cities.display();
/*  输出内容

Beijing
Shijiazhuang
Zhengzhou
Nanjing
Shanghai

*/
cities.dispReverse();
/* 输出内容

Shanghai
Nanjing
Zhengzhou
Shijiazhuang
Beijing

*/


