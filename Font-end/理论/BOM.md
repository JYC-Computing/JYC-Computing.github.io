BOM
浏览器对象模型 提供了一组用于操作浏览器窗口 文档和其他组件的对象和方法

bom是js和浏览器之间的接口 js可以与浏览器进行交互和控制

重要事件
onresize 浏览器窗口或元素的大小改变时触发
onscroll 当页面滚动或元素的滚动条滚动时触发
open 打开窗口
window.open(url,target,features);

url在新窗口中加载的什么路径
target 指定打开方式
默认_blank 在新窗口打开 _parent 加载到父框架
features 窗口的特性 大小
close
用于关闭窗口或标签页的方法, 在浏览器环境中，可以使用 window.close() 方法关闭当前窗口或标签页。这个方法只能关闭由 JavaScript 打开的窗口

<body> 
<input type="button" value="打开" onclick="a()">
 <input type="button" value="关闭" onclick="b()" name="" id=""> 
 <script> console.log(window) 
 // window 是浏览器的全局对象 
 // window.alert('哈哈') 
 //  alert('哈哈') 
 // 等价于省略了window.的简写形式 
  var x; function a(){
   x = window.open('https://www.bilibili.com/','_blank','width=800,height=1000')
   }
  function b(){ 
    x.close()
     }

</script>
</body>

location
location提供了与当前窗口的 URL 相关的信息和操作

location.protocol：获取或设置当前页面的协议（如 "http:" 或 "https:"）。
<!-- 计算机之间或客户端与服务器之间的通信规则和标准 规定了数据传输的格式 步骤 错误处理方式 核心作用定义浏览器与服务器之间如何传输页面内容

http 超文本传输协议 是基础的网页传输协议 不加密 数据以明文形式传输 存在安全风险
https 安全超文本传输协议 是http安全版本 基于ssl/tls加密技术 传输的数据被加密
file 本地文件协议 用于访问本地计算机上的文件 双击打开本地html文件 浏览器地址栏就会显示-->
<!-- www.xxx.com 网站的域名 --> <!-- .org .net .cn .edu -->

location.port：获取当前页面的端口号
location.host：获取当前页面的主机名和端口号。 <!-- 127.0.0.1 本地回环地址 测试本地服务 -->
<!-- 5500 端口号 数字标识 范围0-65535 区分同一台设备上不同服务进程 一台电脑同时运行了 网页 聊天软件 端口号会帮网络数据找到对应的服务 -->

location.hostname：获取当前页面的主机名。

location.search：获取当前页面的查询参数部分（即 URL 中的问号后面（查询参数）的部分

location.hash：获取或设置当前页面的片段标识符（即 URL 中的井号后面的部分）

location.replace(url)：用指定的 URL 替换当前页面，无法通过浏览器的后退按钮返回。

location.reload()：重新加载当前页面

history
访问和操作浏览器的历史记录

history.length：获取当前历史记录中的页面数量。

history.back()：导航到上一个页面，相当于用户点击浏览器的后退按钮。

history.forward()：导航到下一

history.go(delta)：导航到相对于当前页面的偏移量为 delta 的页面。例如，history.go(-1) 相当于 history.back()，history.go(1) 相当于 `history.forward()

可视区宽高
window.innerWidth

window.innerHeight

包含滚动条的宽度
document.documentElement.clientWidth

document.documentElement.clientHeight

不包含滚动条
元素宽高
element.clientWidth element.clientHeight

是用于获取元素的可见宽度和高度的属性

不包含滚动条的宽度

element.offsetWidth element.offsetHeight

是用于获取元素的完整宽度和高度的属性

包含滚动条的宽度

element.scrollWidth element.scrollHeight

是用于获取元素内容的完整宽度和高度的属性

元素距离
element.offsetLeft element.offsetTop
用于获取当前元素相对于其「最近的已定位祖先元素（offsetParent）」的左偏移 / 上偏移量

element.offsetParent 找到距离自身最近具有定位样式的祖先元素
滚动距离
element.scrollTop element.scrollLeft

用于获取或设置元素(页面)滚动条的垂直和水平滚动位置的属性
window.pageYOffset window.pageXOffset

用于获取文档在垂直和水平方向上相对于视口的滚动偏移量的属性。

element.clientLeft element.clienTop

用于获取元素的左边框的宽度和上边框的宽度

自定义窗口位置
window.scrollTo({ top: 1000, left: 500, behavior: "smooth"});

top 指定沿 Y 轴滚动窗口或元素的像素数。

left 指定沿 X 轴滚动窗口或元素的像素数。

behavior

smooth 表示平滑滚动并产生过渡效果、
instant 表示滚动会直接跳转到目标位置，没有过渡效果。