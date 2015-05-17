import httplib

def url_open(conn_obj):
	#http long-time link
	try:
		conn_obj.request("GET", "/?taskbegin");
		#conn_obj.request("GET", "/?taskbegin", "", {"Connection":"Keep-Alive"});
		#conn_obj.request("POST", "/func","param=0", {"Connection":"Keep-Alive"});
		response = conn_obj.getresponse();
		return response.read();
	except:
		return "error";
		
def workDone(port) :
	conn = httplib.HTTPConnection("127.0.0.1:1340");	
	url_open(conn);	
	conn.close();