//数组的方法

const arr1 = [2,1,3,5,4];

//indexOf找到的话返回下标，未找到的话返回-1
// push返回值是数组长度,pop返回的是被删除元素的值
// shift返回的是被删除的元素的值，unshift返回的是数组长度
//splice的返回值是个数组
//concat用于拼接数组，返回值是拼接后的数组
//every用于测试一个数组内的所有元素是否 都能通过 某个指定函数的测试，它返回一个布尔值
const wuhu = (currentValue)=> currentValue<2;
console.log("every",arr1.every(wuhu));
//filter返回一个新数组, 数组中包含通过所提供函数实现的测试的所有元素。 
console.log("filter",arr1.filter(item=>item>3));
//find返回数组中满足测试函数的第一个元素的值
console.log("find",arr1.find(item=>item>1));
//findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
console.log("findIndex",arr1.findIndex(item=>item>3));
//flat用于扁平化数组
console.log("join",arr1.join(7));

console.log( typeof RegExp);

const result = [];

const arr = [];

function flatten(arr) {
  var res = [];
  arr.map(item => {
      if(Array.isArray(item.child)) {
          res = res.concat(flatten(item));
      } else {
          res.push(item);
      }
  });
  console.log(res);
  return res;
}

// flatten(arr)



const getFileName = (fileName="123.pdf")=>{
    return fileName.substring(fileName.lastIndexOf("."));
}

