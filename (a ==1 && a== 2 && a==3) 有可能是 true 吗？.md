(a ==1 && a== 2 && a==3) 有可能是 true 吗？

http://web.jobbole.com/93874/

前端大全  7月28日
（点击上方公众号，可快速关注）
英文：Dimpu Aravind Buddha  译文：elevenbeans
elevenbeans.github.io/2018/01/23/nothing-is-impossible-for-javascript/

一个有趣的问题：

在 JavaScript 中， (a ==1 && a== 2 && a==3) 是否有可能为 true ？

这是一道我被某科技公司问到的面试题。发生在两周之前，我仍然在努力寻找答案。

我知道我们从来不会在日常工作中写出这样的代码，但我对问题的答案仍然十分很好奇。

解法一：

利用松散相等运算符 == 的工作原理，你可以简单地创建一个带有自定义toString( 或者 valueOf)函数的对象，在每一次使用它时候改变它所的返回值，使其满足所有三个条件。

const a = {
  i: 1,
  toString: function () {
    return a.i++;
  }
}
if(a == 1 && a == 2 && a == 3) {
  console.log('Hello World!');
}
// Hello World!

之所以会得到如此结果，是由于表达式中使用了松散相等的运算符 ==。使用松散相等时，如果其中一个操作数与另一个类型不同，则 JS 引擎将尝试将一个操作转换为另一个类型。在左边对象、右边的数字的情况下，它会尝试将对象转换为一个数，首先通过调用 valueOf 如果是可调用的。否则，它会调用toString方法。我使用toString仅仅是因为它是我的第一反应，valueOf 会更合理。如果我不从toString返回一个字符串（而是返回数字），JS 引擎会尝试将字符串转换为一个数字，虽然有一个稍长的路径，但它仍然会给我们同样的结果。

解法二：

我不可否认——其他答案无疑是正确的，但你真的不能过错下面的代码：

var aﾠ = 1;
var a = 2;
var ﾠa = 3;
if(aﾠ==1 && a== 2 &&ﾠa==3) {
    console.log("Why hello there!")
}

请注意if 语句中的奇怪间距。它是半宽度韩文=,=。这是一个 Unicode 空格字符，但是 ECMAScript 不将其解释为一个空格 —— 这意味着它是一个有效的标识符。因此有三个完全不同的变量，一个是a后加半宽度韩文，一个是a， 一个是a前加半宽度韩文。。。

用下划线 _ 替代半宽度韩文，增加可读性，相同的代码看起来像这样：

var a_ = 1;
var a = 2;
var _a = 3;
if(a_==1 && a== 2 &&_a==3) {
    console.log("Why hello there!")
}

解法三：

这是完全可能的！

var val = 0;
Object.defineProperty(window, 'a', {
  get: function() {
    return ++val;
  }
});
if (a == 1 && a == 2 && a == 3) {
  console.log('yay');
}

使用一个get，让 a 的返回值为三个不同的值。然而这并不意味着我们应该在真正的代码中使用。。。

And so on …

总结

1. 利用松散相等运算符 == 的原理，自定义 toString 和 valueOf 返回对应值
2. 利用半宽度韩文等特殊字符，玩“障眼法”，本质上其实并没有做到题设
3. 劫持 JS 对象的 getter，不过这种方式对于严格相等 === 同样有效
