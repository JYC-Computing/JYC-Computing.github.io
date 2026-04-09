JavaScript 中的 Math 是一个内置对象，
它提供了一系列用于数学计算的属性和方法（无需创建实例，直接通过 Math 调用）。

Math.PI 圆周率

Math.floor(x)：向下取整 <!-- 分页计算 123条数据 每页10条数据 总页码数 123/10 向下取整+1 -->

Math.ceil(x)：向上取整

Math.round(x)：四舍五入取整

Math.abs(x)：返回 x 的绝对值

Math.sign(x)：返回 x 的符号

Math.max(...values)：返回一组数中的最大值

Math.min(...values)：返回一组数中的最小值

Math.pow(base, exponent)：返回 base 的 exponent 次幂（base^exponent）

Math.sqrt(x)：返回 x 的平方根

随机数
random 生成0-1之间的随机数 （包含0不包含1） Math.random()

如果生成从0-10之间的整数 console.log(Math.floor(Math.random()*11))

如果生成从5-10之间的整数

如何生成N-M之间的随机数 Math.floor(Math.randow()*(M-N+1))+N