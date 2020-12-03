const fs = require('fs');

// const data = fs.readFileSync('./fileFolder/input.txt');

// const data = fs.readFileSync('./fileFolder/input.json');
// console.log(data.toString())

// console.log('执行完毕')

fs.readFile('./fileFolder/input.txt', function(err, data) {
	if (err) {
		console.log(err);
		return;
	}
	console.log(data.toString())
})