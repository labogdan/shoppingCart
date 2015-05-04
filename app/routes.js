
var ShoppingCart = require('./models/shoppingCart');

    module.exports = function(app) {

        // server routes ===========================================================

    	app.get('/api/shoppingCart', function(req, res) {
            
        	ShoppingCart.find(function(err, items) {

                if (err)
                    res.send(err);

                res.json(items); // return all items
            });
        })
        .post('/api/shoppingCart', function(req, res) {
        	
        	var cart = new ShoppingCart();
/*        	
        	cart.plan.id = req.body.plan_id;
        	cart.plan.name = req.body.plan_name;
        	cart.plan.price = req.body.plan_price;
        	cart.plan.quantity = req.body.plan_quantity;
        	cart.device.id = req.body.device_id;
        	cart.device.name = req.body.device_name;
        	cart.device.price = req.body.device_price;
        	cart.device.quantity = req.body.device_quantity;
  */      	
        	cart.id = req.body.id;
        	cart.name = req.body.name;
        	cart.price = req.body.price;
        	cart.quantity = req.body.quantity;

        	cart.save(function(err) {
        		if (err) {
        			res.send(err);
        		}
        		res.json('shopping cart created');
        	});
        })
        	.delete('/api/shoppingCart/:id', function (req, res) {
        		ShoppingCart.remove({
        			_id : req.params.id
        		}, function (err, shoppingCart) {
        			if (err) {
        				res.send(err);
        			}
        			res.json('shopping cart has been deleted');
        		});
        	});


        // frontend routes =========================================================

    	app.get('/cart', function(req, res) {
            
    		ShoppingCart.find(function(err, items) {

                if (err)
                    res.send(err);

                res.json(items);
            });
    		
        });

    	app.get('*', function(req, res) {
            
    		ShoppingCart.find(function(err, items) {

                if (err)
                    res.send(err);

                res.sendfile('./public/views/index.html', items);
            });
    		
        });

    };