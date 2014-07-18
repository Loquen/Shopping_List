$(document).ready(function() {

	var number = 1;
	$(".add").on("click", function() {
		/*Select text input div, grab text from text box
		create new HTML Radio button w/ unchecked class */
		var input = $('#textField').val();
		var clear = $("#textField").val("");
		
		
		if(input != "") {
			$('#list').append("<input class ='unchecked item' type='checkbox' name='listItem' checked='checked' value='" + number + "'>" + input + "<p>" );
			clear;
			
		}
		number++;
	});

	var selected = [];
	$('#list').each(function() {
		if( $(this).prop("checked") ){
			selected.push($(this).attr('name'));
			console.log(selected);
		}
		
	})
	/*$(".list").change(function(){
		if($("input:checkbox").checked) {
			// Change class to "checked"
			console.log("checked");
			this.toggleClass("checked unchecked");
		} else {
			// Change class to "unchecked"
			console.log("unchecked");
			this.toggleClass("checked unchecked");
		}
	})*/
});