export class Product {
    onSale: boolean = false;

    constructor(public name: string,
                public price: number,
                public previousPrice: number){}

    isOnSale():boolean {
        return this.price < this.previousPrice;
    }
}

