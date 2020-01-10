/***************************************************************************
 *
 * Copyright (c) 2018 Baidu.com, Inc. All Rights Reserved
 * $Id$
 *
 **************************************************************************/

/**
 * @file Index.js
 * @extend bun.reactssr
 * react应用ssr demo
 */

class Action_Show_Example extends App {
    constructor() {
        super();
    }
    async execute(ctx: any) {
        let bsCommon: any = {};
        let state = {
            home: {},
            pageone: ""
        };
        // 获取各前端路由对应的model层入口
        let names = new Model_Services_Data_NamesData().getData();

        bsCommon.type = ctx.request.query.type || "a";
        state = Object.assign(state, {
            home: {
                names
            }
        });

        const initialState = state;
        // const store = this.Example_Index.configureStore(initialState);
        // global.window.config.ismobile = true;
        let serverRenderPath =
            bun.globalPath.ROOT_PATH + "/static/server-bundle.min.js";

        bun.plugins.SSR(
            {
                ctx,
                serverRenderPath,
                initialState
            },
            async (renderHtml: string) => {
                if (renderHtml) {
                    await ctx.render("example", {
                        react: renderHtml,
                        state: JSON.stringify(state)
                    });
                } else {
                    ctx.status = 404;
                    ctx.body = "Not found";
                }
            }
        );
    }
}
export = Action_Show_Example;
