class NotFound {
    execute(ctx: any) {
        ctx.status = 404;
        ctx.body = "NotFound1";
    }
}

export = NotFound;
