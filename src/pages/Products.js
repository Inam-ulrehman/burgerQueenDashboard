import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductsBasic } from '../components'
import { formatPrice } from '../utils/helper'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import AlertDialog from '../components/Cards/AlertDialog'
import { deleteProductThunk } from '../features/products/productsSlice'
import { Link } from 'react-router-dom'
const Products = () => {
  const { products } = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div className='tableHolder'>
      <ProductsBasic />
      <hr />
      <table>
        <thead>
          <tr>
            <td>Number</td>
            <td>Image</td>
            <td>Name</td>
            <td>Category</td>
            <td>price</td>
            <td>Icons</td>
          </tr>
        </thead>
        {products.productsList.map((item, index) => {
          return (
            <tbody key={item._id}>
              <tr>
                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                <td>
                  <img
                    style={{ maxWidth: '100px' }}
                    src={item.image}
                    alt={item.name}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{formatPrice(item.price)}</td>
                <td className='icons'>
                  <AlertDialog
                    content={'Do you really want to delete ?'}
                    title={'Alert'}
                    buttonText={<DeleteOutlineOutlinedIcon />}
                    action={() => dispatch(deleteProductThunk(item._id))}
                  />
                  <Link to={`/products/${item._id}`}>
                    <EditOutlinedIcon />
                  </Link>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}

export default Products
