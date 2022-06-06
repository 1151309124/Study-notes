/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-24 16:50:39
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-06-06 21:54:52
 * @FilePath: \leetcodee:\vs CODE\笔记\midway\message-board\src\service\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Inject, Provide } from '@midwayjs/decorator';
import { MessageDao } from '../dao/message';
import { UserDao } from '../dao/user';

@Provide()
export class MessageService {
  @Inject()
  messageDao: MessageDao;

  @Inject()
  userDao: UserDao;

  // 查询留言列表
  async list() {
    // message uid,text
    // message uid -> user username
    // user
    const list = await this.messageDao.list();
    const results: { username: string,text: string }[] = [];
    for (const record of list) {
      const user = await this.userDao.getById(record.uid)
      results.push({ username: user.username, text: record.text });
    }
    return results
  }

  // 发送流程
  async post(uid: number, text: string) {
    return this.messageDao.add(uid, text);
  }

  async update(username: string, text: string) {
    const user = await this.userDao.findByUsername(username);
    return this.messageDao.updateById(user.id, text);
  }

  async deleteById(id: number) {
    return this.messageDao.deleteById(id);
  }
}
