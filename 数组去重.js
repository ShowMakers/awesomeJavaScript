//判断数组内值是否是唯一的
function isUnique(arr){
  return arr.length === new Set(arr).size;
}
const arr1 = [1,"1",2,3,4,5];
// console.log(isUnique(arr1));



function sleep(duration) {
  return new Promise(function(resolve, reject) {
      console.log("b");
      setTimeout(resolve,duration);
  })
}
// sleep(5000).then(()=>console.log("c"));

//使用map对数组对象元素属性去重
const arr2 = [
  {name:"asd"},
  {name:123},
  {name:"asd"},
  {name:456}
];

let map = new Map();
function onlyOne(){
  arr2.forEach(item=>{
    console.log(map,"map");
    if(!map.has(item.name)){
      map.set(item.name,item)
    }
  })
}
onlyOne();
const arr3 = [...map.values()];
console.log(arr3,"雅虎");

