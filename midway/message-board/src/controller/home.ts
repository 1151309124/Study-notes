/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-24 16:50:39
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-05-31 19:53:54
 * @FilePath: \leetcodee:\vs CODE\笔记\midway\message-board\src\controller\home.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';
import { Context } from 'egg';
import { RenderService } from '../model/service/render';
import { MessageService } from '../model/service/message';

@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  renderService: RenderService;

  @Inject()
  messageService: MessageService;

  @Inject()
  ctx: Context

  @Get('/')
  async home() {
    const text = this.ctx.cookies.get("my_session_data");
    let cookies = null;
    if (text) {
      cookies = JSON.parse(text);
    }
    const msgList = await this.messageService.list();
    return this.renderService.render("home", { cookies, msgList });
  }

  @Get('/register')
  async register() {
    return this.renderService.render("register", {});
  }

  @Get('/login')
  async login() {
    return this.renderService.render("login", {});
  }
}
