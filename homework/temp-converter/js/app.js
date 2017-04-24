


$('#celsius').keyup(function() {
  var cel =  $('#celsius').val();
  cel = parseInt(cel);
var fahr = (cel * 1.8) + 32;
$('#fahrenheit').val(fahr);
});

$('#fahrenheit').keyup(function() {
  var fahr =  $('#celsius').val();
  fahr = parseInt(fahr);
var cel = (fahr -32) / 1.8;
$('#celsius').val(cel);
});


