import { Brand } from "../entities/Brand";
import { IBrand } from "../useCases/createBrand/createBrand.DTO";

export interface IBrandCreate{
    saveBrand(brand: Brand): Promise<void>,
};

export interface IBrandUpdatePrice{
    updateBrand(price: string): Promise<void>,
};
