JavaScript介绍
浏览器解释型语言 嵌套在html文件中 给浏览器解释执行 主要用来实现网页动态效果 用户交互和前后端的数据传输

三个部分

ECMAScript (ECMA国际 欧洲计算机制造商协会制定的脚本语言标准化规范 ) 定义了语言 语法 语句 数据类型 操作符 函数 对象等核心规则
1997 发布ES1 1999 发布ES3 奠定了基础语法 称为主流版本 2009 发布ES5 新增数组方法等 2015 发布ES6 箭头函数 类 模块 let/const 解构 promise 模板字符串等 ... 后续每年小幅度迭代

DOM（文档对象模型）通过DOM js可以与网页的结构进行交互 实现动态更新和用户界面的改变 <!-- DOM是连接html与js的桥梁 操作DOM实现页面的动态交互 比如 点击按钮修改内容 新增元素 改变样式 -->

BOM浏览器对象模型 与浏览器交互的对象 提供了与浏览器窗口和浏览器本身进行交互的功能

JavaScript书写位置
元素绑定事件
在html元素上 通过事件属性 比如onclick 点击事件 绑定js代码 响应特定的用户事件 <div onclick="console.log('坤坤你好')"></div>

文档内嵌
将js代码嵌入html文档内 <script></script> 标签中 这种方式用于一些简单脚本

<script> console.log('牟牟牟') </script>

script能书写在任意位置 书写多次 加载到就会执行 不同位置 不同效果 <!-- 不建议写很多内联脚本 会增加html体积 影响加载速度 -->

外部链接
储存在外部文件中 通过 <script></script> src属性引入 这个方式有助于提升代码的可维护性和重用性 使得html文件更加清晰

内容显示
console.log：用于在浏览器的控制台输出信息，接受多个参数，这些参数将被依次输出。在浏览器开发者工具的控制台(通常可以通过按F12或右键选择“检查”来打开)中查看输出的信息 console.log('唱歌','跳舞','rap篮球')

alert：用于弹出一个警告框，接受一个参数，通常是一个字符串，表示要显示的消息。当调用alert时，会在浏览器窗口中弹出一个警告框，用户需要点击“确定”按钮才能继续操作。 alert('青少年不得长时间刷短视频')

document.write：用于向HTML文档写入内容，接受一个或多个字符串作为参数。 document.write('<a href="">哈哈</a>') document.write('坤坤')

prompt：用于弹出一个提示框，接受一个参数，通常是一个字符串，表示提示信息，用户可以在提示框中输入信息。
var x = prompt('你的姓名') document.write(x)

JavaScript变量
变量介绍
JavaScript中的变量用于存储数据。在JavaScript中，变量的声明使用关键字var let const

<!-- 很多大型项目 仍然用到var写代码 1.兼容性 2.重构花很多成本-->

变量的声明和赋值可以在同一步骤完成，也可以分开进行。

未赋值 直接访问undefined

变量命名规则
变量名可以包含字母、数字、下划线(_)和美元符号($)，变量名不能以数字开头。

变量名是区分大小写的

避免使用JavaScript关键字作为变量名。

关键词

arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield

变量命名规范
变量名应该具有描述性，能够清晰地表达变量的用途和含义。
使用驼峰命名法来命名变量。
赋值=两边都加上一个空格
基础数据类型
每种编程语言都有其支持的数据类型，而不同的数据类型用于存储和表示不同种类的数据。

Number
表示数字 可以是整数或浮点数 <!-- typeof返回一个表示数据类型的字符串 -->

数值范围

精准范围 +-（2的52次幂）超过后计算不精准
最大范围 +- 2的1023次幂 超出不行
BigInt
没有最大整数限制 没有上限 唯一受限你的运行环境的内存 后面加个n var x = 666n console.log(typeof x)

String
在JavaScript中，String是一种表示文本数据的数据类型。字符串是由一系列字符组成的，字符可以是字母、数字、符号等。

字符串可以通过单引号（' '）或双引号（" "）或反引号()来创建。 <!-- `` 在左上角esc下面 --> 单引号和双引号在字符串表示上是等效的

反引号可以创建模板字符串，其中可以嵌入变量 var name = 'kunkun' var hello = 大家好我是${name} console.log(hello)

用+操作符可以将字符串连接起来。 var text = '喜欢打篮球' console.log(name+text)

在字符串中，可以使用反斜杠\来转义特殊字符。

Boolean
在JavaScript中，boolean是一种基本数据类型，它只有两个值：true和false。布尔类型通常用于表示逻辑值，条件判断以及控制程序的流程。 var x = true console.log(typeof x)

Undefined
在JavaScript中，undefined是JavaScript中的一个特殊值的数据类型。当变量被声明但未赋值时，它的默认值就是undefined。

Null
在JavaScript中，null是一个只有一个值的特殊数据类型，用于表示空值。null表示一个变量被赋值为空。 var x = null console.log(x)

Symbol
在JavaScript中，symbol是一种运用场景极少的字面量数据类型,并且不可以进行运算,产生一个独一无二的值 var x = Symbol(1) var y = Symbol(1) console.log(x==y)

类型转换
隐式类型转换
不同数据类型之间的操作 可能 触发 隐式类型转换

在加法中 将其他非字符串的操作数转换成字符串 进行字符串拼接

在其他算术运算中，非字符串的操作数会被隐式转换为数字。

<script> var x = 5; var y = '10' console.log(x*y) </script> <!-- 在运算 - * / js引擎在计算之前 试图将表达式转为number类型 如果转换失败 表达式返回NaN-->

显式类型转换
明确地将一个数据类型转换为另一个数据类型。

转换为数字

使用Number()： var x = '123' console.log( typeof Number(x))

parseInt()

处理数字字符串，忽略非数字字符，只解析整数部分。 var x = '123哈哈' console.log( parseInt(x))
parseFloat() var x = '123.22哈哈' console.log( parseFloat(x))

值	转换后的值
undefined	NaN
null	0
true	1
false	0
转换为字符串

使用String() var x = 10 console.log(typeof String(x))

使用 .toString() 方法

转换为布尔值

使用Boolean()

// false Boolean(0)
Boolean(NAN) Boolean("") Boolean(undefined) Boolean(null) Boolean(false) Boolean() Boolean(0n)

转换为BigInt类型 使用BigInt() var x = 123 console.log(BigInt(x))

转换为Symbol类型 使用Symbol()