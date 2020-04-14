import React from 'react';
import util from '../util'

class Basket extends React.Component {
    render() {
        const { cartItems } = this.props
        return (
            <div className="alert alert-info">
                {cartItems.length === 0 ? "Basket is Empty" : <div> You have {cartItems.length} products in the basket</div>}
                {/* if cart items are greater than zero  */}
                {cartItems.length > 0 &&
                    <div>
                        <ul>
                            {cartItems.map(item =>
                                <li>
                                    <b>{item.title}</b>
                                    X {item.count} = {item.price * item.count}
                                    <button className="btn btn-danger"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}
                                    >X</button>
                                </li>
                            )}
                        </ul>
                        Total: {util.formatCurrency(cartItems.reduce((a, c) => a + c.price + c.count, 0))}
                    </div>
                }
                <button className="btn btn-primary"
                    onClick={() => (alert("Checkout needs to implement...."))}>Checkout</button>
            </div>
        );
    }
}

export default Basket;