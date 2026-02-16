import api from '@/lib/axios'

/**
 * @param {string} url - API endpoint
 * @param {'get'|'post'|'put'|'patch'|'delete'} method
 * @param {Object|FormData|null} data
 * @param {Object} options
 */
export default async function apiRequest(
  url,
  method = 'get',
  data = null,
  options = {}
) {
  try {
    const config = {
      url,
      method,
      ...options
    }

    // Attach body only when needed
    if (data) {
      config.data = data
    }

    const res = await api(config)
    return res.data
  } catch (error) {
    return {
      status: false,
      message:
        error.response?.data?.message || 'Something went wrong'
    }
  }
}
