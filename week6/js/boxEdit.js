// JavaScript Document

$(function() {
	$('#aHide').click(function() {
		$('#box').slideUp(2000);
	});
});

$(function() {
	$('#aShow').click(function() {
		$('#box').show(2000);
	});
});

$(function() {
	$('#aBlue').click(function() {
		$('#box').css('background', '#00F');
	});
});

$(function() {
	$('#aRed').click(function() {
		$('#box').css('background', '#F00');
	});
});

$(function() {
	$('#aSmall').click(function() {
		$('#box').css('height', 100);
		$('#box').css('width', 100);
	});
});

$(function() {
	$('#aLarge').click(function() {
		$('#box').css('height', 400);
		$('#box').css('width', 400);
	});
});
