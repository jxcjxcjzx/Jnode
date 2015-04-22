# a simple basic python spider

import requests
from bs4 import BeautifulSoup  # to parse the web pages 

seds = ["http://www.hao123.com",   # the seds 
		"http://www.csdn.net",
		"http://www.circode.com" 
]

sum = 0   # the end condition

while sum<1000:
	if sum< len(seds):
		r = requests.get(seds[sum])
		sum= sum+1
		do_save_action(r)
		soup = BeautifulSoup(r.content)
		urls = soup.find_all("href",......)  # parse the web pages 
		for url in urls :
			seds.append(url)
			
	else:
		break