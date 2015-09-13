refs made to 
==

SpockFs -- 基于http的文件系统

Spockfs基于http方法和header构建，支持所有 fuse posix相关的方法，包括符号链接。

jnode的fs 可以参考这个系统。

spockfs 增加了一些新方法， 以避免和webdav冲突：

* READDIR
* GETATTR
* MKNOD
* OPEN
* CHMOD
* CHOWN
* TRUNCATE
* ACCESS

