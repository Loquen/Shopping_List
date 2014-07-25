$(document).ready(function() {

	var number = 1;
	$(".add").on("click", function() {
		/*Select text input div, grab text from text box
		create new HTML Radio button w/ unchecked class */
		var input = $('#textField').val();
		var clear = $("#textField").val("");
		
		
		if(input != "") {
			$('.list').append("<li class='item'><input type='checkbox' name='listItem' value='" + number + "'>" + input + "</li>" );
			clear;
			
		}
		number++;
	});

	// Function to check/uncheck items when the checkbox is clicked
	$('.list').on("click", function() {
		$(this).find('.item > input:checked').parent().addClass("checked");
		$(this).find('.item > input:not(:checked)').parent().removeClass("checked");	
	});

	// Function to remove items with the 'checked' class
	$('.delete').on('click', function(){
		if($('.item').hasClass("checked"))
		{
			$('.item').filter('.checked').hide().slideUp();
		}
	})
	
});