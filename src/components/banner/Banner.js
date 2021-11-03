import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from '../products/Products';
import SignUp from '../signup/SignUp';
import Home from '../home/Home';
import Cart from '../cart/Cart';
import ProductsAll from '../productsAll/ProductsAll';

const Banner = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct }) => {

    return (
        <div>

            <Switch>
                <Route path="/products" exact>
                    <Products productItems={productItems} handleAddProduct={handleAddProduct} />
                </Route>
                <Route path="/productall">
                    <ProductsAll />
                </Route>
                <Route path="/signup" exact>
                    <SignUp />
                </Route>
                <Route path="/cart" exact>
                    <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export default Banner
