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
