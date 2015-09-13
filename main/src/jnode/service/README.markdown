service lib 
===

the system-level service provider 

what is this lib all about ? 
--
this lib is about service providing , but just a simple wrapper , the real functionality is implemented in system-lib dir and jnode--com dir .


introduction about the service provided 
--

* 参考facebook/osquery中的相关实现，对于系统的状态的查询可以通过数据库的形式进行，：
	
		select * from users;
		select * from processes where on_disk =0 ;
		select * from processes where state_running =0 ;
		select * from processes where state_IDLE =0 ;
		
		select DISTINCT process.name,listenning.port,process.pid from processes  
		JOIN listening_ports AS listening ON process.pid  
		= listening.pid WHERE listening.address = '0.0.0.0'

	对于上述的查询的具体实现，请参考com目录中的SystemState.js 代码。
		