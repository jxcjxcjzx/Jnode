# python spider
__reference__ = 'kuqin.com';
#coding:utf-8
import urllib
import urllib2
import re 
import thread
import time

# a simple python spider
class Spider:
def __init__(self):
	self.pageIndex = 1
	self.user_agent = 'Mozilla/4.0(compatible;MSIE 5.5;Windows NT)'

	self.headers = {'User-Agent':self.user_agent}

	self.stories = []   # store the main content here 
	self.enable = False

def getPage(self,pageIndex):
	try :
		url = 'http://www.qiushibaike.com/hot/page/'+str(pageIndex)
		
		request = urllib2.Request(url,headers=self.headers)
		
		response = urllib2.urlopen(request)
		
		pageCode = response.read().decode('utf-8')
		
		return pageCode
		
	except urllib2.URLError,e:
		if hasattr(e,"reason"):
			print u"something wrong, reason is : ",e.reason
		return None
		
def getPageItems(self,pageIndex):
	pageCode = self.getPage(pageIndex)
	
	if not pageCode:
		print " fail to load the page "
		return None
		
	pattern = re.compile('<div.*?class="author.*?>.*?<a.*?</a>.*?<a.*?>(.*?)</a>.*?<div.*?class="content".*?title="(.*?)">(.*?)</div>(.*?)<div class="stats.*?class="number"></i>',re.S)
	
	items = re.findall(pattern,pageCode)
	
	pageStories = []
	
	for item in items :
		haveImg = re.search("img",item[3])
		
		if not haveImg:
			pageStories.append([item[0].strip(),item[1].strip(),item[2].strip(),item[4].strip()])
			
	return pageStories
	
def loafPage(self):
	if self.enable == True :
		if len(self.stories) <2:
			pageStories = self.getPageItems(self.pageIndex)
			
			if pageStories:
				self.stories.append(pageStories)
				self.pageIndex+=1
				
def getOneStory(self,pageStories,page):
	for story in pageStories:
		input = raw_input()
		
		self.loafPage()
		
		if input=="Q":
			self.enable = False
			return 
			
		print u"page number%d,people name%st,time%sn, good %sn"%(page,story[0],story[1],story[2],story[3])
		
	
def start(self):

	print u" loading ..... "
	self.enable = True
	self.loafPage()

	nowPage = 0
	
	while self.enable:
		if len(self.stories)>0:
			pageStories = self.stories[0]
			nowPage+=1
			del self.stories[0]
			
			self.getOneStory(pageStories,nowPage)
		


# try to execute it !		
spider = Spider()
	
spider.start()
			
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		