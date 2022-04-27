import {Redirect, Route, Switch} from 'react-router-dom';
import MainHeader from './Components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import Product from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Switch>
          <Route path= '/' exact>
            <Redirect to ='/welcome'></Redirect>
          </Route>
      <Route path = '/welcome'>
        <Welcome></Welcome>
      </Route>
      <Route path = '/products' exact>
        <Product></Product>
      </Route>
      <Route path= '/products/:productID'>
        <ProductDetail></ProductDetail>
      </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;
