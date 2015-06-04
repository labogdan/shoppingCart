QUnit.module("Weekend test", 
{
	beforeEach : function () 
	{
		weekend.date = new Date();
		weekend.weekdays = [1,2,3,4,5];
		weekend.weekends = [0,6];
	}, afterEach : function ()
	{
		delete weekend.date;
		delete weekend.weekdays;
		delete weekend.weekends;
	}
});

QUnit.test("Variable is namespaced", function () 
{
	expect(1);
	ok(window.weekend, "weekend is namespaced");
});

QUnit.test("weekend expects an argument of type Date", function ()
{
	expect(2);
	
	failDate = [];
	
	notStrictEqual(weekend.isWeekend(), 'error', 'needs to return error if no date passed to method');
	equal(weekend.isWeekend({date : failDate}), 'invalid', 'needs to return error if object not type Date');
});

test("plugin returns true | false for each day of the week", function ()
{
	equal($.inArray(1, weekend.weekdays), 0, "weekday value");
	equal($.inArray(0, weekend.weekends), 0, "weekend value");
});

test("various dates work", function ()
{
	isSunday = new Date("June 7, 2015");
	equal(weekend.isWeekend({date : isSunday}), true, "Sunday is a weekend");
	isMonday = new Date("June 8, 2015");
	equal(weekend.isWeekend({date : isMonday}), false, "Monday is a weekday");
	isTuesday = new Date("June 9, 2015");
	equal(weekend.isWeekend({date : isTuesday}), false, "Tuesday is a weekday");
	isWednesday = new Date("June 10, 2015");
	equal(weekend.isWeekend({date : isWednesday}), false, "Wednesday is a weekday");
	isThursday = new Date("June 11, 2015");
	equal(weekend.isWeekend({date : isThursday}), false, "Thursday is a weekday");
	isFriday = new Date("June 12, 2015");
	equal(weekend.isWeekend({date : isFriday}), false, "Friday is a weekday");
	isSaturday = new Date("June 13, 2015");
	equal(weekend.isWeekend({date : isSaturday}), true, "Saturday is a weekday");

});