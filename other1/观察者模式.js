var Observable = {
  callbacks: [],
  add: function(fn) {
    this.callbacks.push(fn);
  },
  fire: function() {
    this.callbacks.forEach(function(fn) {
      fn();
    })
  }
}
// sea.js源码 emit  slice