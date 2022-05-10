/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-06 19:52:36
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-05-10 13:56:55
 * @FilePath: \leetcodee:\vs CODE\midway\todo-list\src\controller\api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Inject, Controller, Post, Get, Provide, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { IGetUserResponse } from '../interface';
import { UserService } from '../service/user';

export const todoList = []

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

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
    const { text } = this.ctx.request.body
    todoList.push(text);
    // 重定向方法
    this.ctx.redirect('/');
    return 'ok'
  }
  // GET /api/todo
  @Get('/todo')
  async getTodo() {
    return todoList
  }
  
  @Get('/todo')
  async deleteTodo() {
    return todoList
  }
}
