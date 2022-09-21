import { React } from 'react'
import { useSelector } from 'react-redux'
import { ProductsBasic } from '../components'
import { formatPrice } from '../utils/helper'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
const Products = () => {
  const { products } = useSelector((state) => state)

  const handleEdit = (e) => {
    console.log(e.target)
    console.log('Edit')
  }
  const handleDelete = (e) => {
    console.log(e.target)
    console.log('Delete')
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
                  <DeleteOutlineOutlinedIcon onClick={(e) => handleDelete(e)} />
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
