// 1. Target all thumb nails with a click event

// 2 Get 'src' attribute of whatever image is clicked on

// 3. Update #bigthumb



$('.thumb').click(function () {
	var newSrc = $(this).attr('src');
	$('#bigimage').attr('src', newSrc);
});




// 

$('#first').click(function () {
	$('#bigimage').attr('src', 'img/1.jpg');
});

$('#second').click(function ()  {
	$('#bigimage').attr('src', 'img/2.jpg');
     });

$('#third').click(function ()  {
	$('#bigimage').attr('src', 'img/3.jpg')
});

$('#fourth').click(function()  {
	$('#bigimage').attr('src', 'img/4.jpg')
});
//