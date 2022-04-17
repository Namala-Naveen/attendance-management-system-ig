$(document).ready(function(){
	$error = $('&lt;center&gt;&lt;h2 class = "text-danger"&gt;You are not a student here...&lt;h2&gt;&lt;/center&gt;');
	$error1 = $('&lt;center&gt;&lt;h2 class = "text-danger"&gt;Please fill up the field&lt;h2&gt;&lt;/center&gt;');
	$('#login').click(function(){
		$error.remove();
		$error1.remove();
		$student = $('#student').val();
		if($student == ""){
			$error1.appendTo('#error');
		}else{	
			$.post('check.php', {student: $student},
				function(show){
					if(show == 'Success'){
						$.ajax({
							type: 'POST',
							url: 'login.php',
							data: {
								student: $student
							},
							success: function(result){
								$result = $('&lt;h2 class = "btn btn-primary"&gt;You have been login:&lt;/h2&gt;' + result).appendTo('#result');
								$('#student').val('');
								setTimeout(function(){
									$result.remove();
								}, 10000);
							}
						});
					}else{
						$('#student').val('');
						$error.appendTo('#error');
					}
				}
			)
		}	
	});
});