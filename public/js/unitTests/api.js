module('test different $.ajax syntax', {
	beforeEach : function () {
		this.server = sinon.fakeServer.create();
	},
	afterEach : function () {
		this.server.restore();
		delete this.server;
	}
});

test('ajax2 function call - using promise', function (assert) {
	//var done = assert.async();
	this.server.respondWith('GET', 'url.to.mock.com',
			[200, {'Content-Type' : 'application/json'},
			 '{"firstName" : "Lena", "lastName" : "Bogdan"}']);
	ajax2();
	this.server.respond();
	ok(this.server.requests.length === 1, "one request sent");
	ok(this.server.responses.length === 1, "one response sent");
});

test('ajax3 function call - using promise', function (assert) {
	//var done = assert.async();
	this.server.respondWith('GET', 'url.to.mock.com',
			[200, {'Content-Type' : 'application/json'},
			 '{"firstName" : "Noah", "lastName" : "Bogdan"}']);
	ajax3();
	this.server.respond();
	ok(this.server.requests.length === 1, "one request sent");
	ok(this.server.responses.length === 1, "one response sent");
});

module("test ajax module", {
	beforeEach : function () {
		this.server = sinon.fakeServer.create();
		this.server.respondWith('GET', 'http://url.to.mock.com', 
				[200, {'Content-Type' : 'application/json'},
				 '{"firstName" : "Andy", "lastName" : "Bogdan"}']);
	},
	afterEach : function() {
		this.server.restore();
		delete this.server;
	}
});
QUnit.config.testTimeout = 3000;
test("make ajax call", function (assert) {
	//var done = assert.async();
	stop();
	testAjax(start);
	this.server.respond();
	ok(this.server.requests.length === 1, "one request sent");
	ok(this.server.responses.length === 1, "one response sent");
});

