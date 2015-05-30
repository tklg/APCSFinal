/*
* Boop
*/
$('a[href*=#]:not([href=#])').click(function(e) {
	//e.preventDefault();
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
	        $('html,body').animate({
	            scrollTop: target.offset().top
	        }, 1000, 'easeInOutCubic');
	        //window.location.hash = target.selector;
	        return false;
        }
    }
});
$('.nav div').click(function(e) {
    $(e.target).children('a').click();
});