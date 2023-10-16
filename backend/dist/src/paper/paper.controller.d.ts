import { PaperService } from './paper.service';
import { getPaperInterFace } from './paper.model';
export declare class PaperController {
    private readonly paperService;
    constructor(paperService: PaperService);
    index3(params: getPaperInterFace): Promise<{
        code: number;
        message: string;
    }>;
    index2(query: getPaperInterFace): Promise<{
        code: number;
        message: string;
        data: any[];
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    index1(param: {
        id: string;
    }): Promise<{
        code: number;
        message: string;
    }>;
    index6(params: {
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
        SE: string;
    }): Promise<{
        code: number;
        message: string;
    }>;
}
