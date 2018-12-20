$(function () {
    $(window).stellar({
        horzontal: true,
        verticalScrolling: false,
		hideDistantElements: false
    });
	
	$('.k-medows').hide();
	$('.m-whitney').hide();
	$('.m-shasta').hide();
	$('.t-sisters').hide();
	$('.b-gods').hide();
	$('.n-cascades').hide();
	
	// Waypoint triggers for information
	$('.page1_trigger').waypoint(function (direction) {
		if (direction == 'right') {
			$('.title').addClass('header');
			console.log('right');
			$('.title').stop().fadeToggle(500);
		}
		else {
			$('.title').removeClass('header');
			console.log('left');
			$('.title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
//	KENNEDY MEDOWS
	
		$('.c20').waypoint(function (direction) {
		if (direction == 'right') {
			$('.k_medows').removeClass('k_medows');
			console.log('right');
			$('.k-medows').stop().fadeIn(1000);
		}
		else {
			$('.k_medows').addClass('k_medows');
			console.log('left');
			$('.k-medows').stop().fadeOut(2000);
		}
	} , { horizontal: true });
	
//	MT WHITNEY
	
	$('.c29').waypoint(function (direction) {
		if (direction == 'right') {
			$('.m_whitney').removeClass('m_whitney');
			console.log('right');
			$('.m-whitney').stop().fadeIn(1000);
		}
		else {
			$('.m_whitney').addClass('m_whitney');
			console.log('left');
			$('.m-whitney').stop().fadeOut(2000);
		}
	} , { horizontal: true });
	
	//	MT SHAStA
	
	$('.c46').waypoint(function (direction) {
		if (direction == 'right') {
			$('.m_shasta').removeClass('m_shasta');
			console.log('right');
			$('.m-shasta').stop().fadeIn(1000);
		}
		else {
			$('.m_shasta').addClass('m_shasta');
			console.log('left');
			$('.m-shasta').stop().fadeOut(2000);
		}
	} , { horizontal: true });
	
	//	SISTERS
	
	$('.c60').waypoint(function (direction) {
		if (direction == 'right') {
			$('.t_sisters').removeClass('t_sisters');
			console.log('right');
			$('.t-sisters').stop().fadeIn(1500);
		}
		else {
			$('.t_sisters').addClass('t_sisters');
			console.log('left');
			$('.t-sisters').stop().fadeOut(2000);
		}
	} , { horizontal: true });
	
		//	SISTERS
	
	$('.c68').waypoint(function (direction) {
		if (direction == 'right') {
			$('.b_gods').removeClass('b_gods');
			console.log('right');
			$('.b-gods').stop().fadeIn(1500);
		}
		else {
			$('.b_gods').addClass('b_gods');
			console.log('left');
			$('.b-gods').stop().fadeOut(2000);
		}
	} , { horizontal: true });
	
	
	$('.c77').waypoint(function (direction) {
		if (direction == 'right') {
			$('.n_cascades').removeClass('n_cascades');
			console.log('right');
			$('.n-cascades').stop().fadeIn(1500);
		}
		else {
			$('.n_cascades').addClass('n_cascades');
			console.log('left');
			$('.n-cascades').stop().fadeOut(2000);
		}
	} , { horizontal: true });
	
		$('.c84').waypoint(function (direction) {
		if (direction == 'right') {
			$('.n_terminus').removeClass('n_terminus');
			console.log('right');
			$('.n-cascades').stop().fadeIn(1500);
		}
		else {
			$('.n_terminus').addClass('n_terminus');
			console.log('left');
			$('.n_terminus').stop().fadeOut(2000);
		}
	} , { horizontal: true });
	
	
//	$("body").mousewheel(function(event, delta) {
//
//      this.scrollLeft -= (delta * 1);
//    
//      event.preventDefault();
//	});
//    
	
	
    // When a user clicks on page2 link, go to page 2 SMOOTHLY
    $('.page1_link').click(function () {
        $(window).scrollTo('#page1', 1000);
    });
    $('.page2_link').click(function () {
        $(window).scrollTo('#page2', 1000);
    });
    $('.page3_link').click(function () {
        $(window).scrollTo('#page3', 1000);
    });
    $('.page4_link').click(function () {
        $(window).scrollTo('#page4', 1000);
    });
    $('.page1_link').addClass('selected');
    $('.layers').show();
	
	
    // When page2 hits the top of the window, update the nav links
    // ALSO, make .slowhow fade in
	
	$('.ct1').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c1').addClass('selected2');
			console.log('ct1');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c1').removeClass('selected2');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c1').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c2').addClass('selected2');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c2').removeClass('selected2');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c1').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c3').addClass('selected').fadeIn(2000);
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c3').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c2').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c4').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c4').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c3').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c5').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c5').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c4').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c6').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c6').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c4').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c6').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c6').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c5').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c7').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c7').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c6').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c8').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c8').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c6').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c8').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c8').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c6').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c8').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c8').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c7').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c9').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c9').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c8').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c10').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c10').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c9').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c11').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c11').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c10').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c12').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c12').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c11').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c13').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c13').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c12').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c14').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c14').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c13').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c15').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c15').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c14').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c16').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c16').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c15').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c17').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c17').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c16').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c18').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c18').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c17').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c19').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c19').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c18').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c20').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c20').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c19').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c21').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c21').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c20').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c22').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c22').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c21').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c23').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c23').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c22').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c24').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c24').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c23').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c25').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c25').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c24').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c26').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c26').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c25').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c27').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c27').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c26').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c28').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c28').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c27').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c29').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c29').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c28').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c30').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c30').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c28').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c30').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c30').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c29').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c31').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c31').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c30').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c32').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c32').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	
		$('.c31').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c33').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c33').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	
		$('.c32').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c34').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c34').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c33').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c35').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c35').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c33').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c35').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c35').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c34').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c36').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c36').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c35').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c37').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c37').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c36').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c38').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c38').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c37').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c39').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c39').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c38').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c40').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c40').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
			$('.c39').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c41').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c41').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c40').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c42').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c42').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c41').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c43').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c43').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c42').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c44').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c44').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c43').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c45').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c45').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c44').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c46').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c46').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c45').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c47').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c47').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c46').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c48').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c48').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c47').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c49').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c49').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c48').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c50').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c50').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c49').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c51').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c51').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c50').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c52').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c52').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c51').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c53').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c53').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c52').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c54').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c54').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c53').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c55').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c55').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c54').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c56').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c56').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c55').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c57').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c57').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c56').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c58').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c58').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c57').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c59').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c59').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c58').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c60').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c60').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c59').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c61').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c61').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c60').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c62').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c62').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c61').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c63').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c63').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c62').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c64').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c64').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c63').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c65').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c65').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c64').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c66').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c66').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c65').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c67').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c67').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c66').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c68').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c68').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c67').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c69').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c69').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c68').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c70').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c70').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c69').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c71').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c71').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c70').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c72').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c72').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c71').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c73').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c73').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c72').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c74').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c74').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c73').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c75').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c75').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c74').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c76').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c76').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c75').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c77').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c77').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c76').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c78').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c78').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c77').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c79').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c79').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c78').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c80').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c80').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c79').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c81').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c81').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c80').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c82').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c82').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c81').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c83').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c83').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c82').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c84').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c84').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c83').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c85').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c85').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c84').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c86').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c86').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c85').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c87').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c87').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c86').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c88').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c88').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c87').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c89').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c89').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c88').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c90').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c90').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c89').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c91').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c91').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c90').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c92').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c92').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c91').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c93').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c93').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c92').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c94').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c94').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
		$('.c93').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c95').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c95').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	$('.c94').waypoint(function (direction) {
		if (direction == 'right') {
			$('.c96').addClass('selected');
			console.log('c1 active');
			$('#title').stop().fadeToggle(1000);
		}
		else {
			$('.c96').removeClass('selected');
			console.log('left');
			$('#title').stop().fadeIn(2000);
		}
	} , { horizontal: true });
	
	//	DIALOG BOX
	
	$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(500);

        e.preventDefault();
    });

    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(500);

        e.preventDefault();
    });
});

	
	

    
});



