QUnit.module("event test", 
		{
			beforeEach : function () {
				this.output = ""; 
			},
			afterEach : function () {
				delete this.output;
			}
		});

QUnit.test("Trigger event test", function (assert)
{
	var self = this;
	
	$("#example").on('click', {border : '2px solid green'}, changeBorder);
	
	$("#example").on('theColorIs:green', function ()
	{
		self.output = "the color is green";
	})
	.on('theColorIs:notGreen', function ()
	{
		self.output = "the color is not green";
	});
	
	$("#example").trigger('click');
	assert.equal(self.output, "the color is green");
});