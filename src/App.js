import React from 'react';
import './App.css';
import Products from './components/Products';
import Filter from './components/Filter';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      filteredProducts: []
    }
    this.handleChangeSort = this.handleChangeSort.bind(this)
    this.handleChangeSort = this.handleChangeSize.bind(this)
  }
componentWillMount() {
      fetch("http://localhost:8000/products").then(res => res.json())
      .then(data => this.setState({
        products: data,
        filteredProducts: data
      }));
  }

handleChangeSort(e){
  this.setState({
    sort: e.target.value
  });
  this.listProducts();
}
handleChangeSize(e){
  this.setState({
    size: e.target.value
  });
  this.listProducts();
}
listProducts(){
  this.setState(state => {
    // filter by price
    if(state.sort !== ''){
      state.products.sort((a,b)=>(state.sort==='lowest')? 
      (a.price > b.price?1: -1)
      : (a.price < b.price?1:-1))
    } else{
      state.products.sort((a,b)=>(a.id < b.id?1:-1));
    }
    if(state.size !== ''){
      return {filteredProducts: this.state.products.filter(a=> a.availableSizes.indexOf(state.size.toUpcase)
      )}
    }
    // filter by size
    if (state.size !== '') {
      return {filteredProducts: state.products.filter(a =>
          a.availableSizes.indexOf(state.size.toUppercase) >= 0
      )
    }
  }
    return {filteredProducts: state.products}
  })
}

  render() {
    
    return(
      <div className="container">
      <h1>E-commerce shopping cart</h1>
      <div className="rows"></div>
      <div className="col-md-8">
        <Filter size={this.state.size} sort={this.state.sort} handleChangeSize={this.handleChangeSize}
        handleChangeSort={this.handleChangeSort} count={this.state.filteredProducts.length} />
        <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
      </div>
      <div className="col-md-4">

      </div>
      <div className="basket"></div>
    </div>
  );
}
}

export default App;
