/*
 * @Author: 1151309124 1151309124@qq.com
 * @Date: 2022-08-19 14:51:48
 * @LastEditors: 1151309124 1151309124@qq.com
 * @LastEditTime: 2023-03-02 17:55:44
 * @FilePath: \midway\midway\todo-list\src\service\render.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Provide, Scope, ScopeEnum } from "@midwayjs/decorator";
import { renderFile } from "ejs";
import { join } from 'path';

@Scope(ScopeEnum.Singleton)// 单例只被new一次
@Provide()
export class RenderService {
    async render(locals) {
        return renderFile(join(__dirname, '../app/view/home.ejs'), locals);       
    }
}
