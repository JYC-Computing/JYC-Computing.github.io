flex
弹性盒子布局 设置display:flex； <!-- 高效排列 适合动态或位置尺寸元素 -->

flex容器 包含一组flex项目的父元素 通过设置 display属性为flex

flex项目 容器里面的子元素就是flex项目

主轴 flex容器的主要方向 flex项目在主轴上进行排序 默认主轴方向为水平方向

交叉轴 与主轴垂直方向 用于辅助排列flex项目

flex容器属性
flex-direction 定义主轴方向 row 默认 主轴为水平方向 起点在左边 row-reverse 主轴为水平方向 起点在右边 column 主轴为垂直方向 起点在上面 column 主轴为垂直方向 起点在下面

flex-wrap 定义flex容器换行方式 nowrap 默认 不换行 如果位置不够 会压缩宽度 wrap 换行 wrap-reverse 换行 第一行在下面

同时写 flex-flow: row-reverse wrap;

justify-content 定义flex项目在主轴上的对齐方式
flex-start 起点对齐 flex-end 终点对齐 center 居中对齐 space-between 两端对齐 项目之间的间隔相等 space-around 项目两侧的间隔相等，项目与边框的间隔是项目间隔的一半 space-evenly项目之间以及项目与边框之间的间隔都完全相等

align-items定义Flex项目在交叉轴上的对齐方式。
stretch 默认 如果项目没设置高度 占据整个交叉轴 flex-start 交叉轴的起点对齐 flex-end交叉轴的终点对齐 center交叉轴的中点对齐

align-self：用于定义单个Flex项目在交叉轴上的对齐方式的属性。
值	描述
auto(默认值)	默认值，元素继承父容器的align-items属性。
flex-start	在交叉轴的起点对齐。
flex-end	在交叉轴的终点对齐。
center	在交叉轴的中点对齐。
align-content： 定义多根轴线的对齐方式，
当项目在交叉轴上有多根轴线时才生效。!!! <!-- 控制多行/多列内容在交叉轴上对齐方式 -->

值	描述
stretch(默认值)	轴线占满整个交叉轴，轴线之间的间隔均匀分布。
flex-start	与交叉轴的起点对齐
flex-end	与交叉轴的终点对齐
center	与交叉轴的中点对齐
space-between	与交叉轴两端对齐，轴线之间的间隔相等。
space-around	每根轴线两侧的间隔相等
space-evenly	轴线之间的间隔相等
order 定义flex 项目排列顺序
数值越小越靠前 默认是0

flex-grow 空间多余分配空间
flex-grow: 1;

flex-shrink 空间不够
flex-shrink: 0; 不会被缩小