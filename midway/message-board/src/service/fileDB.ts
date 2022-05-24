/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-11 15:59:35
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-05-24 00:14:27
 * @FilePath: \leetcodee:\vs CODE\笔记\midway\todo-list\src\service\findDB.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Model
import { Provide, Scope, ScopeEnum } from "@midwayjs/decorator";
import { existsSync, readFile, writeFile } from "fs";


/* 这里只是简单的将内存中的对象数据序列化成字符串然后存储在文件中，
下次再读取这个对象之前，首先检查一下是否有文件缓存，
如果有的话就从文件中读取出文件数据并解析成 JavaScript 对象来使用 */

export interface ITodo {
    id: number;
    text: string;
}


@Scope(ScopeEnum.Singleton)
@Provide('TodoListService')
export class TodoListService {
    // TS写法
    private todoList: ITodo[] = []
    // JS写法
    // constructor() {
    //     this.todoList = [];
    // }
    async list() {
        // fs.existsSync(文件地址) 判断地址文件是否存在，
        // 返回 true/false 的布尔值
        if (existsSync('./cache')) {
            // fs.readFileSync(文件地址) 
            // 读取文件地址的文本数据（返回值是二进制数据 Buffer 类型）
            const buffer = await new Promise((resolve, reject) => readFile('./cache',
                (err, data) => {
                    if (err) {
                        return reject(err)
                    }
                    resolve(data)
                }))
            this.todoList = JSON.parse(buffer.toString())
        }
        return this.todoList;
    }

    // 增删查改
    // TS 写法
    async add(text: string) {
        console.log('这是add的text', text)
        const list = await this.list();
        list.push({
            id: await this.incrId(),
            text
        })
        // fs.writeFileSync(文件地址, 文本内容) 
        // 向文件地址写入文本内容(必须是字符串or二进制数据)
        await this.flushCache(list)
    }

    // Node.js 写法
    // exports.add = function add() {
    // }

    async del(id: number) {
        const list = await this.list()
        const idx = list.findIndex((item) => item.id === id);
        list.splice(idx, 1)
        await await this.flushCache(list);
    }

    async update(id: number, newText: string) {
        const list = await this.list();
        // console.log("oldText, newText", oldText, newText);
        // console.log("this.todoList", this.todoList);
        const idx = list.findIndex((item) => item.id === id);
        // console.log("item , oldText", item.length, oldText.length, item === oldText);
        // console.log("idx",idx);
        if (id) {
            list[idx].text = newText;
            await this.flushCache(list);
        }
    }

    private async incrId() {
        const list = await this.list();
        let maxId = 0;
        for (const { id } of list) {
            if (id > maxId) {
                maxId = id
            }
        }
        return maxId + 1;
    }

    private flushCache(list: ITodo[]) {
        return new Promise((resolve, reject) =>
            writeFile('./cache', JSON.stringify(list), (err) => {
                if (err) {
                    return reject(err);
                }
                resolve(null)
            })
        );
    }
}


