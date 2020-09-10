class quickUnion {
	// 空陣列
	// 有幾個 N，就給幾個 unique vlaue
	constructor(size) {
		this.forest = new Array(size);
		const len = this.forest.length;
		for (let i = 0; i < len; i++) {
			this.forest[i] = i;
		}
	}

	unionElements(treePrimary, treeSecondary) {
		const primaryRoot = this.find(treePrimary);
		const secondaryRoot = this.find(treeSecondary);

		if (primaryRoot === secondaryRoot) return;
		this.forest[primaryRoot] = this.forest[secondaryRoot];
	}

	isConncted(treeQ, treeP) {
		return this.find(treeQ) === this.find(treeP);
	}

	//查找元素所對應的編號
	find(id) {
		if (id < 0 || id >= this.forest.length) return;
		while (id !== this.forest[id]) id = this.forest[id];
		return id;
	}
}

// const a = new quickUnion(5);
// console.log(a.forest);
// console.log(a.unionElements(3, 4));
// console.log(a.find(3));



//Weighted Quick Union
class weightedQuickUnion {
	constructor(size) {
		this.forest = new Array(size);
		//每個節點都只有一個點，用來追蹤 size
		this.branch = new Array(size);

		const len = this.forest.length;
		for (let i = 0; i < len; i++) {
			this.forest[i] = i;
			// 紀錄size
			this.branch[i] = 1;
		}
	}

	unionElements(treePrimary, treeSecondary) {
		const primaryRoot = this.find(treePrimary);
		const secondaryRoot = this.find(treeSecondary);
		console.log(primaryRoot, secondaryRoot);
		console.log(this.branch[primaryRoot])

		if (primaryRoot === secondaryRoot) return;

		if (this.branch[primaryRoot] < this.branch[secondaryRoot]) {
			this.forest[primaryRoot] = this.forest[secondaryRoot];
			this.branch[secondaryRoot] += this.branch[primaryRoot];
		} else {
			this.forest[secondaryRoot] = this.forest[primaryRoot];
			console.log("primaryRoot", this.branch[primaryRoot]);
		}
	}

	find(id) {
		if (id < 0 || id >= this.forest.length) return;
		while (id !== this.forest[id]) id = this.forest[id];
		return id;
	}
}

const b = new weightedQuickUnion(9);
console.log(b.unionElements(4, 1));
