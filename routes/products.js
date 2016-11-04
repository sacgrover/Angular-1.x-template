var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {

	if(req.query.id) {
		sendProduct(res, req.query.id)	
	} else {
		sendListOfProducts(res)
	}
	  
});

function sendListOfProducts(res) {
	res.sendfile("public/products.json")
}

function sendProduct(res, id) {
	switch(id) {
		case "1":
			data = {
				id: 1,
				name: "Apple",
				price: 2
			}
			break; 
		case "2": 
			data = {
				id: 2,
				name: "Orange",
				price: 3
			}
			break;
		case "3":
			data = {
				id: 3,
				name: "Kiwi",
				price: 3
			}
			break;
		default:
			res.send(404).end()	
			return;
	}
	res.json(data)
}

module.exports = router;
