/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-06-06 13:14:33
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-06-06 16:05:17
 * @FilePath: \message-board\test\model\dao\user.test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp, close } from '@midwayjs/mock';
import { Framework } from '@midwayjs/web';
import * as assert from 'assert'; 
import { json } from 'express';
import { UserDao } from '../../../src/model/dao/user'

describe('UserDao', () => {
    it('#findByUsername', async () => {
        // create app
        const app = await createApp<Framework>();

        // // 根据依赖注入 Id 获取实例
        // const userDao = await app.getApplicationContext().getAsync<UserDao>('UserDao');
        // 根据依赖注入 class 获取实例
        const userDao = await app.getApplicationContext().getAsync<UserDao>(UserDao);
        // // 传入 class 忽略泛型也能正确推导
        // const userDao = await app.getApplicationContext().getAsync(UserDao);

        const res = await userDao.findByUsername('wangyufei');
        console.log('res',res);
        assert.strictEqual(res.id,2);
        // close app
        await close(app);
    });
    it('#list', async () => {
        // create app
        const app = await createApp<Framework>();

        // // 根据依赖注入 Id 获取实例
        // const userDao = await app.getApplicationContext().getAsync<UserDao>('UserDao');
        // 根据依赖注入 class 获取实例
        const userDao = await app.getApplicationContext().getAsync<UserDao>(UserDao);
        // // 传入 class 忽略泛型也能正确推导
        // const userDao = await app.getApplicationContext().getAsync(UserDao);

        const res = await userDao.list();
        assert.strictEqual(JSON.stringify(res),JSON.stringify([
            {id:2,username:'wang',password:'wang'}
        ]))
        console.log('res',res);

        // close app
        await close(app);
    });
});