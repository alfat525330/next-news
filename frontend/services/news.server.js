import { cookies } from "next/headers";
import { getToken } from "next-auth/jwt";
import { redirect } from "next/navigation";
import callFetchfunction from '@/lib/server-api';

// this function is for to get all news list
export async function getNewsList() {

  const cookieStore = await cookies();

  const token = await getToken({
    req: { cookies: cookieStore },
    secret: process.env.NEXTAUTH_SECRET
  })

  console.log("SERVER TOKEN:", token)

  if (!token?.accessToken) {
    redirect("/") // or /login
  }

  //Fetch backend with token
  const res = await callFetchfunction('news','get',token.accessToken);

  if (!res.ok) {
    throw new Error("Failed to fetch news")
  }

  return res.json()
}

// this function is for to get all news list
export async function getNewsDetails(slug) {
  
  const cookieStore = await cookies();

  const token = await getToken({
    req: { cookies: cookieStore },
    secret: process.env.NEXTAUTH_SECRET
  })

  console.log("SERVER TOKEN:", token)

  if (!token?.accessToken) {
    redirect("/") // or /login
  }

  //Fetch backend with token
  const res = await callFetchfunction(`news/${slug}`,'get',token.accessToken);

  if (!res.ok) {
    throw new Error("Failed to fetch news")
  }

  return res.json()
}

