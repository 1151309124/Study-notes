<!--
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-01-15 21:53:22
 * @LastEditors: 1151309124 1151309124@qq.com
 * @LastEditTime: 2023-03-04 00:42:41
 * @FilePath: \leetcodee:\vs CODE\midway\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
npm init midway --type=web hello-world


## Static 创建
Midway.js 框架 -> egg.js 框架 -> koa.js 框架

egg 体系下的默认规约

src/config/plugin 插件开关
src/config/config.${} 具体环境的 {包括插件} 配置 



流行的框架遵循DEBUG公约
DEBUG=* npm run dev 

插件配置
插件目录/config/下面能找到插件的配置
node_module -> egg-static-> config->config.default.js

  exports.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'app/public'),
    // dirs: [ dir1, dir2 ] or [ dir1, { prefix: '/static2', dir: dir2 } ],
    // support lazy load
    dynamic: true,
    preload: false,
    buffer: false,
    maxFiles: 1000,
  };
  return exports;
};

通过表单提交
<form action="/api/todo" method="POST">
  <input name="text" /> <button>确定</button>
</form>

其中 button 按钮的 type 属性默认为 submit （即提交当前表单），当前按钮的点击效果，通过 Chrome 自带的 DevTool 来 copy as cURL 为：

curl "http://127.0.0.1:7001/api/todo" 
  -H "Content-Type: application/x-www-form-urlencoded"   //万维网格式 
  --data-raw "text=^%^E4^%^BB^%^8A^%^E5^%^A4^%^A9^%^E5^%^A4^%^A9^%^E6^%^B0^%^94^%^E5^%^A5^%^BD^%^E5^%^A5^%^BD" 



简单的文件持久化
文件系统接口
fs.writeFileSync(文件地址, 文本内容) 向文件地址写入文本内容(必须是字符串or二进制数据)
fs.readFileSync(文件地址) 读取文件地址的文本数据（返回值是二进制数据 Buffer 类型）
fs.existsSync(文件地址) 判断地址文件是否存在，返回 true/false 的布尔值


JSON 编码
JSON.parse(文本) 将文本字符串解析成 JavaScript 对象
JSON.stringify(对象) 将 JavaScript 对象序列化成字符串文本


npm install ejs --save
npm install @types/ejs --save--dev

`mysql刷新与删除`
登录
mysql -u root -p
输入密码：123456
 
创建表
create database message_board;

展示表
show databases;
show tables;
select * from message;
delete from message where 1;

updata更改用户名
 update user set username='wang' where username='wangyufei';


MVC模型
service 可以调dao，访问自己
dao 只能调用dao

service聚合好丢controller
controller 做基础校验控制

model 模型
  DAO (Data Access Object) 数据访问对象，常用来操作数据库请求
  Service 公共代码逻辑（包括通过 DAO 操作数据）
view 视图
cotroller 控制器
其中我们所写的部分与 MVC 对应关系如下：
View	    Controller	    Model
HTML直出	HomeController	fileDB

@Provide()
@Inject()
告诉容器，将实例注入到属性中  


todolist
项目步骤如下
 1 创建midway项目，改写插件
 2 src中public放网页内容
 3 controller放接口内容    
  service放配合接口的一些方法，服务controller
 4  const { text } = this.ctx.request.body //浏览器请求接口通过reqyest获取
 5 引入ejs模板并使用
  ejs.render(str, data, options);
 => 输出渲染后的 HTML 字符串
 6 纯前端模块引入


 留言板
1.创建项目
2. 
3.使用TypeORM存储数据，搭配mysql
