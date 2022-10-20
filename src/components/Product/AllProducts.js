import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  deleteImageAndProductThunk,
  productThunk,
} from '../../features/product/productSlice'

const AllProducts = ({ fetchData }) => {
  const dispatch = useDispatch()
  const { isLoading, nbHits, products, afterDeleteFetchProduct } = useSelector(
    (state) => state.product
  )

  useEffect(() => {
    dispatch(productThunk())

    // eslint-disable-next-line
  }, [fetchData, afterDeleteFetchProduct])

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <div>
      <div>{nbHits}</div>
      <table>
        <thead>
          <tr>
            <th>index</th>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        {products?.map((item, index) => {
          return (
            <tbody key={item._id}>
              <tr>
                <td>{index + 1}</td>
                <td>
                  <img style={{ width: '100px' }} src={item.image} alt='' />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    type='button'
                    onClick={() => dispatch(deleteImageAndProductThunk(item))}
                  >
                    Delete
                  </button>
                  <Link to={`/product/${item._id}`}>update</Link>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}

export default AllProducts
