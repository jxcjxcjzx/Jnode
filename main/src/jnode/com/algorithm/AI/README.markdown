 the common AI lib, it is suggested to write this in code in functional form, 建议使用函数式编程接口进行接口的编写便于拓展。


The AI suggested for implementation :  

* minimax 算法 （剪枝算法），常用于博弈  
	minimax算法步骤    
	
		+ 确定最大搜索深度D,D可能是最终结局，也有可能是一个中间量
		+ 在最大深度为D的格局（博弈树）树叶子节点上，使用预定义的价值评价函数对叶子  
		节点价值进行评估
		+ 自底向上为非叶子节点赋值，其中max节点（以博弈的顺序来进行判定）取子节点  
		最大值，min节点取子节点最小值。
		+ 每次轮到我方时（此处必然在格局树的某个max节点），选择价值等于此max节点价值的那个子节点路径，这样就形成了策略。
	
		
	