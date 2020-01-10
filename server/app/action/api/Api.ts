class Action_Api_Api extends App {
    constructor() {
        super();
    }
    async execute(ctx: any) {
        const objServiceData = new Model_Services_Data_NamesData();

        const bsCommon: any = {};
        bsCommon.type = ctx.request.query.type || "home";
        const data = objServiceData.getData();
        ctx.body = {
            data
        };
    }
}

export = Action_Api_Api;
