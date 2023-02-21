import { Brand } from "../../entities/Brand";
import { IBrand } from "../../useCases/createBrand/createBrand.DTO";
import { IBrandCreate } from "../IBrandRepositorie";

export class BranCreateImplementation implements IBrandCreate{
    private Brand: Brand[] = [];
    async saveBrand(brand: Brand): Promise<void> {
        const brandSaved = await this.Brand.push(brand);
        console.log('Content => ', this.Brand);
    };
};
