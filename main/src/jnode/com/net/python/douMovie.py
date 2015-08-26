import urllib
import json 
import time


# a simple tool to get movie information in douban site ,wow !

movie_ids = []

dou_url = "http://api.douban.com/v2/movie/top250?start=%d&count=50";

for index in range(0,250,50):
	print index 

response = urllib.urlopen(dou_url %index)

data = response.read()

# print data 

data_json = json.loads(data)

movie250 = data_json['subjects']

for movie in movie250:
	movie_ids.append(movie['id'])
	print movie['id'], movie['title']
	
	time.sleep(3)
	
	print movie_ids    # the result 

	
