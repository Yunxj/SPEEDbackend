"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperModule = void 0;
const common_1 = require("@nestjs/common");
const paper_controller_1 = require("./paper.controller");
const paper_service_1 = require("./paper.service");
const mongoose_1 = require("@nestjs/mongoose");
const paper_model_1 = require("./paper.model");
let PaperModule = class PaperModule {
};
PaperModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Paper', schema: paper_model_1.PaperSchema }])],
        controllers: [paper_controller_1.PaperController],
        providers: [paper_service_1.PaperService],
    })
], PaperModule);
exports.PaperModule = PaperModule;
//# sourceMappingURL=paper.module.js.map