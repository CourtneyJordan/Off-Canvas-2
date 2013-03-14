// Bind click event to open/close menu
document.getElementById('open-menu').onclick = function() {

	if ($('html').hasClass('active-nav')) {

		$('html').removeClass('active-nav');

	} else {

		$('html').addClass('active-nav');
	}

	return false;
	
}