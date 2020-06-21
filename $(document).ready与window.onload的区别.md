https://www.cnblogs.com/fengchaoran/p/7493803.html

$(document).ready和window.onload都是在页面加载完执行的函数，大多数情况下差别不大，但也是有差别的。

$(document).ready:是DOM结构绘制完毕后就执行，不必等到加载完毕。意思就是DOM树加载完毕，就执行，不必等到页面中图片或其他外部文件都加载完毕。并且可以写多个.ready。

window.onload:是页面所有元素都加载完毕，包括图片等所有元素。只能执行一次。

所以，$(document).ready的执行时间要早于window.onload。并且可以写多个，看代码：

```
//以下代码无法正确执行： 
window.onload = function()
{ 
alert(“text1”); 
}; 
window.onload = function()
{ 
alert(“text2”); 
}; 
//结果只输出第二个 能同时编写多个 
//以下代码正确执行： 
$(document).ready(function()
{ 
alert(“Hello World”); 
}); 
$(document).ready(function()
{ 
alert(“Hello again”); 
}); 
//结果两次都输出
```

如果需要获取DOM绑定元素的属性值时，最好使用window.onload,因为他是在所有元素加载完毕才执行，如果使用$(document).ready，DOM已经加载，但是DOM绑定的元素属性没有加载，所以属性不生效。要解决这个问题，可以使用 Jquery 中另一个关于页面加载的方法 ---load() 方法。 Load() 方法会在元素的 onload 事件中绑定一个处理函数。如果处理函数绑定给 window 对象，则会在所有内容 ( 包括窗口、框架、对象和图像等 ) 加载完毕后触发，如果处理函数绑定在元素上，则会在元素的内容加载完毕后触发。

```
//Jquery 代码如下： 
$(window).load(function ()
{ 

});
//等价于 JavaScript 中的以下代码 
Window.onload = function ()
{
 
}
```