import { Request, Response } from "express";
import { container } from "tsyringe";
import { Category } from "../../entities/Category";
import { CategoryCase } from './Category.useCase';

export class CategoryController{
    async handle(data: string): Promise<void | unknown>{
        try{
        const CategoryuseCase = await container.resolve(CategoryCase);
        const result = await CategoryuseCase.execute(data);
        return result;

        }catch(e){
            return e;
        }
    };
}