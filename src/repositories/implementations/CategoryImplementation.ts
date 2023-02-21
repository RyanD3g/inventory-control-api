import { Category } from "../../entities/Category";
import { ICategoryRequests } from "../ICategoryRepositorie";

export class CategoryImplementation implements ICategoryRequests{
    private CategoryEntitie: Category[] = [];

    async findByCategory(category: string): Promise<boolean | null> {
        const findCategory = await this.CategoryEntitie.some(val => val.CategoryName === category);
        console.log(findCategory)
        return findCategory;
    };

    async saveCategory(category: Category): Promise<void> {
        const create = await this.CategoryEntitie.push(category);
    };
}