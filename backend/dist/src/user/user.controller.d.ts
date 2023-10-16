import { UserService } from './user.service';
import { User } from './user.model';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    index3(params: User): Promise<{
        code: number;
        message: string;
        data: any;
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    index2(query: User): Promise<{
        code: number;
        message: any;
        data: any;
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
}
