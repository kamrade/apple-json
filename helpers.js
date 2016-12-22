var helpers = (function() {

	var randomInteger = function(min, max) {
		var rand = min - 0.5 + Math.random() * (max - min + 1);
		rand = Math.round(rand);
		return rand;
	};

	var fillValueStrict = function(options) {
		// var result = { "a": 42 };
		var result = {};
		let patternObject = options.object || {};
		let patternKeys = Object.keys(patternObject);
		console.log(patternKeys);

		for(let j = 0, k = patternKeys.length; j < k; j++) {
			if(typeof patternObject[ patternKeys[j] ]) {
				result[patternKeys[j]] = fillValueStrict( patternObject[ patternKeys[j] ] );
			} else {
				result[patternKeys[j]] = this.randomInteger(0, 100);
			}
		}
		return result;
	}

	return {
		randomInteger: randomInteger,
		fillValueStrict: fillValueStrict
	};
})();

module.exports = helpers;
