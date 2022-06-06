/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-24 18:05:41
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-06-06 21:02:25
 * @FilePath: \leetcodee:\vs CODE\笔记\midway\message-board\src\controller\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Inject, Controller, Post, Provide, Get } from '@midwayjs/decorator';
import { Context } from 'egg';
import { IGetUserResponse } from '../interface';
import { UserService } from '../model/service/user';

@Provide()
@Controller('/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/register')
  async register(): Promise<IGetUserResponse> {
    const { username, password } = this.ctx.request.body;
    if (!username || !password) {
      this.ctx.status = 500;
      return { success: false, message: '参数错误' }
    }
    const user = await this.userService.register(username, password)
    this.ctx.redirect('/login');
    return { success: true, message: 'OK', data: user };
  }

  @Post('/login')
  async login(): Promise<IGetUserResponse> {
    const { username, password } = this.ctx.request.body;
    const user = await this.userService.login(username, password);
    if (user) {
      // 成功登录
      this.ctx.cookies.set('my_session_data', JSON.stringify({ username ,uid:user.id}))
      this.ctx.redirect('/');
      return;
    } else {
      // 登录失败
      // TODO 密码错误三次禁止登陆
      this.ctx.status = 403;
    }
  }

  @Get('/logout')
  async logout() {
    this.ctx.cookies.set('my_session_data', "")
    this.ctx.redirect('/');
  }
}
