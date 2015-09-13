time server 
===

the service provider of time 

how is this 实现？ 
--

使用类似的URL -- http://www.mozfan.com/thread-4802-1-1.html， 
www.mozfan.com 域名服务器会返回特定的信息提示页面找不到。 
Error 404

www.mozfan.com
09/13/15 11:28:04
Apache/2.2.9 (APMServ) PHP/5.2.6

里面有时间信息，可以解析并使用， 作为全局时钟。 

the ref server url info :(使用多个候选的URL作为时钟源)

* http://www.mozfan.com/thread-4802-1-1.html
* 