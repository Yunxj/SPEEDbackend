import { Model } from 'mongoose';
import { Paper, getPaperInterFace } from './paper.model';
export declare class PaperService {
    private readonly paperModal;
    constructor(paperModal: Model<Paper>);
    insertPaper(params: getPaperInterFace): Promise<{
        code: number;
        message: string;
    }>;
    getPaper(query: getPaperInterFace): Promise<{
        code: number;
        message: string;
        data: any[];
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    deletePaper(param: {
        id: string;
    }): Promise<{
        code: number;
        message: string;
    }>;
    editPaper(params: any): Promise<{
        code: number;
        message: string;
    }>;
}
