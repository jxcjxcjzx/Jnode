# python tool for download web pages
# or just another saying, download the world wide web

import httplib  
import urllib  
import sys  
import time
import datetime
import random

import Asynchronous
from Asynchronous import workDone


param = sys.argv[1].split(",");
url = param[0];
filetype = param[1];

#param check
if(len(sys.argv)>1):

	# will need to modify this afterwards 
	localrandomtime = "hello";
	#localrandomtime = datetime.datetime.now().strftime("%Y%m%d%H%M%S")+"_"+random.choice('abcdefghijkmnopqrstuvxyz');
	urllib.urlretrieve(url, "D:/User/Documents/GitHub/Jnode/main/extension/lightapp/RealHtml/python/tmp/"+localrandomtime+"."+filetype);
	
	# work done, sending message to manager , universal port is 
	workDone("1340");
	
else:

	#the param is wrong , do nothing here 
	localrandomtime = "";

	# another way to download the same file
	#f = urllib2.urlopen(url) 
	#data = f.read() 
	#with open("code2.zip", "wb") as code:     
	#	code.write(data)  

	# yet another way to download, again the same file
	#r = requests.get(url) 
	#with open("code3.zip", "wb") as code:
	#	code.write(r.content)

# do not need the main function here 	
# if __name__ == '__main__':
# 	downloadDemo()