'use strict'

var thinky = require(__dirname+'/util/thinky.js');
var type = thinky.type;
var r = thinky.r;

var Location = thinky.createModel("Location", {
	id: type.number;
	createdAt: type.date().default(r.now)
    place_name: type.string(),
    category: type.string(),
    address: type.string(),
    city: type.string(),
    state: type.string(),
    zip_code: type.number(),
    country: type.string(),
    days_hours: type.string(),
    contact: type.string(),
    phone: type.number(),
    email: type.string(),
    site: type.string(),
    facebook: type.string(),
    twitter: type.string(),
    instagram: type.string(),
    latitude: type.number(),
    longitude: type.number(),
    notes: type.string()
});

Location.ensureIndex('id');

exports.list = function (req, res) {
	Location.orderBy({index: r.desc('id') }).run().then(function(locations) {
		res.json(locations);
	}).error(function(err){
		res.json({message: err});
	});
};

exports.add = function (req, res) {
	var location = new Location(req.body);
	location.save().then(function(result) {
		res.json(result);
	}).error(function(err) {
		res.json({message: err});
	});
};

exports.get = function (req, res) {
	Location.get(req.params.id).run().then(function(location) {
		res.json(location);
	}).error(function(err) {
		res.json({message: err});
	});
};

exports.delete = function (req, res) {
	Location.get(req.params.id).run().then(function(location) {
		location.delete().then(function(result) {
			res.json(result);
		}).error(function(err) {
			res.json({message: err });
		});
	}).error(function(err) {
		res.json({ message: err });
	});
};

exports.update = function (req, res) {
	Location.get(req.params.id).run().then(function(location) {
		if (req.body.place_name) {
			
		}
	}
}


