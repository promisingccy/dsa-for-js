
//构建图
function Graph(v){
	this.vertices = v;//顶点个数
	this.edges = 0;//边的个数
	this.adj = [];//顶点个数
	for(var i=0; i<this.vertices;i++){
		this.adj[i] = [];//存储所有相邻顶点
		this.adj[i].push("");//所有元素初始化为空字符串
	}
	this.addEdge = addEdge;//添加边
	this.showGraph = showGraph;//打印图

	this.dfs = dfs;//深度优先搜索

	this.marked = [];//存储已访问过的顶点
	for(var i=0; i<this.vertices; i++){
		this.marked[i] = false;//初始化为未访问过
	}
}

//添加边
/*当调用这个函数并传入顶点 A 和 B 时， 函数会先查找顶点 A 的邻接表， 将顶点 B 添加到列
表中， 然后再查找顶点 B 的邻接表， 将顶点 A 加入列表。 最后， 这个函数会将边数加 1*/
function addEdge(v, w){
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

//打印图
function showGraph() {
	for (var i = 0; i < this.vertices; ++i) {
		putstr(i + " -> ");
		for (var j = 0; j < this.vertices; ++j ) {
			if (this.adj[i][j] != undefined) {
				putstr(this.adj[i][j] + ' ');
			}
		} 
		print();
	}
}

//深度优先搜索-??????????????????
function dfs(v){
	this.marked[v] = true;
	if(this.adj[v] != undefined){
		print("Visited vertex: "+v);
	}
	foreach(var w in this.adj[v]){
		if(!this.marked[w]){
			this.dfs(w);
		}
	}
}



g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(0);
/*
0 ->  1 2
1 ->  0 3
2 ->  0 4
3 ->  1
4 ->  2
*/



