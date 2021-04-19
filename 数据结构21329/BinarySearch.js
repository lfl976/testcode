function BinarySearchTree() {
	var Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}

	 this.root = null;

	 var insertNode = function(node, newNode) {
	 	if(newNode.key < node.key) {
	 		if(node.left === null) {
	 			node.left = newNode;
	 		} else {
	 			insertNode(node.left, newNode);
	 		}
	 	} else {
	 		if(node.right === null) {
	 			node.right = newNode;
	 		} else {
	 			insertNode(node.right, newNode);
	 		}
	 	}
	 }

	 this.insert = function(key) {
	 	var newNode = new Node(key);
	 	if(this.root === null) {
	 		this.root = newNode;
	 	} else {
	 		insertNode(this.root, newNode);
	 	}
	 }
}

var tree = new BinarySearchTree()
for(let v of [11,7, 15, 5, 3, 9, 8,10,13,12,14,20,18,25]) {
	tree.insert(v)
}
console.log(tree)