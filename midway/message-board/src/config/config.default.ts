/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-24 16:50:39
 * @LastEditors: 1151309124 1151309124@qq.com
 * @LastEditTime: 2023-03-03 23:56:18
 * @FilePath: \leetcodee:\vs CODE\笔记\midway\message-board\src\config\config.default.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1653382239945_153';

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


  // TypeORM
  config.orm = {
    /**
     * 单数据库实例
     */
    // 转化为mysql数据
    type: 'mysql',
    host: '127.0.0.1',//指向本机
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'message_board',
    synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: true,
  }

  return config;
};
