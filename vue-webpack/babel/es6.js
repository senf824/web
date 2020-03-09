// const app = ()=>{
//     alert('1234567')
// }

const li = document.querySelectorAll('li');

// (Hoisting) javascript中的变量提升

// for(let i=0; i<li.length; i++){
//     li[i].onclick = ()=>{
//         console.log(i)
//     }
// }

// for(var i=0; i<li.length; i++){
//     ((i)=>{ // 自执行函数
//         li[i].onclick = ()=>{
//             console.log(i)
//         }
//     })(i)
// }

// 引用类型使用const定义的数组或者对象可以修改内容，但是不允许改变其类型。
// 引用类型的赋值不能用等号


// // babel会将es6的反引号 `` 里的中文转为unicode编码   
// const name = "abc";
// const msg = "你是个";
const str = `大傻蛋 aa 123`+ "";

console.log(str)
