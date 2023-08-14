import styles from '../styles/App.module.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products/>
  },
  {
    path: '/products',
    element: <ProductDetails/>
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



