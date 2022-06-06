/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-06-06 13:14:33
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-06-06 18:11:40
 * @FilePath: \message-board\test\model\dao\user.test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { listModule } from '@midwayjs/decorator';
import { createApp, close } from '@midwayjs/mock';
import { Framework } from '@midwayjs/web';
import * as assert from 'assert';
import { json } from 'express';
import { MessageDao } from '../../../src/model/dao/message'

describe('UserDao', () => {
    it.skip('#add & #del &#update', async () => {
        // create app
        const app = await createApp<Framework>();


        // 根据依赖注入 class 获取实例
        const messageDao = await app.getApplicationContext().getAsync<MessageDao>(MessageDao);

        const text = 'nihao a aaaa'
        const res = await messageDao.add('wang', text);

        // const list = await messageDao.list()
        // const lastItem = list[listModule.length-1]
        // assert.deepStrictEqual(res.text,text);
        // assert.strictEqual(res.text,text)
        // assert.strictEqual(lastItem.text,text);

        // await messageDao.deleteById(res.id);

        const updataText = 'update to this'
        await messageDao.updateById(res.id, updataText);
        const res2 = await messageDao.getById(res.id);
        assert.strictEqual(res2.text, updataText);

        await messageDao.deleteById(res2.id);

        // close app
        await close(app);
    });
    it('#list', async () => {
        // create app
        const app = await createApp<Framework>();


        // 根据依赖注入 class 获取实例
        const MessageDao = await app.getApplicationContext().getAsync<MessageDao>(MessageDao);


        const res = await MessageDao.list();
        console.log('message list', res);


        console.log('res', res);

        // close app
        await close(app);
    });
});