




var draggable = {
	
	function: onMouseDrag(){}
	
}

var droppable = {

	function: onMouseDrop(){}
	
}

var Resizable = {

	function: onMouseResize(){}
	
}

var selectable = {

	function: onMouseSelect(){}
	
}

var sortable = {

	function: onMousesort(){}
	
}


// following are for the file drag and drop action 
// assuming the 'doc' is a true document or file 
doc.bind({

'dragenter':function(e){
	$("#brsbox").addClass("dragbrowse");
	dropbox.addClass('shine')
	return false;
}

'dragleave':function(e){
	dropbox.removeClass("shine");
	return false;
}

'drop':function(e){

}

dropbox.bind({

	'dragenter':function .....
	
	'dragleave':function ....
})

})




