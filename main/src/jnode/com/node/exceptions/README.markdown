the exception in jnode com 
===

this is all about providing logging necessary information when exception takes place. 

what is this for ?
-

in a word, exception handling is all about telling what to do after exception happens. 

传统的异常处理的办法是交由调用者进行， 调用 的函数返回一个约定的错误代码，调用者进行判断并处理。
另一种方式则是 遇到错误，立即结束方法， 并且不返回值，此时抛出异常对象。
the exception is recommended to be in several categories:   

* runtimeerror  
* 非 runtimeerror

in which runtimeerror 包含：

* 错误的类型转换
* 数组访问越界
* 空指针

non-runtimeexception 包括  

* ioexception等非程序性、错误。往往由于外部环境的变化导致。

通常异常进行抛出处理，--- throws  
当然，有抛出就有捕获。 so a scheme here is needed. 

all the above ref comes from java programming language. 