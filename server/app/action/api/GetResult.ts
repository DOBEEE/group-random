import fs = require("fs");
import path = require("path");

class Action_Api_GetResult extends App {
    constructor() {
        super();
    }
    async execute(ctx: any) {
        const objServiceData = new Model_Services_Page_GetResultShow();
        const gameID = ctx.request.body.id;
        const reset = ctx.request.body.reset;
        let res;
        if (reset) {
            res = objServiceData.resetData(gameID);
        } else {
            res = objServiceData.getRandomResById(gameID);
        }

        ctx.body = {
            data: res
        };
    }
}

export = Action_Api_GetResult;
