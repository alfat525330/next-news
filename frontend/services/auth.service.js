import axios from '@/lib/axios'

export const registerUser = async (data) => {
  const response = await axios.post('/api/auth/register', data);
  console.log('response',response);
  return response.data;
}
