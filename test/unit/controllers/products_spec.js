import ProductsController from '../../../src/controllers/ProductsController';
import sinon from 'sinon';
import Product from '../../../src/models/product';

describe('Controller: Products', () => {
    const defaultProduct = [{
        name: 'Default product',
        description: 'product description',
        price: 100
    }];

    describe('get() products', () => {
        it('should return a list of products', async () => {
            const request = {};
            const response = {
                send: sinon.spy()
            };
            
            Product.find = sinon.stub();
            Product.find.withArgs({}).resolves(defaultProduct);

            const productsController = new ProductsController(Product);
            await productsController.get(request, response);

            sinon.assert.calledWith(response.send, defaultProduct);
        });
    });
});