function getWindowWidth() {
	return Math.max( $(window).width(), window.innerWidth);
}

jQuery(document).ready(function($) {
	
	$('body').scrollspy({ 
		target: '.bt-docs-sidebar',
		offset: 0
	});
	
	$(window).load(function() {
		$('body').scrollspy('refresh');
	});
	
	var mainSidebar = $('.bt-docs-sidebar');
	var sidebarOverlay = $('.sidebar-overlay');
	var mainSidebarWidth = $('.bt-docs-sidebar').innerWidth();
	var windowWidth = getWindowWidth();
	$(window).on('resize', function () {
		var windowWidth = getWindowWidth();
	});
	
	if (windowWidth > 991) {
		mainSidebar.css('width', mainSidebarWidth);
		sidebarOverlay.css('width', mainSidebarWidth);
		sidebarOverlay.css('right', mainSidebarWidth*-1);
	}
	
	$(window).on('resize', function () {
		if (windowWidth > 991) {
			mainSidebar.css('width', mainSidebarWidth);
			sidebarOverlay.css('width', mainSidebarWidth);
			sidebarOverlay.css('right', mainSidebarWidth*-1);
		}
	});
	
	if(!$('body').hasClass('mobile')) {
		$(window).scroll(function(){

			var mainSidebar = $('.bt-docs-sidebar');
			
			var scroll = $(this).scrollTop();
			var headerHeight = $('.bt-docs-header').innerHeight() + 50;
			var windowWidth = getWindowWidth();
			
			$(window).on('resize', function () {
				var scroll = $(this).scrollTop();
				var headerHeight = $('.bt-docs-header').innerHeight() + 50;
				var windowWidth = getWindowWidth();
			});
			
			if (windowWidth > 991) {
				if (scroll > headerHeight) {
					mainSidebar.addClass('affix');
					mainSidebar.removeClass('affix-top');
					$('body').scrollspy('refresh');
				} else {
					mainSidebar.addClass('affix-top');
					mainSidebar.removeClass('affix');
					$('.affix-top .nav li').removeClass('active');
					$('body').scrollspy('refresh');
				}
			}
			
		});
	};
	
	
	
	
	
	
	$('.bt-docs-sidenav li').click(function () {
		$('.bt-docs-sidenav li').removeClass('active');
		$(this).addClass('active');
	});
	
	
	
	
	/* ==============================================
    Smooth Scroll
    =============================================== */

    var scrollAnimationTime = 1000,
        scrollAnimation = 'easeInOutExpo';

	$('a.back-to-top').bind('click.smoothscroll',function (event) {
        event.preventDefault();

        var target = this.hash;
        var elTarget = $(target).offset().top + 0;

        $('html, body').stop().animate({
            'scrollTop': elTarget
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });

    });
	
	$('.bt-docs-sidenav a.scrollto').bind('click.smoothscroll',function (event) {
        event.preventDefault();

        var target = this.hash;
        var elTarget = $(target).offset().top + 1;

        $('html, body').stop().animate({
            'scrollTop': elTarget
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });

    });

});