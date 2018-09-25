class MetaHash {
	
	constructor(options = {}) {
		this.apiUrl = 'http://172.104.157.248:5795';
		this.tokenPrefix = 'MHC';
	}
	
	request(method, callback, params) {
		const query = {
			id: 1,
			method: method,
			params: params
		};
		fetch(this.apiUrl, {
			method: 'POST',
			body: JSON.stringify(query)
		})
		.then((response) => { return response.json(); })
		.then((data) => {
			if (data.result) callback(data.result); else callback(null, data.error);
		});
	}

	balanceFormatter(value) {
		return (value / 1000000).toFixed(6) + (this.tokenPrefix ? ' ' + this.tokenPrefix : '');
	}

	fetchBalance(address, callback) {
		this.request('fetch-balance', (res, err) => {
			if (res) {
				res.balance = this.balanceFormatter(res.received - res.spent);
				res.transaction_count = res.count_received + res.count_spent;
			}
			callback(res, err);
		}, {
			address: address
		});
	}

	fetchHistory(address, callback) {
		this.request('fetch-history', (res, err) => {
			if (res) {
				res = res.reverse();
				// for is for best perfomance
				for (let i = 0; i < res.length; i++) {
					res[i].value = this.balanceFormatter(res[i].value);
				}
			}
			callback(res, err);
		}, {
			address: address
		});
	}

	getTx(hash, callback) {
		this.request('get-tx', (res, err) => {
			if (res) {
				res = res.transaction;
				res.value = this.balanceFormatter(res.value);
			}
			callback(res, err);
		}, {
			hash: hash
		});
	}
	
}

const metahash = new MetaHash();