<!--
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-24 16:50:39
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-06-06 15:25:52
 * @FilePath: \message-board\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
Controller
UserController
POST /register
POST /login 调用 model 判断密码是否匹配，匹配则返回登录状态 cookie
POST /logout
MessageController
GET /message 获取消息列表
GET /message/:id 获取具体的对话消息
POST /message/ 发送消息
POST /message/:id 发送某条消息的回复消息
DELETE /message/:id 删除某一条回复消息
Model
UserModel
.register(username, password) 将用户数据插入数据库
.login(username, password) 检查用户密码是否与数据库中匹配
MessageModel
.getList() 查询数据库中的所有消息
.getById(id) 查询数据库中某个 id 的消息，以及与该 id 关联的消息
.postMsg() 插入一条消息到数据库
.replyMsg(id) 插入一条与 id 关联的消息
.deleteMsg(id) 删除 id 消息
View
注册页
一个 form 表单，拼接 username, password 然后调用 POST /register

登录页
一个 form 表单，拼接 username, password 然后调用 POST /login

留言版
banner 是注册、登录、登出的 a 标签
body
上+中部：默认一个 ul 列表，通过 GET /message 拉取留言并展示。
每条留言后面放个 a 标签，点击可以调到下部，提交时 POST /message/:id 发送次级留言（回复）
下部：一个 form 表单，默认通过 POST /message 发送一级留言
其他功能
支持留言表情包。支持留言上传图片。基本的安全 XSS 预防。

`单元测试`
node --require=ts-node/register ./node_modules/.bin/jest test/model/dao/user.test.ts