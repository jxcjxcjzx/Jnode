// simulated Regex pattern matcher 
// work hard to make it !

var consts = {
	
	// keywords will be useful for regex api call ,the matcher 
	keywords : [
		".",   // all characters 
		"%a",  // all letters 	
		"%c",  // all control characters 
		"%d",  // all digits 
		"%l",   // all lower letters 
		"%p",   // all punctuation characters 
		"%s",    // all space characters 
		"%u",   // all upper cahracters 
		"%w",   // all alphanumeric characters 
		"%x",   // all hex digits 
		"%z",   // characters with representation 0 
	],
	
	
	patterns : {
		/*  implement this later 
			^    匹配字符串开始部分
			$	 匹配字符串的结束部分
			.	 匹配任意字符串
			[...]	括号内任意字符
			[^...]	除括号内之外的任意字符
			p1 | p2 | p3	p1,p2,p3中任意一个模式串
			*	匹配0或者多个*之前的任意序列
			+	匹配1或者多个+之前的任意序列
			{n}	n个{n}之前的任意序列
			{m,n}	最少m个，最多n个，{m,n}之前的任何序列
		*/
	},

};