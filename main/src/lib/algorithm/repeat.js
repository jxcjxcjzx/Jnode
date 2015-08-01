
 function judgeRepeat(array){
 // be careful that all contents in array is smaller than length of array 
	var n = array.length;
	for(var i=0;i<n;i++){
		if(array[i]>0) // 判断条件
		{
			if(array[array[i]]<0){
				return array[i]; // 已经被标上负值了，有重复
			}else{
				array[array[i]] = -array[array[i]];
			}
		}else{ // 此时array[i]代表的值已经出现过一次了
			if(array[-array[i]]<0){
				return -array[i]; 
			}else{
				array[-array[i]] = -array[-array[i]];
			}
		}
	}
	return -1; // 数组中没有重复的数字
 }
 
 
 
 
 
 module.exports = {
 
	judgeRepeat : judgeRepeat
 
 }