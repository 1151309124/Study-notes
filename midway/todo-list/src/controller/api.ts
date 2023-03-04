/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-10 11:57:32
 * @LastEditors: 1151309124 1151309124@qq.com
 * @LastEditTime: 2023-03-03 20:42:16
 * @FilePath: \leetcodee:\vs CODE\笔记\midway\todo-list\src\controller\api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// controller

import { Inject, Controller, Post, Del, Get, Put, Provide, Query} from '@midwayjs/decorator';
import { Context } from 'egg';
import { IGetUserResponse } from '../interface';
import { UserService } from '../service/user';
// import * as DB from '../service/findDB'; //把findDB写成DB
import { TodoListService } from '../service/fileDB';


@Provide()
@Controller('/api')
export class APIController {
  @Inject('ctx')
  ctx: Context;

  // Inject 装饰器根据 TodolistService 这个 key 标记当前属性
  // 当 HomeControoler 被实例化的时候，Midway 会从 IoC 容器中
  // 找到 TodolistService 对应的 class 并 new 出来赋值给 this.db
  @Inject()
  db: TodoListService;

  @Inject()
  userService: UserService;

  @Post('/get_user')
  async getUser(@Query() uid: string): Promise<IGetUserResponse> {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }

  // POST /api/todo
  @Post('/todo')
  async addTodo() {
    const { text } = this.ctx.request.body //浏览器请求接口通过request获取
    // [ { id: 1, text: '001' }, { id: 2, text: '002' } ]
    // console.log('text',text)
    await this.db.add(text);
    // 重定向方法
    this.ctx.redirect('/');
    return 'ok'
  }
  // GET /api/todo
  @Get('/todo')
  async getTodo() {
    return await this.db.list();
  }

  // DELETE /api/todo/delete
  // curl locahost:6001/apis/todo/1234 -> id:1234
  @Del('/todo/:id')
  async deleteTodo() {
    console.log('访问接口？');
    
    // const text = this.ctx.query.text;
    const { id } = this.ctx.params;//  form 表单 GET 提交时 name="text" 的 input 中的数据
    await this.db.del(Number(id));
    // 跳转到 HTML 页面
    // this.ctx.redirect('/');
  }


  // PUT /api/todo
  // 保存修改接口
  @Put('/todo/:id')
  async putTodo() {
    const { id } = this.ctx.params;
    const { text } = this.ctx.request.body;
    // console.log("oldText, newText",oldText, newText)
    // this.db.update(id.trim(), newText)
    await this.db.update(Number(id), text)
  }
}
