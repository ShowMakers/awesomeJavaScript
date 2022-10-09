const obj = {
  name: "张三",
  age: 20,
  sex: "男",
  friends: {
    name: "李四",
    age: 21
  }
}

function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`${key}属性被读取了`);
      return val;
    },
    set(newVal) {
      if (val === newVal) {
        console.log(`${key}属性被读取了`);
        return val
      }
      console.log(`${key}属性被修改了`);
      val = newVal;
    }
  })
}

defineReactive(obj,"name","王五");
console.log(obj.name);