class ParallelExecutor {
		 	constructor(parallel) {
		 		this.parallel = parallel
		 		this.isRunning = false
		 		this.tasks = []
		 	}

		 	push(task) {
		 		this.tasks.push(task);
		 		this.run();
		 	}

		 	async run() {
		 		while(this.tasks.length) {
		 			let result = []
		 			let len = Math.min(this.parallel, this.tasks.length);
		 			for(let i = 0; i < len; i++) {
		 				const task = this.tasks.shift()
		 				result.push(task())
		 			}
		 			await Promise.all(result)
		 		}
		 	}
		 }

//2.---
class ParallelExecutor {
		 	constructor(parallel) {
		 		this.parallel = parallel
		 		this.tasks = []
		 		this.isRun = 0
		 	}

		 	push(task) {
		 		this.tasks.push(task);
		 		if(this.isRun < this.parallel) {
		 			this.run()
		 		}
		 	}

		 	async run() {
		 		if(this.isRun < this.parallel) {
		 			let len = Math.min(this.parallel - this.isRun, this.tasks.length)
		 			for(let i = 0; i < len; i++) {
		 				let task = this.tasks.shift()
		 				task().then(res => {
		 					this.isRun = this.parallel - 1
		 					this.run()
		 				})
		 			}
		 		}

		 	}
		 }