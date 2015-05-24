




 var global = {
 
	
 
	render : function(document){
		// the html document obj
		var ButtonDiv = document.createElement("div");
		ButtonDiv.style.position = "absolute";
		// dp not set the opacity to 0 !!
		ButtonDiv.style.opacity = 49;
		ButtonDiv.style.fontFamily = "";
		ButtonDiv.innerHTML = "<Button> simple button </Button>";
		document.body.appendChild(ButtonDiv);
		
		// return the button render text content 
		return " var ButtonDiv = document.createElement('div');ButtonDiv.style.position = 'absolute';ButtonDiv.style.opacity = 49;ButtonDiv.innerHTML = '<Button> simple button </Button>';document.body.appendChild(ButtonDiv);";
	}
 
 }

	
  function Button(document){	

	var element = this.global;
	return element;
  
  }
  
  module.exports = {
	Button : Button
  }