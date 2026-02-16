// this is common helper function for use fetch for server side api call
export default async function callFetchfunction(url,method,token){
  return  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${url}`,
    method,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      cache: "no-store"
  })
}