
	// functions to provide 
	// usage --  img.from.Bitmap("xx.bmp").construct();
	var from = {
	
		// several types of images can be parsed : png, bmp,jpg ... 
		Bitmap : function(addr){
			// return one constructure , addr is the pic addrress 
			return {
				construct : function(){
					// create function
					return {
						// functions to be for img object 
						getWidth : function(){
						
						},
						
						getHeight : function(){
						
						},
						
						getPixels : function(){
						
						},
						
						// free to implement some pic convert functions as well later 
					}
				},
			}
		
		},
	
	
	
	
	};