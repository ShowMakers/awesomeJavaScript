//节流--------放技能
function throttle(fn, delay) {
 let timer;
 return function () {
     let _this = this;//此处的this是指调用方
     if(!timer){
         timer = setTimeout(()=>{
             timer = null;
             fn.apply(_this,arguments);//在这里改变this指向
         },delay)
     }
 }
}

function resize(e) {
  console.log("窗口大小改变了");
}
window.addEventListener('resize', throttle(resize,500));


//防抖--------回城
function debounce(fn, ms) {
 let timer;
 return function () {
   clearTimeout(timer);
   timer = setTimeout(()=>fn.apply(this,args),ms);
 }
}

window.addEventListener(
  'resize',
  debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
);
