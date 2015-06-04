function checkString(val) {
	if (typeof val === 'undefined') return false;
	val = val.replace(/\s/g,"");
	return val;
}

function CheckForm(id) {
	this.NOTBLANK = /\S/;
	this.ALPHA = /[a-zA-Z]/;
}
CheckForm.prototype.init = function(id) {
	if (typeof id === 'undefined') return false;
	if ($("form#" + id).length < 1) return false;
	this.id = id;
	this.$form = $("#" + id);
	return true;
};
CheckForm.prototype.checkField = function (fieldName, constraint) {
	
	var field = $("form#" + this.id + " input[name='" + fieldName + "']");
	if (field.length < 1) return false;
	if (typeof this[constraint] == 'undefined') return false;
	
	return this[constraint].test(field.val());
};
CheckForm.prototype.checkAll = function ()
{
	var result = true;
	result = this.checkField('firstName', 'NOTBLANK');
	if (result === true) result = this.checkField('firstName', 'ALPHA');
	return result;
};
