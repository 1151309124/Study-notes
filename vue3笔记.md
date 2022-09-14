<!--
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-07-19 15:44:20
 * @LastEditors: 1151309124 1151309124@qq.com
 * @LastEditTime: 2022-09-06 16:47:03
 * @FilePath: \leetcodee:\vue项目\新建文件夹\vue3-study\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
reactive 基于proxy实现
user是代理对象，obj目标对象
user = reactive(obj)
user才是响应式的
操作代理对象，目标对象随之变化

setup 在beforeCreate生命周期回调之前执行
setup执行的时候当前组件未创建，组件实例对象this不能用
this 是 undefined, 不能通过 this 来访问 data/computed/methods / props
所有的 composition API 相关回调函数中也都不可以


toRef为源响应式对象上的某个属性创建一个 ref 对象, 二者内部操作的是同一个数据值, 更新时二者是同步的
toRefs把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref