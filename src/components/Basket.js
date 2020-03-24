import React from 'react';

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
                            {cartItems.map(item=>
                                <li>
                                    <b>{item.title}</b>
                                    <button className="btn btn-danger"
                                        onClick={(e) => this.handleRemoveFromCart(e, item)}
                                    >X</button>
                                </li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        );
    }
}

export default Basket;