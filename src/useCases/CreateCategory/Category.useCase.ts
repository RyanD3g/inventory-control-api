import { inject, injectable } from "tsyringe";
import { Category  } from "../../entities/Category";
import { ICategoryRequests } from "../../repositories/ICategoryRepositorie";

@injectable()
export class CategoryCase{
    constructor(
        @inject('CategoryImplementation')
        private CategoryRepositorie: ICategoryRequests,
    ){};

    async execute(data: string){
        const findCategory = await this.CategoryRepositorie.findByCategory(data);
       
        if(findCategory){
            throw new Error('Categoria cadastrada!');
        };
        
        const Category_entitie = new Category(data);
        const saveCategory = await this.CategoryRepositorie.saveCategory(Category_entitie);
    };
};
