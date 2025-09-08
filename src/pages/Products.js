// prods
// import Navlink from './components/Navlink';
import '../App.css';
import ProductComponent from '../components/ProductComponent';

function Products() {
  return (
    <div>
        Products Page
        <div className=' flex-col'>
        <h1> All Products</h1>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
         Add Product
        </button>
         </div>
        <ProductComponent/>
    </div>
  );
}

export default Products;
