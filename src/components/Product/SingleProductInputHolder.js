import React from 'react'

const SingleProductInputHolder = ({ state, handleChange, handleSubmit }) => {
  return (
    <>
      {/* id input */}
      <div>
        <label className='form-label' htmlFor='id'>
          id
        </label>
        <input
          type='text'
          name='id'
          id='id'
          className='form-input'
          value={state._id}
          onChange={handleChange}
        />
      </div>
      {/* category input */}
      <div>
        <label className='form-label' htmlFor='category'>
          category
        </label>
        <input
          type='text'
          name='category'
          id='category'
          className='form-input'
          value={state.category}
          onChange={handleChange}
        />
      </div>
      {/* name input */}
      <div>
        <label className='form-label' htmlFor='name'>
          name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='form-input'
          value={state.name}
          onChange={handleChange}
        />
      </div>
      {/* price input */}
      <div>
        <label className='form-label' htmlFor='price'>
          price
        </label>
        <input
          type='number'
          name='price'
          id='price'
          className='form-input'
          value={state.price}
          onChange={handleChange}
        />
      </div>
      {/* image input */}
      <div>
        <label className='form-label' htmlFor='image'>
          image
        </label>
        <input
          type='text'
          name='image'
          id='image'
          className='form-input'
          value={state.image}
          onChange={handleChange}
        />
      </div>
      {/* cloudinaryPublicId input */}
      <div>
        <label className='form-label' htmlFor='cloudinaryPublicId'>
          Cloudinary Public Id
        </label>
        <input
          type='text'
          name='cloudinaryPublicId'
          id='cloudinaryPublicId'
          className='form-input'
          value={state.cloudinaryPublicId}
          onChange={handleChange}
        />
      </div>
      {/* description input */}
      <div>
        <label className='form-label' htmlFor='description'>
          description
        </label>
        <input
          type='text'
          name='description'
          id='description'
          className='form-input'
          value={state.description}
          onChange={handleChange}
        />
      </div>
      {/* calories input */}
      <div>
        <label className='form-label' htmlFor='calories'>
          calories
        </label>
        <input
          type='text'
          name='calories'
          id='calories'
          className='form-input'
          value={state.calories}
          onChange={handleChange}
        />
      </div>
      {/* fat input */}
      <div>
        <label className='form-label' htmlFor='fat'>
          fat
        </label>
        <input
          type='text'
          name='fat'
          id='fat'
          className='form-input'
          value={state.fat}
          onChange={handleChange}
        />
      </div>
      {/* fiber input */}
      <div>
        <label className='form-label' htmlFor='fiber'>
          fiber
        </label>
        <input
          type='text'
          name='fiber'
          id='fiber'
          className='form-input'
          value={state.fiber}
          onChange={handleChange}
        />
      </div>
      {/* sugar input */}
      <div>
        <label className='form-label' htmlFor='sugar'>
          sugar
        </label>
        <input
          type='text'
          name='sugar'
          id='sugar'
          className='form-input'
          value={state.sugar}
          onChange={handleChange}
        />
      </div>
      {/* protein input */}
      <div>
        <label className='form-label' htmlFor='protein'>
          protein
        </label>
        <input
          type='text'
          name='protein'
          id='protein'
          className='form-input'
          value={state.protein}
          onChange={handleChange}
        />
      </div>
      {/* sodium input */}
      <div>
        <label className='form-label' htmlFor='sodium'>
          sodium
        </label>
        <input
          type='text'
          name='sodium'
          id='sodium'
          className='form-input'
          value={state.sodium}
          onChange={handleChange}
        />
      </div>
      {/* carbohydrates input */}
      <div>
        <label className='form-label' htmlFor='carbohydrates'>
          carbohydrates
        </label>
        <input
          type='text'
          name='carbohydrates'
          id='carbohydrates'
          className='form-input'
          value={state.carbohydrates}
          onChange={handleChange}
        />
      </div>
    </>
  )
}
export default SingleProductInputHolder
