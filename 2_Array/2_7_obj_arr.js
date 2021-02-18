function weekTemp(){
	this.data = [];//属性
	this.add = add;//方法
	this.aver = aver;//方法
}


function add(temp){
	this.data.push(temp); 
}

function aver(){
	var total = 0;
	for(var i=0; i<this.data.length; i++){
		total += this.data[i];
	}
	return total / this.data.length;
}

var weekObj = new weekTemp();
weekObj.add(12);
weekObj.add(7);
weekObj.add(18);
weekObj.add(7);

print(weekObj.aver());//11








