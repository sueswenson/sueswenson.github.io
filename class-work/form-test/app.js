$('#myForm').submit(function (event)  {
	event.preventDefault();

	console.log(event);

	var name = $('#name-input').val();
	$('#target').text(name);

})

$('#name-input').keyup(function (event) {
if (event.keycode === 13)  {
	console.log('You HIT ENTER')
}
})