"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperController = void 0;
const common_1 = require("@nestjs/common");
const paper_service_1 = require("./paper.service");
let PaperController = class PaperController {
    constructor(paperService) {
        this.paperService = paperService;
    }
    index3(params) {
        return this.paperService.insertPaper(params);
    }
    index2(query) {
        console.log('query list', query);
        return this.paperService.getPaper(query);
    }
    index1(param) {
        return this.paperService.deletePaper(param);
    }
    index6(params) {
        return this.paperService.editPaper(params);
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperController.prototype, "index3", null);
__decorate([
    (0, common_1.Get)('/list'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperController.prototype, "index2", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperController.prototype, "index1", null);
__decorate([
    (0, common_1.Put)('/edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperController.prototype, "index6", null);
PaperController = __decorate([
    (0, common_1.Controller)('paper'),
    __metadata("design:paramtypes", [paper_service_1.PaperService])
], PaperController);
exports.PaperController = PaperController;
//# sourceMappingURL=paper.controller.js.map