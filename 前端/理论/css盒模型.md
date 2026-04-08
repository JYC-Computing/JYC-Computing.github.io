css盒模型
每个html元素都被看作是一个矩形的盒子
包括内容区域 内边距 边框 外边距

内容区域
盒子中 显示实际内容的区域 由盒子的 width（宽度） height（高度）属性来定义

<style> div{ width: 200px; height: 200px; background-color: orange; } </style>

边框
围绕在内容区域周围的一条线 边框宽度 边框样式 边框颜色组成

border-width：设置边框的宽度，可以是一个值(应用到所有边)
border-style：设置边框的样式，可以是solid(实线)、dashed(虚线)、dotted(点线)、double(双线)。
border-color：设置边框的颜色。
直接通过border 同时设置宽度 样式 颜色 border: 30px solid palegreen;

border-top 顶部边距 border-right 右侧边框 border-bottom 底部边框 border-left 左侧边框

border-radius 圆角效果
border-radius: 30px; <!-- 用的非常多 值越大月圆 --> <!-- 如果是正方形 值到宽度一半 变成一个圆 -->
border-radius: 30px 50px 70px 100px; 第一个值是 左上角 右上 右下 左下 顺时针

border-radius: 30px/100px; 水平 垂直

内边距
定义元素内部内容与元素边框之间的空间 内边距可以应用于元素的上 右 下 左 四个方向 也可以同时定义所有方向的内边距 padding: 50px;

属性	作用
padding-top	定义元素顶部的内边距。
padding-right	定义元素右侧的内边距。
padding-bottom	定义元素底部的内边距。
padding-left	定义元素左侧的内边距。
外边距
定义 元素边框外部的空间 控制元素与其他周围元素自建的间距

属性	作用
margin-top	定义元素顶部的外边距。
margin-right	定义元素右侧的外边距。
margin-bottom	定义元素底部的外边距。
margin-left	定义元素左侧的外边距。
margin	可以按照上、右、下、左的顺序定义所有方向的外边距，也可以只定义一个或两个值。
margin: 0px auto; /* 上下边距0 左右自动分配 */

外边距合并
相邻的元素外边距合并现象 通常发生在垂直方向上

相邻兄弟元素的上下外边距合并成一个边框

父子垂直外边距合并 <!-- 父元素设置边框或内边距 -->

怪异盒模型
默认的是标准盒模型 区别 宽度和高度所包含的部分不同

标准盒模型 宽度和高度只表示content内容区 怪异盒模型 宽度高度包含 内容 内边距 边框

怪异盒模型使用box-sizing: border-box;设置 标准盒模型使用box-sizing: content-box;设置

作业
文字随便写 主要是效果写出来 <ul> <li>蓝唇妆居然这么火 ?</li> <li>大牌画风为何突变?</li> <li>欧莱雅男士面膜</li> <li>COACH与追梦女性</li> <li>元气少女养成记!</li> <li>佑天兰中国体联会</li> </ul>

<!-- 线 底部边框 -->