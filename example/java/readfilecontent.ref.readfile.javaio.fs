
 function readfile ()  throws exception 
 {
	
	FileInputStream fis = new FileInputStream;
	InputStreamReader isr = new InputStreamReader(fis);
	BufferedReader br = new BufferedReader(isr);
	
	str = br.readLine;  // read out the line content in file 
	// do anything needed 
 
 
 
 }
 
 
 
 function loadline 
	ifstream f;
	f.open addr ;
	while !f.eof
		f.getline sentence,100
		print sentence 
	end of while 
	
