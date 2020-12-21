class Dictionary {
	items = {};
	
	has(key) {
		return key in this.items;
	}

	set(key, value) {
		this.items[key] = value;
	}

	get(key) {
		return this.has(key) ? this.items[key] : undefined;
	}
	remove(key) {
		if(this.has(key)) {
			delete this.items[key];
		}
	}

	values() {
		return Object.values(this.items);
	}
	clear() {
		this.items = {};
	}
	size() {
		return Object.key(this.items).length;
	}
	getItems() {
		return this.items;
	}
}