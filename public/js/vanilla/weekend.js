if (!window.weekend) window.weekend = {};

(function () 
{
	$.fn.isWeekend = function (options) 
	{
		var defaults, opts;
		defaults = {date : new Date()};
		opts = $.extend({}, defaults, options);
		weekdays = [1,2,3,4,5];
		weekends = [0,6];
		if(Object.prototype.toString.call(opts.date) === '[object Date]')
		{
			opts.dateOk = true;
			opts.day = opts.date.getDay();
			if ($.inArray(opts.day, weekends) != -1)
			{
				return true;
			} else if ($.inArray(opts.day, weekdays) != -1)
			{
				return false;
			}
		} else
		{
			return 'invalid';
		}
	};
	weekend.isWeekend = $.fn.isWeekend;	
})(jQuery);
