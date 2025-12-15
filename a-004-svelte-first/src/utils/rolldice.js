export const roll = async () => {
	return new Promise((fulfill, reject) => {
		setTimeout(() => {
			if (Math.random() < 0.3) {
				reject(new Error('Request Failed'));
				return;
			}

			fulfill(Math.floor(Math.random() * 6) + 1);
		}, 1000);
	});
};
