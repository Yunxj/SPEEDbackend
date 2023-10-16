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
exports.PaperService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PaperService = class PaperService {
    constructor(paperModal) {
        this.paperModal = paperModal;
    }
    async insertPaper(params) {
        const newPaper = new this.paperModal(params);
        try {
            const result = await newPaper.save();
            console.log('result', result);
            return { code: 1, message: 'sucess' };
        }
        catch (err) {
            return { code: 0, message: 'insert fail' };
        }
    }
    async getPaper(query) {
        try {
            const regexField1 = new RegExp(query.title, 'i');
            const regexField2 = new RegExp(query.authors, 'i');
            const regexField3 = new RegExp(query.SE, 'i');
            const filterArray = [];
            if (query.id)
                filterArray.push({ _id: { $eq: query.id } });
            if (query.approval)
                filterArray.push({ approval: { $eq: query.approval } });
            if (query.title)
                filterArray.push({ title: { $regex: regexField1 } });
            if (query.authors)
                filterArray.push({ authors: { $regex: regexField2 } });
            if (query.SE)
                filterArray.push({ SE: { $regex: regexField3 } });
            if (query.startYear && query.endYear) {
                filterArray.push({
                    yearOfPublication: {
                        $gte: Number(query.startYear),
                        $lte: Number(query.endYear)
                    }
                });
            }
            else if (query.startYear) {
                filterArray.push({
                    yearOfPublication: { $gte: Number(query.startYear) }
                });
            }
            else if (query.endYear) {
                filterArray.push({
                    yearOfPublication: { $lte: Number(query.endYear) }
                });
            }
            let filter = {};
            if (filterArray.length > 0) {
                filter = {
                    $or: filterArray,
                };
            }
            console.log('filter', filterArray);
            const sortBy = query.sortBy;
            const order = query.order;
            let result;
            if (sortBy && order) {
                const sortOrder = query.order === 'ascend' ? 1 : -1;
                result = await this.paperModal.find(filter).sort({ [sortBy]: sortOrder });
            }
            else {
                result = await this.paperModal.find(filter);
            }
            console.log('result', result);
            return { code: 1, message: 'sucess', data: [...result] };
        }
        catch (err) {
            console.log(err);
            return { code: 0, message: 'getPaper fail' };
        }
    }
    async deletePaper(param) {
        const { id } = param;
        const result = await this.paperModal.deleteOne({
            _id: id,
        });
        console.log('resultDelete', result);
        return { code: 1, message: 'sucess' };
    }
    async editPaper(params) {
        const { id, title, authors, journalName, yearOfPublication, volume, number, pages, DOI, approval, SE, rate, } = params;
        try {
            const editForm = {
                title,
                authors,
                journalName,
                yearOfPublication,
                volume,
                number,
                pages,
                DOI,
                approval,
                SE,
            };
            if (rate) {
                let ratePersonNum, rateTotal;
                const result = await this.paperModal.find({ _id: id });
                console.log('result', result);
                const resultData = result[0];
                console.log('resultData', resultData);
                if (resultData.ratePersonNum) {
                    ratePersonNum = resultData.ratePersonNum + 1;
                }
                else {
                    ratePersonNum = 1;
                }
                if (resultData.rateTotal) {
                    rateTotal = resultData.rateTotal + rate;
                }
                else {
                    rateTotal = rate;
                }
                console.log('result', resultData);
                editForm.ratePersonNum = ratePersonNum;
                editForm.rateTotal = rateTotal;
            }
            console.log('editPaper', id, SE);
            const result2 = await this.paperModal.updateOne({
                _id: id,
            }, editForm);
            console.log('result2edit', result2);
            return { code: 1, message: 'edit sucess' };
        }
        catch (err) {
            return { code: 0, message: 'edit failed' };
        }
    }
};
PaperService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Paper')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PaperService);
exports.PaperService = PaperService;
//# sourceMappingURL=paper.service.js.map