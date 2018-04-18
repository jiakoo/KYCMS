$(function() {
	setWindowSize($('.wrap'));
	
	$(window).resize(function() {
		setWindowSize($('.wrap'));
	});

	function setWindowSize($dom) {
		var wWidth = $(window).width();
		var wHeight = $(window).height();
		$dom.height(wHeight).width(wWidth);
	}

});