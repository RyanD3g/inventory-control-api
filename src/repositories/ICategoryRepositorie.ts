import { Category } from "../entities/Category";

export interface ICategoryRequests{
    findByCategory(category: string): Promise<boolean | null>,
    saveCategory(category: Category): Promise<void>,
};
