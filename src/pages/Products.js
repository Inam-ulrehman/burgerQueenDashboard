import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductsBasic } from '../components'
import { formatPrice } from '../utils/helper'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import AlertDialog from '../components/Cards/AlertDialog'
import { deleteProductThunk } from '../features/products/productsSlice'
const Products = () => {
  const { products } = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleEdit = (e) => {
    console.log(e.target)
    console.log('Edit')
  }

  const handleRead = (e) => {
    console.log(e.target)
    console.log('Read')
  }
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
                  <EditOutlinedIcon onClick={(e) => handleEdit(e)} />
                  <AlertDialog
                    content={'Do you really want to delete ?'}
                    title={'Alert'}
                    buttonText={<DeleteOutlineOutlinedIcon />}
                    action={() => dispatch(deleteProductThunk(item._id))}
                  />
                  <InfoOutlinedIcon onClick={(e) => handleRead(e)} />
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
