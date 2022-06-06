/*
 * @Author: 1151309124 115130924@qq.com
 * @Date: 2022-05-24 16:50:39
 * @LastEditors: 1151309124 115130924@qq.com
 * @LastEditTime: 2022-06-06 13:06:08
 * @FilePath: \leetcodee:\vs CODE\笔记\midway\message-board\test\controller\api.test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp, close, createHttpRequest } from "@midwayjs/mock";
import { Framework } from "@midwayjs/web";
import { Application } from "egg";

describe("test/controller/api.test.ts", () => {
  let app: Application;

  beforeAll(async () => {
    // create app
    app = await createApp<Framework>();
  });

  afterAll(async () => {
    await close(app);
  });

  it("should POST /api/get_user", async () => {
    // make request
    const result = await createHttpRequest(app)
      .post("/api/get_user")
      .query({ uid: 123 });

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.body.message).toBe("OK");
  });
});
