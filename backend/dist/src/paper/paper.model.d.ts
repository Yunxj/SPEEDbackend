import * as mongoose from 'mongoose';
export declare const PaperSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    approval: number;
    number?: string;
    journalName?: string;
    yearOfPublication?: number;
    volume?: string;
    pages?: string;
    DOI?: string;
    SE?: string;
    ratePersonNum?: number;
    rateTotal?: number;
    title?: string;
    authors?: string;
}>;
export interface Paper {
    id: string;
    title: string;
    authors: string;
    journalName: string;
    yearOfPublication: number;
    volume: string;
    number: string;
    pages: string;
    DOI: string;
    approval: number;
}
export interface getPaperInterFace {
    order?: 'ascend' | 'descend';
    sortBy?: keyof Paper;
    id?: string;
    title?: string;
    authors?: string;
    SE?: string;
    journalName?: string;
    yearOfPublication?: number;
    volume?: string;
    number?: string;
    pages?: string;
    DOI?: string;
    approval?: number;
    startYear: number | string;
    endYear: number | string;
}
