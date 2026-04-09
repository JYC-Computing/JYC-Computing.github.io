解构赋值
结构赋值:ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构

数组
数组解构赋值允许我们通过类似于数组字面量的语法，将数组中的值分配给对应的变量 <script> var x = [1,2,3,4,5] var [a,b] = x; console.log(a,b) </script>

// 报错 let [foo] = 1; let [foo] = false; let [foo] = NaN; let [foo] = undefined; let [foo] = null; let [foo] = {};

对象
通过指定属性名提取对象中的值并且赋值给对应变量 <!-- 按属性名匹配 和顺序无关 --> var kun = {name:'坤坤',age:35,city:"深圳"} var {age,name,city} = kun console.log(name,age,city)

自定义变量名与属性名不同 var kun = {name:'坤坤',age:35,city:"深圳"} var {age:a,name:n,city:c} = kun console.log(a,n,c)

嵌套结构

        var a ={
            p:['hello',{y:'world'}]
        }
        console.log(a.p[1].y)

        var {p:[x,{y}]} = a
        console.log(x,y)
简写 var name = 'kunkun' var age = 25 var person ={name,age} console.log(person.name)

字符串
字符串可以看作类数组 var [a,b] = 'hello' console.log(a,b)

rest 收集剩余的元素 存在一个数组中
var [a,b,...rest] = [1,2,3,6,1,54] console.log(rest)

将数组展开为多个独立的参数 var arr = ['唱歌','跳舞','rap'] console.log(...arr)

默认值
为变量设置默认值。当解构赋值的源对象中对应的属性或元素不存在或值为 undefined 时，变量将采用默认值 var [a=1,b=2,c=3]=[10,undefined,30] console.log(a,b,c)

扩展内容
字符串模板
用于创建多行字符串和嵌入表达式的语法。它使用反引号``

字符串模板允许在字符串中嵌入表达式，通过 ${expression} 的形式插入
字符串扩展API
str.includes(str[,num])：返回布尔值，表示是否找到了参数字符串。

str.startsWith(cstr[,num])：返回布尔值，表示参数字符串是否在原字符串的头部。

str.endsWith(cstr[,num])：返回布尔值，表示参数字符串是否在原字符串的尾部

str.repeat(n) : 返回一个新字符串，表示将原字符串重复n次

str.padStart(targetLength, padString) 返回一个新字符串，开始位置填充字符串以达到指定的长度

str.padEnd(targetLength, padString) 返回一个新字符串，末尾位置填充字符串以达到指定的长度

数组扩展
arr.keys() 数组的内置方法 返回数组索引 <!-- 配合for of循环 -->

arr.values() 数组值集合

arr.entries() 数组的每一项的集合

Array.from()把对象转换为数组

Array.of() 将一组值转成数组

arr.find(callback) 用于在数组中查找满足指定条件的第一个元素，并返回该元素

array.fill(value, start, end]) 用于将数组的所有元素替换为指定的值，修改原始数组，并返回修改后的数组

value 替换为指定的值

start：指定开始替换的索引

end指定结束替换的索引 （不包含在内）

array.includes(searchElement[, fromIndex]) 用于检查数组是否包含指定的元素，返回一个布尔值。

searchElement 找什么值

fromIndex 从哪里开始找

对象扩展
Object.is() 用来比较两个值是否相等, 返回布尔值
Object.assign() 用来合并对象的, 返回新对象 var x = {a:1,b:2}; var y = {c:5}; console.log(Object.assign(x,y))
