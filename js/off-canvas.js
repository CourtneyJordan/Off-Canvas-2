// Sticky Page Scroller
// From: http://www.rowsdower.org/javascript/?page=sticky_scrolling_element
var sticky_page_scroll = function(){
	var sticky_element_id="site"; //enter your sticky element's ID here...
	var min_y_distance=0; //enter the number of px from the viewport edge you wish to pad your sticky element by...
	var initial_y_pos;
	var initialize = function(){
		if(!document.getElementById(sticky_element_id)){
			setTimeout(function(){sticky_page_scroll.initialize();},5);
		}
		else{
			//save the initial vertical position of the element so we can find our threshold again later on...
			initial_y_pos=find_pos(document.getElementById(sticky_element_id))[1];
			//attach event handlers to watch changes in page scroll or dimensions...
			if(window.addEventListener){
				//for modern versions of IE and for FF, etc.
				window.addEventListener("scroll",scroll);
				window.addEventListener("resize",scroll);
			}
			else{
				//for older versions of IE that support this method rather than addEventListener...
				window.attachEvent("onscroll",scroll);
				window.attachEvent("onresize",scroll);
			}
			//go ahead and do the scroll check once right now before anything else happens (in case we've refreshed the page and are already scrolled down the page, for example)
			scroll();
		}
		//congratualtions, you are now initialized!
	}
	var find_pos = function(element){
		var curleft = curtop = 0;
		if(element.offsetParent){
			do{
				curleft += element.offsetLeft;
				curtop += element.offsetTop;
			}while(element = element.offsetParent);
		}
		return [curleft,curtop];
	}
	var posTop = function(){
		return typeof window.pageYOffset != 'undefined' ?  window.pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0;
	};
	var scroll = function(){
		var y = posTop(); //number of px we have so far scrolled down the page
		if(y>initial_y_pos-min_y_distance-1){
			//if we have scrolled more than our initial position, less the padding, less 1, then we switch up to fixed positioning and set our "top" value to the amount of padding we wanted...
			document.getElementById(sticky_element_id).style.position="fixed";
			document.getElementById(sticky_element_id).style.top=min_y_distance + "px";
			document.getElementById(sticky_element_id).style.zIndex=3000;
		}
		else{
			//otherwise, we assign absolute positioning and clear out the "top" value (setting it to zero, for my needs)...
			document.getElementById(sticky_element_id).style.position="absolute";
			document.getElementById(sticky_element_id).style.top="0px";
			document.getElementById(sticky_element_id).style.zIndex="";
		}
	};
	return{
		//make the initialize and scroll functions public so that we can use them...
		initialize:initialize,
		scroll:scroll,
		posTop: posTop
	};
}();


// Function for back button specifically
function menuBackButton(button) {

	// Unbind any click event
	$(button).off('click');

	// Check to see if another active-sub exists
	var activeSub = ($('.active-sub')) ?  $('.active-sub') : false;

	// Check for active menu
	if (activeSub.length > 0) {

		// Bind click event
		$(button).on('click', function(e) {

			// Remove actice class from submen panel
			$('#'+activeSub[activeSub.length-1]['id']).removeClass('active-sub');

			//
			menuBackButton(button);

			// Prevent Default Link Action
			e.preventDefault();

		});

		$(button).css('visibility','visible');

	} else {

		// There is no active menus hide the button.
		$(button).css('visibility','hidden');
		
	}

}

//Create an expandable unordered list with a click event 
$(document).ready(function(){
	$('.expandable1').on('click', function(event){
		//alert('hello');
		event.preventDefault();
		$('.op-hour-div').toggle();
	});
	$('.op-hour-div').on('mouseenter', function() {
		$(this).find('li').slideToggle('slow');
	}).on('mouseleave', function() {
		$(this).find('li').slideToggle('slow');
  });
});

//Create an expandable unordered list with a click event
$(document).ready(function(){
	$('.expandable2').on('click', function(event){
		//alert('hello');
		event.preventDefault();
		$('.parking-div').toggle();
	});
	$('.parking-div').on('mouseenter', function() {
		$(this).find('li').slideToggle('slow');
	}).on('mouseleave', function() {
		$(this).find('li').slideToggle('slow');
  });
});

//Create an expandable unordered list with a click event
$(document).ready(function(){
	$('.expandable3').on('click', function(event){
		//alert('hello');
		event.preventDefault();
		$('.public-transit-div').toggle();
	});
	$('.public-transit-div').on('mouseenter', function() {
		$(this).find('li').slideToggle('slow');
	}).on('mouseleave', function() {
		$(this).find('li').slideToggle('slow');
  });
});


// Check to see if the off-canvas is menu item exits
$(document).ready(function() {

	// Setup control to open/clode the main menu
	$('.open-menu').on('click', function(e){
		
		e.stopPropagation();

		// Check for the active menu body class
		var menu = $('html').hasClass('active-nav');

		if (menu) {

			var scrollTop;

			if ($('html').hasClass('fixed-header')) {

				// Get the current scroll distance from the page container
				scrollTop = $('#page').css('top');

				// Remove the 'px' from the value
				scrollTop = scrollTop.substring(0, scrollTop.length - 2);

				scrollTop = (parseInt(scrollTop) * -1);

				console.log(scrollTop);

				document.getElementById('page').style.top = "";

			}

			// Add the active menu statis
			$('html').removeClass('active-nav');

			window.scroll(0, scrollTop);

		} else {

			if ($('html').hasClass('fixed-header')) {

				// Find page section offset
				var pagePos = $('#page').offset().top - $(window).scrollTop(),
					pageWidth = $('#page').width();

				document.getElementById('page').style.top = pagePos + 'px';
				document.getElementById('page').style.width = pageWidth + 'px';

			}

			// Remove the menu
			$('html').addClass('active-nav');

		}

		// Prevent Default Link Action
		e.preventDefault();

	});

	// Function will travers a menu looking for those that have sub menus
	$('.main-menu ul a').each(function() {
		
		// Current link
		var menuLink = $(this);

		// Pull the href out of the link as it should be the menu panel to attack
		var submenu = menuLink.attr('href');

		// Check to see if the next element is a div
		if (menuLink.next('div')) {

			menuLink.on('click', function(e) {

				// Make the sub menu appear
				$('#'+submenu).addClass('active-sub');

				// Add click event
				menuBackButton('.main-menu-back');

				// Prevent Default Link Action
				e.preventDefault();

			});

		}

	});

	// Check to see if the page has been set to use a fix header
	if ($('html').hasClass('fixed-header')) {

		// Setup Sticky Header
		sticky_page_scroll.initialize();

	}

});
