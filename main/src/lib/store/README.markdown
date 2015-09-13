the store lib in Jnode project 
==

basic data-storing-acquiring support, and query or find data service. 

how is this organized ?
--

the dir currently contains the js and python interface for storing, and js interface is mainly used .   
some schemes are listed as below :

	DROP TABLE IF EXISTS T_USER;
	CREATE TABLE T_USER (
		AGE bigint(20),
		NAME varchar (500),
		ID bigint (20) NOT NULL AUTO_INCREMENT,
		PRIMARY KEY (ID)
	)

the above clause is for creating a table , in mysql, as may noticed. 

the main process for a query is like this :

	query --- parse and translator --- relational algebra expression   
	---  optimizr (from statisticss about data ),   
	----  execution plan  ---  evalution engine  (get data )  --- query output 


so the codes will just be organized like the above introduction. 


common usage 
--

common use of db can be ref from php :  
	
	$result = $conn -> query(queryclause);
	list($now,$version,$user,$db) = $result->fetchRow();
	// deal with all other param get 

so from php usage , first initialize a connection with db , and then do query and get a result in return, finally, make use of the variables got . 


and don't forget about the common clauses supported :

	

about the ref from android uri
--

android 缺省提供这些查询的服务：

	所有联系人: content://contacts/people
	所有的图片URI ： content://media/external 
	某个图片的uri : content://media/external/images/media/4

refs can be made accordingly. 

* select语句允许以下控制：  
	查询表
	查询行和列
	重命名
	对查询的结果进行排序

* insert语句
	