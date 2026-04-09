String 内置API
length 这是一个属性 获取字符串的长度

``charAt()方法返回指定索引位置的字符，charCodeAt()` 方法返回指定索引位置字符的 Unicode 值

String.fromCharCode() 通过unicode编码返回对应的字符

concat() 方法用于将多个字符串连接起来

indexOf(searchValue, startIndex) 返回指定字符串在原字符串中索引位置，如果未找到匹配的字符串或字符，则返回 -1 <!-- 用的多 -->

lastIndexOf(searchValue, Index) 返回指定字符串在原字符串中最后一次出现的索引位置，如果未找到匹配的字符串或字符，则返回 -1 <!-- 从指定位置 index向前（向左找） --> <!-- 不传入index 默认从尾部向前找 -->

substring(startIndex(包含), endIndex(不包含)) 方法返回位于两个指定索引之间的子字符串，

substr(startIndex, length) 方法返回从指定索引开始的指定长度的子字符串。

slice(startIndex, endIndex) 方法返回原字符串的指定部分，可以使用负数索引表示从字符串末尾开始计算

toUpperCase() 和 toLowerCase()：``toUpperCase()方法将字符串转换为大写形式，toLowerCase()` 方法将字符串转换为小写形式

trim() 清除空格 <!-- 处理用户输入 数据验证-->

replace(searchValue, replaceValue) 在字符串中替换指定的子字符串

数组内置API
length：返回数组的长度（元素的个数）

push(element1)：向数组末尾添加一个或多个元素，并返回数组的新长度

<!-- 数据缓存 添加数据 --> <!-- 购物车 -->

pop()：删除并返回数组的最后一个元素

shift()：删除并返回数组的第一个元素。

unshift(element1)：向数组开头添加一个或多个元素，并返回数组的新长度。

sort(compareFunction) 原地对数组进行排序

        var arr = [1,66,88,1526345,121,45]
        arr.sort((a,b) => a-b)  //升序
        console.log(arr)

        arr.sort((a,b) => b-a)  // 降序
        console.log(arr)
splice(start, deleteCount, item1, item2, ...)：从指定的索引位置开始修改数组，可以删除、替换或插入元素 返回被删除的元素

reverse( ) 数组反向排序

concat()：将两个或多个数组合并为一个新数组。

slice(start, end)：返回数组的一部分，从指定的开始索引到结束索引（不包括结束索引）

join(separator)：将数组的所有元素连接成一个字符串。

indexOf()：返回指定元素在数组中第一次出现的索引。

lastIndexOf()：返回指定元素在数组中最后一次出现的索引。

