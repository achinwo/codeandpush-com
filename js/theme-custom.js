	/* ==============================================
	Page Loader
	=============================================== */

	$(window).load(function(){
		
		'use strict';
		
		$(".loader-item").delay(700).fadeOut();
		$("#pageloader").delay(1200).fadeOut("slow");
		
	});


	/* ==============================================
	Portfolio Sorting
	=============================================== */

	$(window).load(function () {
		$(function () {
			$('#Grid').mixitup({
				targetSelector: '.mix',
				filterSelector: '.filter',
				sortSelector: '.sort',
				buttonEvent: 'click',
				effects: ['fade', 'scale'],
				listEffects: null,
				easing: 'smooth',
				layoutMode: 'grid',
				targetDisplayGrid: 'inline-block',
				targetDisplayList: 'block',
				gridClass: '',
				listClass: 'selected',
				transitionSpeed: 600,
				showOnLoad: 'all',
				sortOnLoad: false,
				multiFilter: false,
				filterLogic: 'or',
				resizeContainer: true,
				minHeight: 0,
				failClass: 'fail',
				perspectiveDistance: '3000',
				perspectiveOrigin: '50% 50%',
				animateGridList: true,
				onMixLoad: null,
				onMixStart: null,
				onMixEnd: null
			});
		});
	
	});

	/* ==============================================
	Parallax Scrolling
	=============================================== */

	$(window).load(function(){
		
		'use strict';
		
		$.stellar({
			responsive: true,
			horizontalScrolling: false,
			verticalOffset: 40
		});
	});
	
	/* ==============================================
	Flexslider
	=============================================== */

	jQuery(window).load(function () {
		
		'use strict';
		
		
		$('#home-slider').flexslider({
			animation: "slide",
			controlNav: false,
			smoothHeight: true,
			directionNav: true,
			slideshowSpeed: 5000,          
			animationDuration: 5000,
			nextText:"",
			prevText:"",
			keyboardNav: true,
			easing: 'easeInOutBack',
			useCSS: true,				
			controlsContainer: ".flex-container",
				before: function(){
					$('.flex-caption').animate({'left':'0px','opacity':'0'},0,'easeOutBack'); 
				},
				after: function(){
					$('.flex-caption').animate({'left':'50px','opacity':'1'},800,'easeOutBack'); 
				},				
		});
		
		$('.flexslider').flexslider({
			animation: "slide",
			controlNav: false,
			startAt: 1,
			directionNav: true,
			prevText: "",
			nextText: "",
		});
	});

	/* ==============================================
	Isotope Masonary
	=============================================== */
	$(window).load(function(){
		$(function(){
			
			'use strict';
		
			var container = jQuery('#bloglist');
			container.masonry({
				layoutMode: 'fitRows'
			});
		
		});
	});
	
	/* ==============================================
	Scrolling Navigation
	=============================================== */
	
	$(document).ready(function () {
		
		'use strict';
		
		$('.scroll-link').on('click', function (event) {
			event.preventDefault();
			var sectionID = $(this).attr("data-id");
			scrollToID('#' + sectionID, 750);
		});
		
		// mobile nav toggle
		$('#nav-toggle').on('click', function (event) {
			event.preventDefault();
			$('#main-nav').toggleClass("open");
		});
		$('ul.nav li a').click(function () {
			$('ul.nav li a').removeClass('selected');
			$(this).addClass('selected');
			return false;
		});
		$('a.logo, #back-top a').click(function () {
			$('ul.nav li a').removeClass('selected');
			$('ul.nav li.home a').addClass('selected');
			return false;
		});
		
		// scroll function
		function scrollToID(id, speed) {
			var offSet = 50;
			var targetOffset = $(id).offset().top - offSet;
			var mainNav = $('#main-nav');
			$('html,body').animate({
				scrollTop: targetOffset
			}, speed);
			if (mainNav.hasClass("open")) {
				mainNav.css("height", "1px").removeClass("in").addClass("collapse");
				mainNav.removeClass("open");
			}
		}
	});
	
	/* ==============================================
	Responsive Videos
	=============================================== */
	
	$(document).ready(function () {
		
		'use strict';
		
		$(".media.video").fitVids();
	});
	
	/* ==============================================
	Fancybox Lightbox
	=============================================== */
	
	$(document).ready(function () {
		
		'use strict';
		
		$(".fancybox").fancybox({
			helpers: {
				overlay: {
					locked: false, // try changing to true and scrolling around the page
					title: {
						type: 'outside'
					},
					thumbs: {
						width: 50,
						height: 50
					}
				}
			}
		});
	});

	/* ==============================================
	Owl Carousel
	=============================================== */

	$(document).ready(function () {
		
		'use strict';
		
		//For Testimonial Slider
		$("#owl-home-slider").owlCarousel({
			items: 1, //10 items above 1000px browser width
			itemsDesktop: [1000, 1], //5 items between 1000px and 901px
			itemsDesktopSmall: [900, 1], // betweem 900px and 601px
			itemsTablet: [600, 1], //2 items between 600 and 0;
			itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
			autoPlay: true,
			navigation: false,
			responsive: true,
			pagination: true,
			lazyLoad: true,
			lazyFollow: true,
			lazyEffect: "backSlide",
			transitionStyle: "backSlide",
			responsiveRefreshRate: 200,
			responsiveBaseWidth: window,
			stopOnHover: true,
			navigationText: ["", ""],
		});
	
		//For Testimonial Slider
		$("#testimonial-slider").owlCarousel({
			items: 1, //10 items above 1000px browser width
			itemsDesktop: [1000, 1], //5 items between 1000px and 901px
			itemsDesktopSmall: [900, 1], // betweem 900px and 601px
			itemsTablet: [600, 1], //2 items between 600 and 0;
			itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
			autoPlay: true,
			navigation: false,
			responsive: true,
			pagination: true,
			lazyLoad: true,
			lazyFollow: true,
			lazyEffect: "backSlide",
			transitionStyle: "goDown",
			responsiveRefreshRate: 200,
			responsiveBaseWidth: window,
			stopOnHover: true,
			navigationText: ["", ""],
		});
	
		//For Client Slider
		$("#client-slider").owlCarousel({
			items: 4, //10 items above 1000px browser width
			itemsDesktop: [1000, 4], //5 items between 1000px and 901px
			itemsDesktopSmall: [900, 3], // betweem 900px and 601px
			itemsTablet: [600, 2], //2 items between 600 and 0;
			itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
			autoPlay: true,
			navigation: true,
			responsive: true,
			autoHeight: true,
			pagination: false,
			lazyLoad: true,
			lazyFollow: true,
			lazyEffect: "goDown",
			transitionStyle: "goDown",
			responsiveRefreshRate: 200,
			stopOnHover: true,
			navigationText: ["", ""],
		});
		
		//For Portfolio Slider
		$("#portfolio-slider").owlCarousel({
			items: 5, //10 items above 1000px browser width
			itemsDesktop: [1000, 4], //5 items between 1000px and 901px
			itemsDesktopSmall: [900, 3], // betweem 900px and 601px
			itemsTablet: [600, 1], //2 items between 600 and 0;
			itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
			autoPlay: true,
			navigation: true,
			responsive: true,
			autoHeight: true,
			pagination: false,
			lazyLoad: true,
			lazyFollow: true,
			lazyEffect: "goDown",
			transitionStyle: "goDown",
			responsiveRefreshRate: 200,
			stopOnHover: true,
			navigationText: ["", ""],
		});	
	});
	
	/* ==============================================
	Portfolio Hover Zoom 
	=============================================== */
	
	$(document).ready(function () {
		
		'use strict';
		// IN AND OUT EFFECT FOR CAROUSEL //
		$('.item-on-hover, .item-on-hover-white').hover(function () {
			$(this).animate({
				opacity: 1
			}, 500);
			//$(this).children('.hover-link, .hover-image, .hover-video').animate({ opacity: 1 }, 500);
		}, function () {
			$(this).animate({
				opacity: 0
			}, 500);
			//$(this).children('.hover-link, .hover-image, .hover-video').animate({ opacity: 0 }, 500);
		});
	});	
	
	/* ==============================================
	Portfolio Hover Zoom 
	=============================================== */
	
	$(document).ready(function () {

		'use strict';
			
		$('.skillbar').appear();
			$('.skillbar').on('appear', function () {			
			$(this).find('.skillbar-bar').animate({
				width: $(this).attr('data-percent')
			}, 6000);			
		});
	});
	
	/* ==============================================
	Animated Items
	=============================================== */	
	jQuery(document).ready(function($) {
	
		'use strict';
		
		$('.animated').appear();
	
			$('.animated').on('appear', function() {
				var elem = $(this);
				var animation = elem.data('animation');
				if ( !elem.hasClass('visible') ) {
					var animationDelay = elem.data('animation-delay');
					if ( animationDelay ) {
	
						setTimeout(function(){
							elem.addClass( animation + " visible" );
						}, animationDelay);
	
					} else {
						elem.addClass( animation + " visible" );
					}
				}
			});
	});	
	
	/* ==============================================
	Google Map
	=============================================== */
	
	$(document).ready(function () {

		'use strict';

		$("#map_extended").gMap({
			markers: [{
				address: "",
				html: '<h4>Office</h4>' +
					'<address>' +
					'<div>' +
					'<div><b>Address:</b></div>' +
					'<div>Envato Pty Ltd, 13/2<br> Elizabeth St Melbourne VIC 3000,<br> Australia</div>' +
					'</div>' +
					'<div>' +
					'<div><b>Phone:</b></div>' +
					'<div>+1 (408) 786 - 5117</div>' +
					'</div>' +
					'<div>' +
					'<div><b>Fax:</b></div>' +
					'<div>+1 (408) 786 - 5227</div>' +
					'</div>' +
					'<div>' +
					'<div><b>Email:</b></div>' +
					'<div><a href="mailto:info@mannatstudio.com">info@mannatstudio.com</a></div>' +
					'</div>' +
					'</address>',
				latitude: -33.87695388579145,
				longitude: 151.22183918952942,
				icon: {
					image: "images/pin.png",
					iconsize: [35, 48],
					iconanchor: [17, 48]
				}
			}, ],
			icon: {
				image: "images/pin.png",
				iconsize: [35, 48],
				iconanchor: [17, 48]
			},
			latitude: -33.87695388579145,
			longitude: 151.22183918952942,
			zoom: 16
		});
	});
	
	/* ==============================================
	Contaact Form
	=============================================== */
	
	$(document).ready(function () {

		'use strict';
		    
		jQuery("#contact_form").validate({
			meta: "validate",
			submitHandler: function (form) {
	
				var s_name = $("#name").val();
				var s_lastname = $("#lastname").val();
				var s_email = $("#email").val();
				var s_phone = $("#phone").val();
				var s_comment = $("#comment").val();
				$.post("contact.php", {
						name: s_name,
						lastname: s_lastname,
						email: s_email,
						phone: s_phone,
						comment: s_comment
					},
					function (result) {
						$('#sucessmessage').append(result);
					});
				$('#contact_form').hide();
				return false;
			},
			/* */
			rules: {
				name: "required",
	
				lastname: "required",
				// simple rule, converted to {required:true}
				email: { // compound rule
					required: true,
					email: true
				},
				phone: {
					required: true,
				},
				comment: {
					required: true
				}
			},
			messages: {
				name: "Please enter your name.",
				lastname: "Please enter your last name.",
				email: {
					required: "Please enter email.",
					email: "Please enter valid email"
				},
				phone: "Please enter a phone.",
				comment: "Please enter a comment."
			},
		});
	});
	
	/* ==============================================
	Contaact Form
	=============================================== */
	
	$(document).ready(function () {

		'use strict';

		$('input[placeholder]').each(function () {
			var $placeInput = $(this);
			if ('placeholder' in document.createElement('input')) {
				var placeholder = true;
			} else {
				var placeholder = false;
				$placeInput.val($placeInput.attr('placeholder'));
			}
			if (!placeholder) {
				$placeInput.focusin(function () {
					if ($placeInput.val() === $placeInput.attr('placeholder')) {
						$placeInput.val('');
					}
				})
				.focusout(function () {
					if ($placeInput.val() === '') {
						$placeInput.val($placeInput.attr('placeholder'));
					}
				});
			}
		});
	});
	
	
	/* ==============================================
	Revolution Slider
	=============================================== */
	
	$(window).load(function() {
		
		'use strict';
		
		var revolutionSlider = $("#page-slider");
		var pageSlider,
		startwidth = (revolutionSlider.parents("body.boxed").length) ? 960 : 1170;

		pageSlider = revolutionSlider.revolution({
			delay 			: 9000,
			startheight 	: 615,
			hideThumbs 		: 10,

			touchenabled 	: "on",
			onHoverStop 	: "on",
			startwidth 		: startwidth,

			navOffsetHorizontal : 0,
			navOffsetVertical 	: 0,

			stopAtSlide 	: -1,
			stopAfterLoops 	: -1,

			fullWidth 		: "on"
		});

		pageSlider.bind("revolution.slide.onloaded",function (e,data) {
			$(this).parent().css({
				background 	: "transparent",
				height 		: "auto",
				overflow 	: "visible"
			}).children().animate({'opacity':1},500);
		});

	});
	
	/* ==============================================
	Back To Top
	=============================================== */
	
	$(document).ready(function () {

		'use strict';
		
		$("#back-top").hide();		
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});
		});
	});
	
	$(document).ready(function () {
    $(".switch-button").click(function () {
        if ($(this).is(".open")) {
            $(this).addClass("closed");
            $(this).removeClass("open");
            $(".styleswitcher").animate({
                "left": "-220px"
            })
        } else {
            $(this).addClass("open");
            $(this).removeClass("closed");
            $(".styleswitcher").animate({
                "left": "0px"
            })
        }
    })
});
$(document).ready(function () {
	if($.cookie("css")) {
		$("link.alt").attr("href",$.cookie("css"));
	}
	$(".color-scheme a").click(function () {
		$("link.alt").attr("href", $(this).attr("rel"));
		$.cookie("css",$(this).attr('rel'), {expires: 365, path: '/'});
		return false
	});
	imgPathStart = "images/pattern/";
	imgPathEnd = new Array("pattern0.png", "pattern1.png", "pattern2.png", "pattern3.png", "pattern4.png", "pattern5.png", "pattern6.png", "pattern7.png", "pattern8.png", "pattern9.png");
	$(".background-selector li img").click(function () {
		backgroundNumber = $(this).attr("data-nr");
		$("body").css({
			background: "url('" + imgPathStart +
				imgPathEnd[backgroundNumber] + "')"
		})
	});
});