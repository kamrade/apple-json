var options = require('./options');
var helpers = (function() {

	var randomInteger = function(min, max) {
		var rand = min - 0.5 + Math.random() * (max - min + 1);
		rand = Math.round(rand);
		return rand;
	};

	var fillValueStrict = function() {
		var result = { "a": 42 };
		for (let i = 0, l = options.itemsCount || 1; i < l; i++) {
			let patternObject = options.object || {};
			let patternKeys = Object.keys(patternObject);
			console.log(patternKeys);
		}
		return result;
	}

	return {
		randomInteger: randomInteger,
		fillValueStrict: fillValueStrict
	};
})();

module.exports = helpers;
