import styles from '../styles/App.module.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Success from '../pages/Success'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products/>
  },
  {
    path: '/products/:id',
    element: <ProductDetails/>
  },
  {
    path: '/checkout',
    element: <Checkout/>
  },
  {
    path: '/success',
    element: <Success/>
  },
])
function App() {

  return (
    <div className={styles.container}>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App



