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
                scrollTop: target.offset().top + 1
            }, 1000, 'easeInOutCubic');
            setTimeout(function() {
	           window.location.hash = target.selector;
               console.log(target.selector);
            }, 1000);
	        return false;
        }
    }
});

$('#col-nav').on('activate.bs.scrollspy', function () {
  console.log($('#col-nav .active a').attr('href'));
  //window.location.hash = $('#col-nav .active a').attr('href');
});
/*$('.nav div').click(function(e) {
    $(e.target).children('a').click();
});*/