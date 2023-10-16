"use strict";
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const common_1 = require("@nestjs/common");
const express = require("express");
const app_module_1 = require("./app.module");
const server = express();
const createNestServer = async (expressInstance) => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressInstance), { cors: true });
    app.useGlobalPipes(new common_1.ValidationPipe());
    return app.init();
};
createNestServer(server);
module.exports = server;
//# sourceMappingURL=main.js.map