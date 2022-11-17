$('#menuFaq').on('show.bs.collapse', function () {
	$('.titulo-principal').css('transform', 'translate(-50%, -25%)');
});

$('#menuFaq').on('hide.bs.collapse', function () {
	$('.titulo-principal').css('transform', 'translate(-50%, -50%)');
});