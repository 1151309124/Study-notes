/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-24 16:50:39
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-06-06 20:21:56
 * @FilePath: \leetcodee:\vs CODE\笔记\midway\message-board\src\service\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Inject, Provide } from '@midwayjs/decorator';
import { UserDao } from '../dao/user';

@Provide()
export class UserService {
  @Inject()
  userDao: UserDao;
  // 将用户数据插入数据库
  async register(username: string, password: string) {
    return await this.userDao.add(username, password);

  }

  // 检查用户密码是否和数据库中匹配
  async login(username: string, password: string) {
    const user = await this.userDao.findByUsername(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

}
