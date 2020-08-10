function track() {

}

function trigger() {

}

function effect(fn, option) {

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
  const observed = new Proxy(target, baseHandler)
}

function computed() {

}