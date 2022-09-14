/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-25 15:20:42
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-05-30 15:41:09
 * @FilePath: \leetcodee:\vs CODE\笔记\midway\message-board\src\service\render.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Provide, Scope, ScopeEnum } from "@midwayjs/decorator";
import { renderFile } from "ejs";
import { join } from 'path';


@Scope(ScopeEnum.Singleton)
@Provide()
export class RenderService {
    async render(file: string, locals: any) {
        return renderFile(join(__dirname, `../../view/${file}.ejs`), locals);
    }
}


