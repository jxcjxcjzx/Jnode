# python tool for download web pages
# or just another saying, download the world wide web

import httplib  
import urllib  
import sys  
import time
import datetime

url = sys.argv[1] 
# will need to modify this afterwards 
localtime = datetime.datetime.now().strftime("%Y%m%d%H%M%S");
urllib.urlretrieve(url, "D:/User/Documents/GitHub/Jnode/main/extension/lightapp/RealHtml/python/tmp/"+localtime+".jpg");

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