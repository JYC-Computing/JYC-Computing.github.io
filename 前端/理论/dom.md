DOM
js操作html文档的 通过代码动态修改文档内容 结构 样式

DOM对象
js操作html标签 获取对应的标签 称为dom对象 修改这个对象 就会映射到标签上
 <!-- 核心思想 就是把网页内容 当作对象来处理 -->

获取dom对象
根据css选择器来获取dom对象 document.querySelector()获取第一个元素
innerHTML 元素html内容 x.innerHTML = '凡凡<span>rap很棒</span>'

innerText 元素可见文本内容

作业 随机颜色
写一个随机颜色函数
获取body标签
生成随机颜色 （rgb（x,y,z） 十六进制推荐 #123456 每个数取值范围0-f for循环 字符串拼接）用到随机数 
<!-- text = '0123456789ABCDEF' 随机取0-15下标 text[10] -->
改变 .style.backgroundColor
<script>
document.querySelectorAll()获取全部 var x = document.querySelectorAll('div') 
// console.log(x[2]) console.log(x.length) for(var i = 0; i<x.length;i++){ console.log(x[i]) }
 </script>