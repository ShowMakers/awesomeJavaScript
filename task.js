function doSomething() {
  return Promise.resolve(1);
};

function doSomethingElse() {
  return Promise.resolve(2);
};
// 执行1
doSomething()
  .then(() => {
    return doSomethingElse()
  })
  .then(val => console.log('a', val))
// 执行2
doSomething()
  .then(() => {
    doSomethingElse()
  })
  .then(val => console.log('b', val))
// 执行3
doSomething()
  .then(doSomethingElse())
  .then(val => console.log('c', val))
// 执行4
doSomething()
  .then(doSomethingElse)
  .then(val => console.log('d', val))
