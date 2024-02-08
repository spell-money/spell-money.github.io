


$(document).ready(function () {

    $('.numbersOnly').on('keypress keydown', function (event) {
        if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 46) {
            event.preventDefault();
        }
    });

    $('.topTabBtn').click(function () {
        // Remove the 'active' class from all tabs
        $('.topTabBtn').removeClass('active');
        
        // Add the 'active' class to the clicked tab
        $(this).addClass('active');
        
        // Hide all tab content
        $('.topTabs_content').hide();
        
        // Show the relevant tab content
        $($(this).data('rel')).show();
    });

    $('.numbersOnly').on('input', function () {
        var inputValue = $(this).val();
        var numericValue = parseInt(inputValue);
        if (numericValue >= 1) {
            $(this).closest('.numberFieldParent').find('.numbersFieldRelBtn').removeClass('disabled');
        } else {
            $(this).closest('.numberFieldParent').find('.numbersFieldRelBtn').addClass('disabled');
        }
    });

	$("body").on("click", ".menuIcon", function () {
		if ($('body, html').hasClass("isOpenMenu")) {
			$('body, html').removeClass("isOpenMenu");
			$(".menuIcon").removeClass("open");
		} else {
			$('body, html').addClass("isOpenMenu");
			$(".menuIcon").addClass("open");
		}
	});


	$("body").click(function (e) {
		if (!$(e.target).is('.header_menu_main, .header_menu_main *, .menuIcon, .menuIcon *')) {
			$('body, html').removeClass("isOpenMenu");
			$(".menuIcon").removeClass("open");
		}
	});


	$("body").on("click", ".topTabBtn", function () {
		$(this).closest('ul').find('a.active').removeClass('active');
		$(this).addClass("active");
		$('.usdt_back_arrow').trigger('click')
		var rel = $(this).attr('data-rel');
		$('.topTabs_content').hide();
		$(rel).fadeIn();
	});

	$("body").on("click", ".stakingTabBtn", function () {
		$(this).closest('ul').find('a.active').removeClass('active');
		$(this).addClass("active");
		
		var rel = $(this).attr('data-rel');
		$(this).closest('.staking_tabs_main').find('.staking_tab_show').hide();
		$(rel).fadeIn();
		
	});

 

	$("body").on("click", ".usdt_bond_btn", function () {
		$('.bond_small_box').hide();
		$('.redeem-bonds-card').hide();
		$('.usdt_small_box_show, .usdt_back_arrow').fadeIn();
	});

	$("body").on("click", ".usdt_liquidty_btn", function () {
		$('.bond_small_box').hide();
		$('.redeem-bonds-card').hide();
		$('.usdt_lp_small_box_show, .usdt_back_arrow').fadeIn();
	});

	$("body").on("click", ".usdt_back_arrow", function () {
		$('.usdt_small_box_show, .usdt_back_arrow').hide();
		$('.usdt_lp_small_box_show, .usdt_back_arrow').hide();
		$('.redeem-bonds-card').fadeIn();
		$('.bond_small_box').fadeIn();
		$('.usdt_small_box_show .numbersOnly').val('');
		$('.usdt_small_box_show .hodlBtntab1_btn, .usdt_small_box_show .hodlBtntab2_btn').addClass('disabled');
		$('.usdt_small_box_show .staking_tabs_title ul li:first a').trigger('click')
		$('.usdt_lp_small_box_show .numbersOnly').val('');
		$('.usdt_lp_small_box_show .hodlBtntab1_btn, .usdt_small_box_show .hodlBtntab2_btn').addClass('disabled');
		$('.usdt_lp_small_box_show .staking_tabs_title ul li:first a').trigger('click')
		
		
	});

	
	// grid 

	//// grid dots deopdown
	$("body").on("click", ".grid_dots", function (e) {
		$(".grid_dots_dropdown").hide();
		$(this).closest('.grid_dots_main').find('.grid_dots_dropdown').show();
	});
	$("body").click(function (e) {
		if (!$(e.target).is('.grid_dots_dropdown *, .grid_dots, .grid_dots *')) {
			$(".grid_dots_dropdown").hide();
		}
	});

	//end ready
});


$(window).on('load', function() {
    $('.animated').each(function(index, element) {
        $(this).addClass('go');
    });

    setTimeout(function() {
        $('.animated').addClass('animate-once');
    }, 3000);  
});





