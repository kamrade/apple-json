module.exports = {
	itemsCount: 4,
	presets: {
		numberPayments: {
			type: 'number',
			range: [1000, 5000]
		},
		number_5000_12000: {
			type: 'number',
			range: [5000, 12000]
		},
		number_0_100: {
			type: 'number',
			range: [0, 100]
		},
		status: {
			type: 'select',
			range: ['captured', 'declined', 'voided', 'chargeback']
		}
	},
	object: {
		payments:{
			captured: 'number_5000_12000',
			declined: 'numberPayments',
			voided: 'number_0_100',
			chargeback: 'number_0_100'
		},
		refunds:{
			captured: 'numberPayments',
			declined: 'number_0_100'
		},
		payouts:{
			captured: 'numberPayments',
			declined: 'number_0_100'
		},
		blacklist: {
			anotherList: {
				superList: 'status',
				antiList: 'status',
				hyperList: 'status'
			}
		}
	}
}
