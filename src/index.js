import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

// class OuterClickExample extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { isOpen: false };
//     this.toggleContainer = React.createRef();

//     this.onClickHandler = this.onClickHandler.bind(this);
//     this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
//   }

//   componentDidMount() {
//     window.addEventListener('click', this.onClickOutsideHandler);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('click', this.onClickOutsideHandler);
//   }

//   onClickHandler() {
//     this.setState(currentState => ({
//       isOpen: !currentState.isOpen
//     }));
//     console.log(this.toggleContainer.current);
//   }

//   onClickOutsideHandler(event) {
//     if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
//       this.setState({ isOpen: false });
//     }
//   }

//   render() {
//     return (
//       <div ref={this.toggleContainer}>
//         <button onClick={this.onClickHandler}>Select an option</button>
//         {this.state.isOpen && (
//           <ul>
//             <li>Option 1</li>
//             <li>Option 2</li>
//             <li>Option 3</li>
//           </ul>
//         )}
//       </div>
//     );
//   }
// }

// const PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

// class Searchbar extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }
//   handleFilterTextChange(e){
//     this.props.onFilterTextChange(e.target.value);
//   }
//   handleInStockChange(e){
//     this.props.onInStockChange(e.target.checked);
//   }
//   render(){
//     const filterText = this.props.filterText;
//     const inStockOnly = this.props.inStockOnly;
//     return(
//       <form>
//         <input type="text" placeholder="Search..." value={filterText} onChange={this.handleFilterTextChange}/>
//         <p>
//           <input type="checkbox" checked={inStockOnly} onChange={this.handleInStockChange} />
//           {' '}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }

// class ProductCategoryRow extends React.Component{
//   render(){
//     const category = this.props.category;
//     return (
//       <tr>
//         <th colSpan="2">
//           {category}
//         </th>
//       </tr>
//     );
//   }
// }

// class ProductRow extends React.Component{
//   render(){
//     const product = this.props.product;
//     const name = product.stocked ?
//       product.name :
//       <span style={{color: 'red'}}>
//         {product.name}
//       </span>;
//     return(
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
// }

// class ProductTable extends React.Component{
//   render(){
//     const filterText = this.props.filterText;
//     const inStockOnly = this.props.inStockOnly;
//     const rows = [];
//     let lastCategory = null;
//     this.props.products.forEach((product)=>{
//       if(product.name.indexOf(filterText) === -1)
//       return;
//       if(inStockOnly && !product.stocked)
//       return;
//       if(product.category !== lastCategory){
//         rows.push(
//           <ProductCategoryRow 
//           category={product.category}
//           key={product.category} />
//         );
//       }
//       rows.push(
//         <ProductRow 
//           product={product}
//           key={product.name} />
//       );
//         lastCategory = product.category;
//     });

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows}
//         </tbody>
//       </table>
//     );
//   }
// }

// class FilterableProductTable extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       filterText : '',
//       inStockOnly : false
//     };
//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }
//   handleFilterTextChange(filterText){
//     this.setState({
//       filterText : filterText
//     });
//   }

//   handleInStockChange(inStockOnly){
//     this.setState({
//         inStockOnly : inStockOnly
//     });
//   }
//   render(){
//     return (
//       <div>
//       <Searchbar 
//         filterText={this.state.filterText}
//         inStockOnly ={this.state.inStockOnly}
//         onFilterTextChange={this.handleFilterTextChange}
//         onInStockChange = {this.handleInStockChange} />
//       <ProductTable products = {this.props.products} 
//         filterText = {this.state.filterText}
//         inStockOnly = {this.state.inStockOnly} />
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);
