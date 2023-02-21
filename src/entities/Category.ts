export class Category{
    constructor(
        
        protected category: string,
        
        ){};

    get CategoryName(): string{
        return this.category;
    };
};
