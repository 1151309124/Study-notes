/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-13 14:17:35
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-05-13 15:28:15
 * @FilePath: \leetcodee:\vs CODE\笔记\midway\todo-list\src\service\render.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Provide, Scope, ScopeEnum } from "@midwayjs/decorator";
import { renderFile } from "ejs";
import { join } from 'path';

@Scope(ScopeEnum.Singleton)
@Provide()
export class RenderService {
    async render(locals) {
        return renderFile(join(__dirname, '../app/view/home.ejs'), locals);  
    }
}


