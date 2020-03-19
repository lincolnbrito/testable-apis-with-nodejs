class ProductsController {
    constructor(Product) {
        this.Product = Product;
    }

    async get(req, res) {
        let products;

        try {
            products = await this.Product.find({});
        } catch (error) {
            console.log(error);
        }
        
        res.send(products);
    }
}

export default ProductsController;