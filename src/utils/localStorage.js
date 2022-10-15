//  user in local Storage //
export const setUserInLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result) : null
  return user
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
}

// =======Product=========image==========
export const setImageInLocalStorage = (image) => {
  localStorage.setItem('image', JSON.stringify(image))
}

export const getImageFromLocalStorage = () => {
  const result = localStorage.getItem('image')
  const image = result ? JSON.parse(result) : null
  return image
}

export const removeImageFromLocalStorage = () => {
  localStorage.removeItem('image')
}
