<!--
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-01-15 21:53:22
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-05-08 16:12:01
 * @FilePath: \leetcodee:\vs CODE\midway\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
吗npm init midway --type=web hello-world


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
