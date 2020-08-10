const { ref, computed, effect } = require("@vue/reactivity");

let count = ref(1);
setInterval(() => {
  count.value++;
}, 1000);

effect(() => {
  console.log("count is: " + count.value);
});
