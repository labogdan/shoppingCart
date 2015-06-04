
var output = "";

function changeBorder (e)
{
	var border = e.data.border;
	
	this.style.border = e.data.border;
	
	if (border === '2px solid green')
	{
		$(this).trigger('theColorIs:green');
	} else
	{
		$(this).trigger('theColorIs:notGreen');
	}
}