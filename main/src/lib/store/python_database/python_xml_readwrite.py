# this is for python xml data read & write functionality implementation

from xml.dom import minidom, Node

# see reference from the mobile screenshot


# function to read in the data first
def readFromDataBase():
	read_tag = "xml_data";
	xml_content={}
	
	# just provide some sample data first
	xml_content["1"] = ' "1 : ","write one GPS watcher","this is created incase I forget to turn off the gps switch after finishing using it","2015.1.1" '
	
	xml_content["2"] = ' "2 : ","url_deliver","deliver a url information between devices using camera, or picture, auto detect","2015.1.2" '
	

	return xml_content


# function for build a xml document
def build_xml(content):
	doc=minidom.Document()
	# create the root tag
	root=doc.createElement('root')
	doc.appendChild(root)
	# create 'ideas' tag
	ideas = doc.createElement('ideas')
	root.appendChild(ideas)
	# create a comment
	ideas.appendChild(doc.createComment("ideas list waiting for realization \"id\" : [title, detail, create_time]"))
	ideas.appendChild(doc.createTextNode(str(content)))
	
	# place to store the xml file
	xml_store_addr = 'D:\\movies\\REDX\\window_source\\storage\\xml\\ideas.xml'
	# save the xml file
	ideas_xml = open(xml_store_addr,'w')
	ideas_xml.write(doc.toprettyxml())
	ideas_xml.close()
	
if __name__ == '__main__':
	_content = readFromDataBase()
	build_xml(_content)
	
	