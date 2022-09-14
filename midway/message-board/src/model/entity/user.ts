/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-26 15:27:23
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-05-28 00:32:38
 * @FilePath: \leetcodee:\vs CODE\笔记\midway\message-board\src\entity\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { EntityModel } from '@midwayjs/orm';
import { Column,PrimaryGeneratedColumn } from 'typeorm';

@EntityModel('user')
export class User {
    // 自增组件，自动生成ID
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length:32
    })
    username: string;

    @Column({
        length:32
    })
    password: string;
}