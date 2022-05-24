/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-06 19:52:36
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-05-24 00:34:28
 * @FilePath: \leetcodee:\vs CODE\midway\todo-list\src\controller\home.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
// import * as db from '../service/findDB'
import { RenderService } from '../service/render';

@Provide()
@Controller('/')
export class HomeController {
  @Inject('ctx')// 将 ctx 注入到当前 controller 类中
  ctx: Context;

  @Inject('TodoListService')
  db;

  @Inject()
  renderService: RenderService

  // GET /
  @Get('/')
  async home() {
    // 告诉浏览器，当前返回 HTML 页面
    this.ctx.type = 'html';
    const todoList =await this.db.list();
    return  this.renderService.render({
      list: todoList
    });
  }
}
