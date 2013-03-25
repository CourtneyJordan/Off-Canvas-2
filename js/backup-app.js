$(document).ready(function(){
	$('.expandable').on('click', function(event){
		event.preventDefault();
		if ($(this).siblings('div').toggle()){
			$(this).show();
		}else{
			$(this).hide();
		}
	});
});