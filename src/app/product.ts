export class Product {
    id: number;
    title: string;
    description?: string;
    price?: number = 0;
    category?: number[];
    allergens?: string[];
    status?: string;
    likes_count?: number = 0;
    dislikes_count?: number = 0;
    tags?: string[];


    constructor(id: number, title: string, description: string, price: number, category: number[], allergens: string[], status: string, likes_count: number, dislikes_count: number, tags: string[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.category = category;
        this.allergens = allergens;
        this.status = status;
        this.likes_count = likes_count;
        this.dislikes_count = dislikes_count;
        this.tags = tags;

    }
}