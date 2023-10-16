"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperSchema = void 0;
const mongoose = require("mongoose");
exports.PaperSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    authors: {
        type: String,
        require: true,
    },
    journalName: String,
    yearOfPublication: Number,
    volume: String,
    number: String,
    pages: String,
    DOI: String,
    SE: String,
    ratePersonNum: Number,
    rateTotal: Number,
    approval: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});
//# sourceMappingURL=paper.model.js.map