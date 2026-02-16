
import apiRequest from "@/lib/client-api";
// this function is for to get add news data
export async function addNews(data) {
  try {
    const res = await apiRequest('/api/news/','post',data);
    console.log('res',res);
    return res;
  } catch (error) {
    return {status: 'false', message : error.message, details : []};
  }
}
