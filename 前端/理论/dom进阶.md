添加移除css类
添加css类 x.classList.add('box','box1')

移除css类 x.classList.remove('box')

有就移除 没有就添加 x.classList.toggle('box') <!-- 用于开关式交互 按钮切换元素的高亮状态 夜间模式切换 -->

检查元素有没有 返回布尔值 x.classList.contains('box')

属性列表
attributes 表示元素节点的属性列表 var aa = document.getElementById('aa') console.log(aa.attributes)

获取属性节点 console.log(aa.getAttribute('id'))

设置属性节点 aa.setAttribute('href','https://www.bilibili.com/')

删除属性节点 aa.removeAttribute('href')

自定义属性 aa.dataset.haha = '自定义'

nodeType 节点类型
nodeName 节点名称
nodeValue 节点的文本值
childNodes 子节点
节点名称	nodeType	描述
元素节点	1	表示 HTML 元素，如 <div>, <p>, <a> 等
属性节点	2	表示元素节点的属性。 以键值对的形式存在，如 id="myElement"
文本节点	3	表示元素节点中的文本内容
实体引用名称节点	5	一种将特殊字符表示为实体的机制,例&lt; 表示小于符号 <
实体名称节点	6	通常用于表示特殊字符、预定义的字符串或外部实体资源
处理指令节点	7	它们通常以 <? 开始，以 ?> 结束，并位于文档的开头或其他位置
注释节点	8	表示 HTML 中的注释内容
文档节点	9	表示整个 HTML 文档
文档类型节点	10	表示文档的类型声明，如 <!DOCTYPE html>
文档片段节点	11	表示document.createDocumentFragment()
DTD声明节点	12	它通常位于文档的开头，并使用 <!DOCTYPE html PUBLIC....> 标记进行声明
1 3 8

获取名字
获取类名 console.log(aa.className)

修改class类名 aa.className = 'cla'

获取id名 aa.id = 'dd' console.log(aa.id)

节点API
children 返回一个包含父节点的所有元素子节点 只包含元素节点
<p id="demo"> <a href="">aa</a> 文本 <span></span> </p> <script> var x = document.getElementById('demo') console.log(x) console.log(x.children) </script>

parentNode表示当前节点父节点 console.log(x.parentNode)

offsetParent 返回一个最近的已定位的祖先元素 如果没有那就是根元素 console.log(aa.offsetParent)

firstElementChild 属性返回父节点的第一个子元素节点（不包括文本节点和注释节点），而 firstChild 属性返回父节点的第一个节点，可能是元素节点、文本节点、注释节点等。

lastElementChild 属性返回父节点的最后一个子元素节点（不包括文本节点和注释节点），而 lastChild 属性返回父节点的最后一个节点，可能是元素节点、文本节点、注释节点等。

nextElementSibling 属性返回下一个兄弟元素节点（不包括文本节点和注释节点），而 nextSibling 属性返回下一个兄弟节点，可能是元素节点、文本节点、注释节点等。

-previousElementSibling 属性返回前一个兄弟元素节点（不包括文本节点和注释节点），而 previousSibling 属性返回前一个兄弟节点，可能是元素节点、文本节点、注释节点等

创建节点
createElement(tagName) 方法用于创建一个指定标签名的元素节点

createTextNode(text) 方法用于创建一个包含指定文本内容的文本节点

添加
appendChild添加指定的元素到末尾

insertBefore(newNode, referenceNode)方法用于将一个新的子节点插入到指定元素的子节点列表中的某个已存在的子节点之前

替换
replaceChild(newNode, oldNode) 用于用新节点替换指定元素的子节点, 返回被替换的旧节点
移除
removeChild(childNode) 方法是在父节点上调用的方法，用于从父节点中移除指定的子节点

remove()方法是在节点自身上调用的方法

