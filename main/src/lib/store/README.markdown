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


