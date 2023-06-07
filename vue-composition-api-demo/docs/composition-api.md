# Composition API

## createApp 创建vue实例

## [setup](https://cn.vuejs.org/api/composition-api-setup.html#basic-usage)

- `setup()`钩子 是 Composition API 的入口。

参数1: props
props 是响应式对象，不能被解构

参数2: context
context是一个对象，有3个成员：attrs、emit、slots

返回值：是一个对象。
`setup()` 函数中返回的对象会暴露给模板和组件实例（methods，computed, 生命周期的hooks中使用）。

`setup()`的执行时机。它是在props被解析完后，组件实例被创建之前执行的。所以在setup内部无法通过this获取组件实例，也无法访问组件实例中的data，computed， methods，此时this指向 undefined

## reactive 创建响应式对象

代理对象，返回一个响应式对象

## 生命周期钩子

- onBeforeMount
- onMounted
- onBeforeUpdate
- onUpdated
- onBeforeUnmount
- onUnmounted
- onErrorCaputured
- onRenderTracked
- onRenderTriggered

## toRefs()

把一个响应式对象中的所有属性也转换为响应式对象

- 其参数必须是一个代理对象。

内部原理：
内部会创建一个新的对象，遍历传入的代理对象的所有属性，把所有属性的值都转换为响应式对象，然后再挂载到新创建的对象上，并返回。它内部会为代理对象的每一个属性创建一个具有value属性的对象，该对象是响应式的。value属性具有getter和setter，getter返回代理对象中对应属性的值，setter中给代理对象的属性赋值。在模版中可以省略value，但是在代码中不能省略value。

## ref()

把普通数据转换为响应式数据。和reactive不同的是，reactive()是把一个对象转换为响应式数据，ref()可以把基本类型的数据包装为响应式数据。
参考：src/02-ref.html
