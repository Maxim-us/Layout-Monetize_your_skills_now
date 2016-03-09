$(document).ready(function(){	
	
	$('.select-par').css('display', 'none');
	
		$('.select-conclusion').click(function(){
		
		var ul_display = $('.select-par').css('display');
		if(ul_display == 'none'){			
			$('.select-par').css('display', 'block');
		}
		else{
			$('.select-par').css('display', 'none');
		}		
		
		$('.select-par li').click(function(){
			var obj_jq = $(this);
			var object_li = this;
			object_li.val = obj_jq.text();
			object_li.index = obj_jq.index();
			$('.select-conclusion').text(object_li.val);
			$('.par-input').val(object_li.val);
			$('.select-par').css('display', 'none');
		});
	});
	
})
