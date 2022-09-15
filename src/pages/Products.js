import { React } from 'react'
import { useSelector } from 'react-redux'
import { ProductsBasic } from '../components'
const Products = () => {
  const { products } = useSelector((state) => state)
  return (
    <div>
      <ProductsBasic />
      <hr />
      {products.productsList.map((item) => {
        return (
          <div key={item._id}>
            <p>Name: {item.name}</p>
            <p>Category: {item.category}</p>
            <img
              style={{ maxWidth: '250px' }}
              src={item.image}
              alt={item.name}
            />
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Products
