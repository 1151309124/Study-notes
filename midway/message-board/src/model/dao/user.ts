/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-11 15:59:35
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-06-06 22:03:52
 * @FilePath: \leetcodee:\vs CODE\笔记\midway\todo-list\src\service\findDB.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Model
import { Provide, Scope, ScopeEnum } from "@midwayjs/decorator";
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { User } from '../entity/user';

@Scope(ScopeEnum.Singleton)
@Provide()
export class UserDao {
    @InjectEntityModel(User)
    userModel: Repository<User>;

    async list() {
        return await this.userModel.find();
    }

    // 增删查改
    // TS 写法
    async add(username: string, password: string) {
        // create a entity object
        const user = new User();
        user.username = username;
        user.password = password;

        // save entity
        const userResult = await this.userModel.save(user);

        // save success
        console.log('user id = ', userResult.id);
        return user;
    }


    async findByUsername(username: string) {
        const user = await this.userModel.findOne({
            where: {
                username
            }
        })
        if (user) {
            return user;
        }
        return null;
    }

    async getById(id: number) {
        const user = await this.userModel.findOne({
            where: {
                id
            }
        })
        if (user) {
            return user
        }
        return null
    }
}




