//Create an expandable unordered list with a click event 
/*$(document).ready(function(){
	$('.expandable1').on('click', function(event){
		//alert('hello');
		event.preventDefault();
		$('.op-hour-div').toggle();
	});
	$('.op-hour-div').on('click', function() {
		$(this).find('li').slideToggle('slow');
	}).on('click', function() {
		$(this).find('li').slideToggle('slow');
	});

	//Create an expandable unordered list with a click event
	$('.expandable2').on('click', function(event){
		//alert('hello');
		event.preventDefault();
		$('.parking-div').toggle();
	});
	$('.parking-div').on('click', function() {
		$(this).find('li').slideToggle('slow');
	}).on('click', function() {
		$(this).find('li').slideToggle('slow');
	});

	//Create an expandable unordered list with a click event
	$('.expandable3').on('click', function(event){
		//alert('hello');
		event.preventDefault();
		$('.public-transit-div').toggle();
	});
	$('.public-transit-div').on('click', function() {
		$(this).find('li').slideToggle('slow');
	}).on('click', function() {
		$(this).find('li').slideToggle('slow');
	});
});
*/

$(document).ready(function(){
	$('.expandable').on('click', function(event){
		event.preventDefault();
		if ($(this).siblings('div').toggle()){
			$(this).addClass('expanded').show();
		}else{
			$(this).removeClass('expanded').hide();			
		}
	});
});