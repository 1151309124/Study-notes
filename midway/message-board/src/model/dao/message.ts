/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-11 15:59:35
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-06-06 18:53:42
 * @FilePath: \leetcodee:\vs CODE\笔记\midway\todo-list\src\service\findDB.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Model
import { Provide, Scope, ScopeEnum } from "@midwayjs/decorator";
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { Message } from '../entity/message';

@Scope(ScopeEnum.Singleton)
@Provide()
export class MessageDao {
    @InjectEntityModel(Message)
    message: Repository<Message>;

    // 查询(列表)
    async list() {
        return await this.message.find();
    }

    // 查询(根据id)
    async getById(id: number) {
        // return this.message.findByIds([id]);
        return this.message.findOne({
            where: {
                id
            }
        })
    }

    // 新增
    async add(uid: number, text: string) {
        if (uid === null) return;
        // create a entity object
        const msg = new Message();
        msg.uid = uid;
        msg.text = text;

        // save entity
        const result = await this.message.save(msg);

        // save success
        console.log('msg id = ', result.id);
        return msg;
    }

    // 修改
    async updateById(id: number, text: string) {
        return this.message.update({ id }, { text });
    }

    // 删除
    async deleteById(id: number) {
        return this.message.delete({ id })

    }
}


