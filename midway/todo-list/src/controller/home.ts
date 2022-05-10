/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-06 19:52:36
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-05-09 13:45:53
 * @FilePath: \leetcodee:\vs CODE\midway\todo-list\src\controller\home.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get, Provide, Inject } from '@midwayjs/decorator';
import { Context } from 'egg';
import { todoList } from './api'
@Provide()
@Controller('/')
export class HomeController {
  @Inject('ctx')
  ctx: Context;
  @Get('/')
  async home() {
    this.ctx.type = 'html'
    return `
    动态渲染
    <form action="api/todo" method="POST">
      <input name = "text"/> <button>确定</button>
    </form>

    <ul>${todoList.map(
      (item) =>
        '<li>' + item + '</li>'
    ).join('')
      }</ul>
    `;
  }
}
