# practice
自己造一些轮子以及提炼平时项目中的内容

## MyPromise
基于自己对promise的理解简单的实现，实现了实例方法resolve, then , 以及工具方法resolve。
当然进一步可以结合Promise规范来实现，已经更多的实例方法和工具方法。

## 业务
有个需求抽象如下：
抽取一个对象中key为a,b,c,d,e，对应的值（为String类型）如果包含http,则需要将其值放到一个数组中，数组中的
值会进行异步操作，然后返回另外一个数组，然后需要将新返回的值按照之前的key值返回。

## leetcode
新建了一个leetcode的目录，主要是发现力扣刷题还蛮有意思的，故新建了这个目录，记录一下自己的刷题日常。
https://leetcode-cn.com

## modular 前端模块化解决方案
### requireJS
requireJs主要解决了两个问题：
1.管理模块间的依赖关系，便于代码的编写和维护
2.实现js文件的异步加载，避免网页失去响应