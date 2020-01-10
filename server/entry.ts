/// <reference types="node" />
import "bun-skin";
import path = require("path");
// import "../../../bun/bun-skin";
(global as any).bun = new Bun("bun", {
    ROOT_PATH: __dirname,
    LOG_PATH: path.resolve(__dirname, "../logs"),
    isSingle: true,
    port: 8000
});
bun.bootstrap();
