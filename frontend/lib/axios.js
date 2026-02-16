import axios from 'axios'
import { getSession } from 'next-auth/react'
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api',
  withCredentials: true
})

api.interceptors.request.use(
  async config => {
    const session = await getSession()

    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`
    }

    return config
  },
  error => Promise.reject(error)
)

// Optional: global 401 handler
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Optional: logout / redirect
    }
    return Promise.reject(error)
  }
)

export default api


// import axios from 'axios'

// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   withCredentials: true
// })

// // Optional: Response error handling
// api.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response?.status === 401) {
//       // optional: handle unauthorized globally
//       // e.g. redirect to login or show toast
//     }
//     return Promise.reject(error)
//   }
// )

// export default api
