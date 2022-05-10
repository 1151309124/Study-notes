/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-06 19:52:36
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-05-08 12:00:49
 * @FilePath: \leetcodee:\vs CODE\midway\todo-list\src\config\config.default.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { join } from 'path';
export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1651837956256_3093';

  // add your config here
  config.middleware = [];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  // config.security = {
  //   csrf: false,
  // };

  // ------------------------------------------------
  // 会和插件里的配置进行合并
  config.static = {
    prefix: '/',
    dir: join(appInfo.baseDir, 'app/public'),
    // dirs: [ dir1, dir2 ] or [ dir1, { prefix: '/static2', dir: dir2 } ],
    // support lazy load
    // dynamic: true,
    // preload: false,
    // buffer: false,
    // maxFiles: 1000,
  };
// ------------------------------------------------


  return config;
};
