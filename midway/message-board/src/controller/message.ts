/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-24 18:05:41
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-06-16 00:23:25
 * @FilePath: \leetcodee:\vs CODE\笔记\midway\message-board\src\controller\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Inject, Controller, Post, Provide, Get } from '@midwayjs/decorator';
import { Context } from 'egg';
import { MessageService } from '../model/service/message';

@Provide()
@Controller('/message')
export class MessageController {
  @Inject()
  ctx: Context;

  @Inject()
  messageService: MessageService;

  @Get('/')
  async list(): Promise<any> {
    console.log('我是message.ts');
    // TODO
    // message service . list
    const list = await this.messageService.list();
    // list -> view
    // view render
    return list
  }

  @Post('/')
  async post(): Promise<any> {
    const cookieText = this.ctx.cookies.get("my_session_data");
    let cookies = null;
    if (cookieText) {
      cookies = JSON.parse(cookieText);
    }
    // 判断用户是否登录，未登录不能发送留言

    const { text } = this.ctx.request.body;
    console.log(cookies.username, text);
    this.messageService.post(cookies.uid, text);
    this.ctx.redirect('/');

  }
}
