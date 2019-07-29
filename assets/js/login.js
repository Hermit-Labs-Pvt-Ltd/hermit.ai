$(document).on('click','#sign-in',function(){
	if( (($('#user-name').val())== 'test') &&  ( ($('#paswrd').val())=='test') )
	{
		window.location.replace('https://dashboard.hermit.ai/examples/typography.html');
	}
	else{
		$('#user-name').val('');
		$('#paswrd').val('')
	}
})