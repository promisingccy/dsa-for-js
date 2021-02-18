//Node类
function Node(element){
	this.element = element;//节点数据
	this.next = null;//指向下一个节点的链接
}



//XHLList类
function XHLList(){
	this.head = new Node("head");//头结点
	this.head.next = this.head;//将head的下一节点设置为 头结点 

	this.find = find;//查找节点
	this.insert = insert;//插入节点

	this.findPrevious = findPrevious;//查找当前节点的上一节点
	this.remove = remove;//删除节点
	this.display = display;//打印链表
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

}


//删除节点-需要辅助方法 findPrevious 进行查找
function findPrevious(item){
	var currNode = this.head;
	//当前节点的下一节点不为 null 并且不等于 查找的节点，向后遍历
	//如果等于 查找的节点，返回当前节点--即需要的 前一节点
	while(currNode.next != null && currNode.next.element != item){
		currNode = currNode.next;
	}
	return currNode;
}
function remove(item){
	var prevNode = this.findPrevious(item);//查找前一节点
	if(prevNode.next != null){//该判断过滤了没有找到前一节点的情况，即查找节点不存在
		prevNode.next = prevNode.next.next;//将链接跳过 删除节点
	}
}


//打印链表
//正向打印
function display(){
	var currNode = this.head;//从头结点开始
	while(currNode.next.element != "head"){//如果当前节点的链接不为null
		print(currNode.next.element);//打印当前节点的下一的节点数据element
		currNode = currNode.next;//将 当前节点 变为 其下一节点
	}
	print("\n");
}


//=============== 测试1
var cities = new XHLList();
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

cities.remove("Hefei");
cities.display();
/* 输出内容
Beijing
Shijiazhuang
Zhengzhou
Nanjing
Shanghai
*/