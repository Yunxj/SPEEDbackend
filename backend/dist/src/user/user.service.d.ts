import { Model } from 'mongoose';
import { User } from './user.model';
export declare class UserService {
    private readonly userModal;
    constructor(userModal: Model<User>);
    insertUser(params: User): Promise<{
        code: number;
        message: string;
        data: any;
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    getUser(query: User): Promise<{
        code: number;
        message: any;
        data: any;
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    deleteUser(param: {
        id: string;
    }): Promise<{
        code: number;
        message: string;
    }>;
}
