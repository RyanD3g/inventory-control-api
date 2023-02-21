import { IBrand } from "../useCases/createBrand/createBrand.DTO";
import { Category } from "./Category";

export class Brand extends Category{
    constructor(

        protected category: string,
        private brand: IBrand,

    ){
        super(category);
    };


    get BrandAndCategory(): Object{
        return {
            category: this.category,
            brand: this.brand,
        };
    };
};
