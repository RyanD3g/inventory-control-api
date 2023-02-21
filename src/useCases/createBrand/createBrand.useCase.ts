import { inject, injectable } from "tsyringe";
import { Brand } from "../../entities/Brand";
import { IBrandCreate } from "../../repositories/IBrandRepositorie";
import { IBrand } from "./createBrand.DTO";

@injectable()
export class createBrandCase{
    constructor(
        @inject("BranCreateImplementation")
        private brandImplemantation: IBrandCreate,
    ){};

    async exeute(brand: IBrand){
        const BrandEntite = new Brand(brand.category, brand);
        const saveBrand = await this.brandImplemantation.saveBrand(BrandEntite);
    };
};
