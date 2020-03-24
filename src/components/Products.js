import React from 'react';
import util from '../util'

class Products extends React.Component {
    
    render() {
        const productItems = this.props.products.map( product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail-text-center">
                    <a href={`#${product.id}`} onClick={this.props.handleAddToCart}>
                        <img src={`/products/${product.sku}.jpg`} alt={product.title} />
                        <p>
                            {product.title}
                        </p>
                    </a>
                    <div>
                        <b>{util.formatCurrency(product.price)}</b>
                        <button className="btn btn-primary"
                        onClick={(e)=> this.props.handleAddToCart(e, product)}>Add To Cart</button>
                    </div>

                </div>
            </div>
        )
        )
        
        return (
         <div className="row">
             {productItems}
             </div>   
        );
    }
}

export default Products;