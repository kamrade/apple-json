var helpers = (function() {

	var randomInteger = function(min, max) {
		var rand = min - 0.5 + Math.random() * (max - min + 1);
		rand = Math.round(rand);
		return rand;
	};

	var fillValueStrict = function(pattern, presets) {
		let result = {};
		let patternObject = pattern || {};
		let patternKeys = Object.keys(patternObject);

		for(let i = 0, l = patternKeys.length; i < l; i++) {

			if(typeof patternObject[patternKeys[i]] === 'object'){
				result[ patternKeys[i] ] = fillValueStrict( patternObject[patternKeys[i]], presets );
			} else {

				let currentKey = patternObject[patternKeys[i]];
				if(presets[currentKey]){
					var preset = presets[currentKey];
				} else {
					var preset = {
						type: 'number',
						range: [1, 100]
					}
				}

				switch(preset.type) {
					case 'number':
						let min = preset.range[0];
						let max = preset.range[1];
						result[patternKeys[i]] = randomInteger(min, max);
						break;
					case 'select':
						let selectFrom = preset.range;
						result[patternKeys[i]] = selectFrom[randomInteger(0, selectFrom.length - 1)];
				}

			}
		}

		return result;
	}

	let fillManyValuesStrict = function(pattern, presets, count) {
		let result = [];

		for (let i = 0; i < count; i++) {
			let res = fillValueStrict(pattern, presets);
			result.push(res);
		}
		return result;
	}

	return {
		randomInteger: randomInteger,
		fillValueStrict: fillValueStrict,
		fillManyValuesStrict: fillManyValuesStrict
	};
})();

module.exports = helpers;
