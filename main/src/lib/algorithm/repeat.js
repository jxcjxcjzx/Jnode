
 function judgeRepeat(array){
 // be careful that all contents in array is smaller than length of array 
	var n = array.length;
	for(var i=0;i<n;i++){
		if(array[i]>0) // �ж�����
		{
			if(array[array[i]]<0){
				return array[i]; // �Ѿ������ϸ�ֵ�ˣ����ظ�
			}else{
				array[array[i]] = -array[array[i]];
			}
		}else{ // ��ʱarray[i]�����ֵ�Ѿ����ֹ�һ����
			if(array[-array[i]]<0){
				return -array[i]; 
			}else{
				array[-array[i]] = -array[-array[i]];
			}
		}
	}
	return -1; // ������û���ظ�������
 }
 
 
 
 
 
 module.exports = {
 
	judgeRepeat : judgeRepeat
 
 }