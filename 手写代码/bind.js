// ...
// var a = [7,8,9]
// function func(...arr) {
// 	console.log(arr)
// 	console.log(arguments)
// }
// func(1,2,3)
// func(...a)
// this测试
//-----------------
// Function.prototype.testThis= function() {
// 	console.log(this) // this就是调用testThis的那个函数
// }
// function test() {
// 	console.log('test')
// }
// test.testThis(); // test函数



// function.bind(thisArg[, arg1[, arg2[, ...]]])
// 高程p603
Function.prototype.myBind = function(context, ...args) {
	let fn = this;
	return function(...rest) {
		return fn.call(context, ...args, ...rest)
	}
}

function test(){
	console.log('test')
	console.log(arguments)
}
test.myBind(null, 1,2,3)(4,5,6);