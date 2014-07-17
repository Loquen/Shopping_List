$(document).ready(function() {

	$(".add").on("click", function() {
		/*Select text input div, grab text from text box
		create new HTML Radio button w/ unchecked class */
		var input = $('#textField').val();
		var clear = $("#textField").val("");
		
		$('.list').append("<li class ='unchecked item'><input type='checkbox' name='listItem' value='10'>" + input + "</li>");
		clear;
	});
});