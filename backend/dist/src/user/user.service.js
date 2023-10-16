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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UserService = class UserService {
    constructor(userModal) {
        this.userModal = userModal;
    }
    async insertUser(params) {
        try {
            const { name, password, role } = params;
            const newPaper = new this.userModal({ name, password, role });
            const result1 = await newPaper.save();
            const result2 = await this.userModal.find(params);
            console.log('result1', result1);
            console.log('result2', result2);
            return { code: 1, message: 'register success', data: result2[0].role };
        }
        catch (err) {
            return { code: 0, message: 'login fail' };
        }
    }
    async getUser(query) {
        try {
            const result = await this.userModal.find(query);
            console.log('result', result);
            let message;
            if (result.length === 0) {
                message = 'name or password or role is wrong please check';
            }
            else {
                message = 'login success';
            }
            return { code: 1, message, data: result[0].role };
        }
        catch (err) {
            return { code: 0, message: 'login fail' };
        }
    }
    async deleteUser(param) {
        const { id } = param;
        const result = await this.userModal.deleteOne({
            _id: id,
        });
        console.log('result2', result);
        return { code: 1, message: 'sucess' };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map