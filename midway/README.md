<!--
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-01-15 21:53:22
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-06-15 23:20:47
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

curl "http://127.0.0.1:7001/api/todo" 
  -H "Content-Type: application/x-www-form-urlencoded" 
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
 
创建表
create database message_board;

展示表
show databases;
show tables;
select * from message;
delete from message where 1;

updata更改用户名
 update user set username='wang' where username='wangyufei';


service 可以调dao，访问自己
dao 只能调用dao

service聚合好丢controller
controller 做基础校验控制