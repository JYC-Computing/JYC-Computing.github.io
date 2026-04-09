css
书写位置
行内样式 <标签名 style="样式声明"> <p style="color: red;">行内样式</p>

内嵌样式 单独写在 style标签里面 <!-- 分离html和css 精准写出样式 编写简单 即时生效 --> <style> p{ color: red; } div{ color: blueviolet; } </style>

外联样式 新建css文件 通过link引入 <!-- 写完保存 --> <link rel="stylesheet" href="1.css">

html(管页面有什么内容结构 标题 文字) 和css（管页面好不好看 颜色 大小 位置）有啥区别？

颜色关键字：CSS中的颜色关键字是一组预定义的颜色名称，可以直接使用这些关键字来设置元素的颜色。

颜色关键字	中文解释
black	黑色
white	白色
red	红色
green	绿色
blue	蓝色
yellow	黄色
cyan	青色
magenta	洋红
aqua	水色
aquamarine	绿玉
azure	蔚蓝
beige	米色
brown	棕色
coral	珊瑚色
crimson	绯红
fuchsia	紫红
gold	金色
gray	灰色
indigo	靛青
khaki	卡其色
lavender	薰衣草
lime	酸橙色
maroon	栗色
navy	海军蓝
olive	橄榄色
orange	橙色
pink	粉红
purple	紫色
salmon	鲑鱼色
silver	银色
teal	水鸭色
violet	紫罗兰
wheat	小麦色
transparent	透明色
css 选择器
标签选择器
通过具体标签名称来匹配文档的所有同名的标签 <style> p{ color: blueviolet; } div{ font-size: 200px; } </style>

类选择器
在标签中添加class属性 写个名字 类选择器的定义需要用到一个英文的句号 后面跟着class属性的值

.text-red{ color: red; } <p class="text-red">行内样式</p>

<!-- 不同的标签可以用同一个类名 --> <!-- 一个标签可以有多个类名 -->

命名规范：

语义优先 header 头部 nav导航栏 btn-submit提交按钮
统一小写字母 + 连字符 footer-nav 底部导航 <!-- 不推荐驼峰命名 css不区分大小写 -->
简洁
不要使用 html标签
类名不能以数字开头
ID选择器
找html文档中有 指定ID属性的标签 ID选择器定义 需要用到 # 后面跟着ID属性的值

    #font-yellow{
        color: orange;
    }
<p id="font-yellow">橘色</p>

<!-- 区别 单个标签 不允许多个id名 --> ID选择器

唯一性 页面只能用一次
用途 定位唯一元素
使用场景一般配合js使用
通配符选择器
用 * 表示 不匹配某一个特定的html元素 匹配每个元素 <style> *{ color: red; font-size: 50px; } </style> <div>盒子</div> <p>段落</p> <a href="">超链接</a>

优先级
一个标签 被多个选择器赋予了相同的属性并且值不一样 按照优先级表示

!important > 内联样式 (1000)>id选择器(100)>类选择器(10)>标签选择器(1)>通配符选择器 > 继承

组合选择器
两个或者两个以上选择器配合使用

后代选择器
结构：选择器1 选择器2 {css属性名:属性值;}
在选择器1中找到后代（儿子 孙子 重孙子） 满足选择器2的标签 div p{ color: green; }
子代选择器

结构：选择器1 > 选择器2 {css属性名:属性值;}
在选择器1 找到子代（儿子） 满足选择器2的标签 div>span{ color: green; }
相邻兄弟选择器

相邻兄弟选择器用于匹配某个元素之后紧邻的另一个元素，这两个元素拥有同一个父级元素并且不存在嵌套关系。相邻兄弟选择器的定义需要用到加号+，加号两边为相邻的两个元素，选择器会匹配加号后面的元素 div + p{ color: red; } <!-- 只匹配紧邻这div后面的那个p -->
通用兄弟选择器

通用兄弟选择器同样会匹配同一父级元素下的兄弟元素，但兄弟元素之间无需紧邻。定义通用兄弟选择器需要用到波浪号~，波浪号两边为同一父级元素下的两个元素，选择器会匹配波浪号后面的元素 <!-- 只匹配div后面的p标签 -->

  div ~ p{
      color: red;
  }
分组选择器

结构：选择器1,选择器2 {css属性名:属性值;}
同时选择多组标签 设置 相同样式 <!-- 一行写一个 可读性 --> p, h1, div{ color: aqua; }
[初始化样式文件 ] (https://meyerweb.com/eric/tools/css/reset/) <!-- 把所有的标签清除默认样式 -->

交集选择器

结构：选择器1选择器2{css属性名:属性值;}

既能被选择器1选中 又能被选择器2选中的标签 <style> p.a{ color: red; }

</style> <!-- 标签选择器必须在前 --> <!-- 一般标签选择器和类选择器一起使用 -->

层叠性
样式可以一层一层叠加覆盖 多个选择器给同一个标签设置不同的样式 会共同作用与标签上

选择器权重叠加
<style> p.a{
/* 1 +10 / color: red; } .a#b{ / 110 / color: purple; } #b{ / 100 */ color: aqua; } </style> <p id="b" class="a">坤坤</p>

