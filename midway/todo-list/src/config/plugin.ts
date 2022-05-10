/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-06 19:52:36
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-05-07 17:28:21
 * @FilePath: \leetcodee:\vs CODE\midway\todo-list\src\config\plugin.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { EggPlugin } from 'egg';
export default {
  logrotator: false, // disable when use @midwayjs/logger
  static: true,
} as EggPlugin;
