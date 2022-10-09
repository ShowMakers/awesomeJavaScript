// class Person{
//   constructor(name,sex){
//     this.name= name;
//     this.sex = sex;
//   }
//   introduce(){
//     console.log(`我是${this.name}`);
//   }
// }

function Person(){
  console.log("我系构造函数");
}
let person = new Person();
console.log(person);

 
 
function copyTransFun (arr) {
  arr.forEach ((item) => {
    if (item.id) {
      item.supplierId = item.id;
      delete item.id;
  }
      if (item.supName) {
          item.supplierName = item.supName;
          delete item.supName;
      }
  });
  console.log(arr);
}

copyTransFun([
  {
      "id": 1,
      "supName":"芜湖"
  },
  {
      "id": 2,
      "supName":"芜湖"
  }
])