function fac(num){
	if(num == 1){
		return num;
	}else{
		return num*fac(num-1);
	}
}
putstr("enter a number:");
var max = readline();
print(fac(max));