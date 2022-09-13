import axios from 'axios'

// === UserData Root Url ===//

export const customFetch = axios.create({
  baseURL: 'https://burgerqueenbyinam.herokuapp.com/api/v1',
})
