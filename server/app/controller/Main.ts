class Controller_Main extends App {
    constructor() {
        super();
        // global.navigator = global.navigator || {};
        // global.navigator.userAgent = global.navigator.userAgent || 'all';
    }

    execute() {
        this.Routes.post({
            "/getResult": "/action/api/GetResult.js",
            "/api": "/action/api/Api.js"
        });
        this.Routes.get({
            "/api": "/action/api/Api.js",
            "/*": "/action/show/Example.js"
        });
    }
}
export = Controller_Main;
