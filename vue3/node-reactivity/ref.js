

let activeEffect
class Dep {
  constructor() {
    this.subs = new Set()
  }
  depend() {
    // 收集依赖
    if(activeEffect) {
      this.subs.add(activeEffect);
    }
  }
  notify() {
    // 数据变化，触发effect执行
    this.subs.forEach(effect => effect());
  }
}

function effect(fn) {
   activeEffect = fn;
   fn()
}

const dep = new Dep()


// ref大概的原理
function ref(val) {
  let _value = val;
  // 拦截，.value操作
  let state = {
    get value() {
      // 获取值，收集依赖
      dep.depend()
      console.log('get')
      return _value
    },
    set value(newValue) {
      // 修改，通知dep，执行这个依赖的effect函数
      _value = newValue;
      console.log('set')
      dep.notify();
    }
  }
  return state;
}

let state = ref(0)

effect(() => {
  // 这个函数内部，依赖state的变化
  console.log(state.value)
})

state.value ++;
// setInterval(()=>{
// },1000)