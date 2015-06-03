QUnit.module("testing checkString()");

QUnit.test("checkString handles empty val parameter", function (assert) {
	assert.equal(checkString(), false, 'function returns false with no parameter');
});

QUnit.test("checkString returns a string, given a string as input", function (assert) {
	var myStr = "asdf";
	assert.equal(typeof checkString(myStr), "string" , 'function returns false with no parameter');
});

QUnit.test("checkString returns a string with no whitespace", function (assert) {
	var myStr = " as df ";
	assert.equal(checkString(myStr), "asdf" , 'function returns false with no parameter');
});

QUnit.module("test for checkForm()", {
	beforeEach : function () {
		this.form = new CheckForm();
		this.form.init('myForm');
	}, afterEach : function () {
		delete this.form;
	}
});

QUnit.test("false returned if no form object", function (assert) {
	assert.equal(this.form.checkField(), false, "expecting function to return false");
	assert.equal(this.form.checkField('sdf'), false, "expecting function to return false");
});

QUnit.test("init() successfully binds form specified by id", function (assert) {
	assert.ok(this.form.init('myForm'));
});

QUnit.test("returns false if cannot find field", function (assert) {
	assert.equal(this.form.checkField('asds','dfdf'), false);
});

QUnit.test("returns false if cannot find constraint", function (assert) {
	assert.equal(this.form.checkField('firstName','sdsdd'), false);
});

QUnit.test("returns true if firstname is not blank", function (assert) {
	$("#myForm input[name=firstName]").val("Andy");
	assert.equal(this.form.checkField('firstName', 'NOTBLANK'), true);
});

QUnit.test("returns flase if firstname is blank", function (assert) {
	$("#myForm input[name=firstName]").val("");
	assert.equal(this.form.checkField('firstName', 'NOTBLANK'), false);
});

QUnit.test("firstName should not be blank and should be alpha", function (assert) {
	$("#myForm input[name=firstName]").val("asdf");
	assert.equal(this.form.checkAll(), true);
	$("#myForm input[name=firstName]").val("1234");
	assert.equal(this.form.checkAll(), false);
});  	