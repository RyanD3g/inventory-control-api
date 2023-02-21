import { container } from "tsyringe";
import { IBrand } from "./createBrand.DTO";
import { createBrandCase } from "./createBrand.useCase";

export class createBrandController{
    async handle(brand: IBrand){
        const useCase = await container.resolve(createBrandCase);
        const saved = await useCase.exeute(brand);
    };
};
