import { container } from "tsyringe";
import { BranCreateImplementation } from "../repositories/implementations/BrandImplementation";
import { CategoryImplementation } from "../repositories/implementations/CategoryImplementation";

container.registerSingleton(
    "CategoryImplementation",
    CategoryImplementation,
);

container.registerSingleton(
    "BranCreateImplementation",
    BranCreateImplementation
);
