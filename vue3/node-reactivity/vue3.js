const effectStack = [];
let targetMap = new WeakMap() // 存储所有reactive,所有key对应的依赖

function track() {
  // 收集依赖
  // reactive可能有多个
  const effect = effectStack[effectStack.length - 1];
}

function trigger() {

}

function effect(fn, option) {
  // 副作用
  // computed是一个特殊的effect
}

const baseHandler = {
  get(target, key) {
    const res = target[key]
    track(target, key);
    return res
  },
  set(target, key, val) {
    const info = {oldValue: target[key], newValue: val}
    target[key] = val;
    trigger(target, key, info);
  }
}

function reactive(target) {
  // target变成响应式
  const observed = new Proxy(target, baseHandler)
}

function computed() {

}