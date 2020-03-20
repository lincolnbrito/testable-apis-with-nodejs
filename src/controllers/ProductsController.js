class ProductsController {
    constructor(Product) {
        this.Product = Product;
    }

    async get(req, res) {
        let products;

        try {
            products = await this.Product.find({});
            res.send(products);
        } catch (err) {
            res.status(400).send(err.message)
        }
    }
}

export default ProductsController;