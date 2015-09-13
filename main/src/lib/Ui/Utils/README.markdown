常用js工具类：  
--

* 层拖动对象类，原理：  
	需要拖动的层包括两类对象： 主移动区域，鼠标拖动时事件区域（可以与前者一致），鼠标在事件区域按下时为其注册鼠标移动	以及鼠标释放事件，释放后移除。具体参考 cnblogs.com

		$.extend{

			objmove : function(obj){
				var settings = $.extend({
					containerid : "divpopwindow",
					dragids : [xxx],
					onMouseDownEvent : null,
					onMouseMoveEvent : null,
					onMouseUpEvent : null,
				})
				...
				
			}

		}