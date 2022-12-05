# 手写题

## [1. 数组转换](https://blog.csdn.net/weixin_45584346/article/details/126587827)
[我的解](https://gist.github.com/dingxyang/4bc95dcad3c4fbde60a36a977868a8fa)
- 数组API  
- Set的使用，主要是数组去重  
- number string 类型的转化
[字符串连接 (+) 和 模板字符串或者 String.prototype.concat()区别？](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)

::: warning
加法强制将表达式转为基本类型，它优先调用 valueOf()；  
模板字符串和 concat() 则强制将表达式转为字符串，它们优先调用 toString()。  
如果表达式有 @@toPrimitive 方法，字符串连接时会用 "default" 作为 hint 调用它，然而模板字符串则用 "string"。  
这对于具有不同的字符串和原始值表现的对象来说很重要——例如 Temporal，它的 valueOf() 方法会抛出错误。
:::